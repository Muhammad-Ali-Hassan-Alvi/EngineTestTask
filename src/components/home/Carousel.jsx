"use client";
import { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const visibleSlides = 3;

  const containerRef = useRef(null);
  const slideRef = useRef(null);
  const startX = useRef(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);
  const isDragging = useRef(false);
  const animationRef = useRef(null);

  const getSlideWidth = () => {
    return slideRef.current ? slideRef.current.offsetWidth : 0;
  };

  const nextSlide = () => {
    if (current < slides.length - visibleSlides) {
      setCurrent((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  const setPositionByIndex = () => {
    const slideWidth = getSlideWidth();
    currentTranslate.current = current * -slideWidth;
    prevTranslate.current = currentTranslate.current;
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
    }
  };

  useEffect(() => {
    const slideWidth = getSlideWidth();
    if (containerRef.current) {
      containerRef.current.style.transition = "transform 0.5s ease-out";
      containerRef.current.style.transform = `translateX(-${
        current * slideWidth
      }px)`;
    }
  }, [current]);

  const handleStart = (x, isTouchEvent = false) => {
    isDragging.current = true;
    startX.current = x;
    if (containerRef.current) {
      containerRef.current.style.transition = ""; // Disable transition during drag
    }
    document.body.style.userSelect = "none"; // Prevent text selection during drag
  };

  const handleMove = (x, isTouchEvent = false) => {
    if (!isDragging.current) return;

    const currentX = x;
    const diff = currentX - startX.current;
    currentTranslate.current = prevTranslate.current + diff;

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    animationRef.current = requestAnimationFrame(() => {
      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
      }
    });
  };

  const handleEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    document.body.style.userSelect = "auto";

    const slideWidth = getSlideWidth();
    const movedBy = currentTranslate.current - prevTranslate.current;

    // Determine whether to switch to the next/prev slide
    if (movedBy < -80 && current < slides.length - visibleSlides) {
      setCurrent((prev) => prev + 1);
    } else if (movedBy > 80 && current > 0) {
      setCurrent((prev) => prev - 1);
    } else {
      // If not moved enough, snap back to the original position
      if (containerRef.current) {
        containerRef.current.style.transition = "transform 0.3s ease-out";
        containerRef.current.style.transform = `translateX(${prevTranslate.current}px)`;
      }
    }
    // Update prevTranslate to the new position after the slide change effect completes
    setTimeout(() => {
      const newSlideWidth = getSlideWidth();
      prevTranslate.current = -current * newSlideWidth;
    }, 500);
  };

  const handleWheel = (e) => {
    // Check for horizontal scroll (typical for trackpads)
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
      if (e.deltaX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden py-6 group select-none"
      onMouseDown={(e) => {
        e.preventDefault();
        handleStart(e.clientX);
      }}
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseUp={handleEnd}
      onMouseLeave={() => isDragging.current && handleEnd()}
      onTouchStart={(e) => handleStart(e.touches[0].clientX, true)}
      onTouchMove={(e) => {
        e.preventDefault();
        handleMove(e.touches[0].clientX, true);
      }}
      onTouchEnd={handleEnd}
      onWheel={handleWheel}
    >
      <div
        ref={containerRef}
        className="flex"
        style={{ width: `${(slides.length / visibleSlides) * 100}%` }}
      >
        {slides.map((slide, idx) => (
          <div
            ref={idx === 0 ? slideRef : null}
            key={idx}
            className="w-full px-3 flex-shrink-0"
            style={{ flexBasis: `${100 / slides.length}%` }}
          >
            <div
              className="w-full h-[500px] bg-cover bg-center shadow relative flex flex-col items-center justify-center group"
              style={{
                backgroundImage: `url(${slide.imageSrc})`,
                cursor: isDragging.current ? "grabbing" : "grab",
              }}
            >
              <div className="absolute bg-black/20 group-hover:bg-black/30 transition-all duration-300 inset-0"></div>

              {slide.overlayText && (
                <div className="relative z-10 text-white text-center font-bold text-5xl drop-shadow-xl mb-4">
                  {slide.overlayText}
                </div>
              )}

              <button className="relative z-10 bg-white text-black px-6 py-2 shadow text-lg hover:bg-gray-100 transition-transform duration-300 transform group-hover:-translate-y-8 -bottom-48">
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-7 -translate-y-1/2 bg-white hover:bg-white/50 text-gray-800 hover:text-white rounded-full p-6 shadow-md z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
        disabled={current === 0}
        style={{
          opacity: current === 0 ? 0 : "",
          cursor: current === 0 ? "not-allowed" : "pointer",
        }}
      >
        <FaChevronLeft size={30} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-7 -translate-y-1/2 bg-white hover:bg-white/50 text-gray-800 hover:text-white rounded-full p-6 shadow-md z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
        disabled={current >= slides.length - visibleSlides}
        style={{
          opacity: current >= slides.length - visibleSlides ? 0 : "",
          cursor:
            current >= slides.length - visibleSlides
              ? "not-allowed"
              : "pointer",
        }}
      >
        <FaChevronRight size={30} />
      </button>
    </div>
  );
}
