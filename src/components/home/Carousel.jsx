"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Hi this is a test for username in git
export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(2);

  const containerRef = useRef(null); // track element
  const slideRef = useRef(null); // first slide to measure width

  const startX = useRef(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);
  const isDragging = useRef(false);
  const animationRef = useRef(null);

  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const pointerIdRef = useRef(null);

  const getSlideWidth = () =>
    slideRef.current ? slideRef.current.offsetWidth : 0;

  const nextSlide = () => {
    if (current < slides.length - visibleSlides) setCurrent((p) => p + 1);
  };

  const prevSlide = () => {
    if (current > 0) setCurrent((p) => p - 1);
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
    const updateVisible = () => {
      try {
        const w = window.innerWidth;
        // sm breakpoint ~640px
        setVisibleSlides(w >= 640 ? 3 : 2);
      } catch {}
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  useEffect(() => {
    const maxIndex = Math.max(0, slides.length - visibleSlides);
    if (current > maxIndex) setCurrent(maxIndex);
  }, [visibleSlides, slides.length]); // keep within bounds when resizing

  useEffect(() => {
    const slideWidth = getSlideWidth();
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (containerRef.current) {
      containerRef.current.style.transition = reduceMotion
        ? "none"
        : "transform 350ms cubic-bezier(.22,.61,.36,1)";
      containerRef.current.style.transform = `translateX(-${
        current * slideWidth
      }px)`;
    }
  }, [current]);

  useEffect(() => {
    const onEnd = () => {
      const slideWidth = getSlideWidth();
      prevTranslate.current = -current * slideWidth;
    };
    const node = containerRef.current;
    if (!node) return;
    node.addEventListener("transitionend", onEnd);
    return () => node.removeEventListener("transitionend", onEnd);
  }, [current]);

  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver(() => {
      setPositionByIndex();
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [current, visibleSlides]);

  const rubberband = (value, min, max) => {
    if (value < min) return min + (value - min) / 3;
    if (value > max) return max + (value - max) / 3;
    return value;
  };

  // NOTE: attach pointer handlers to the track (containerRef), not the outer wrapper
  const handlePointerDown = (e) => {
    // ignore non-left clicks and interactive elements (safety)
    if (e.button !== 0) return;
    const target = e.target;
    if (target && target.closest('button, a, input, textarea, [role="button"]'))
      return;

    if (!containerRef.current) return;
    isDragging.current = true;
    pointerIdRef.current = e.pointerId;

    e.currentTarget.setPointerCapture(e.pointerId);

    startX.current = e.clientX;
    lastXRef.current = e.clientX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;

    // disable transition during drag
    containerRef.current.style.transition = "";
    document.body.style.userSelect = "none";
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;

    const now = performance.now();
    const dx = e.clientX - startX.current;

    const slideWidth = getSlideWidth();
    const minTranslate = -(slides.length - visibleSlides) * slideWidth;
    const maxTranslate = 0;

    currentTranslate.current = rubberband(
      prevTranslate.current + dx,
      minTranslate,
      maxTranslate
    );

    const deltaX = e.clientX - lastXRef.current;
    const deltaT = Math.max(1, now - lastTimeRef.current);
    velocityRef.current = deltaX / deltaT; // px/ms
    lastXRef.current = e.clientX;
    lastTimeRef.current = now;

    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(() => {
      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
      }
    });
  };

  const handlePointerUp = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    document.body.style.userSelect = "auto";

    // release pointer capture if held
    try {
      if (
        e.currentTarget?.releasePointerCapture &&
        pointerIdRef.current != null
      ) {
        e.currentTarget.releasePointerCapture(pointerIdRef.current);
      }
    } catch {}

    const slideWidth = getSlideWidth();
    const movedBy = currentTranslate.current - prevTranslate.current;

    const v = velocityRef.current; // px/ms
    const isFlick = Math.abs(v) > 0.5;

    let newIndex = current;
    if (isFlick) {
      if (v < 0 && current < slides.length - visibleSlides)
        newIndex = current + 1;
      if (v > 0 && current > 0) newIndex = current - 1;
    } else {
      if (movedBy < -60 && current < slides.length - visibleSlides)
        newIndex = current + 1;
      else if (movedBy > 60 && current > 0) newIndex = current - 1;
    }

    setCurrent(newIndex);
  };

  const handleWheel = (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
      if (e.deltaX > 0) nextSlide();
      else prevSlide();
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden py-6 group select-none"
      style={{ touchAction: "pan-y" }}
      onWheel={handleWheel}
      role="region"
      aria-roledescription="carousel"
    >
      <div
        ref={containerRef}
        className="flex"
        style={{
          width: `${(slides.length / visibleSlides) * 100}%`,
          willChange: "transform",
          touchAction: "pan-y",
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onPointerLeave={() =>
          isDragging.current &&
          handlePointerUp({ currentTarget: containerRef.current })
        }
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

              {slide.href &&
                (slide.href.startsWith("/") ? (
                  <Link
                    href={slide.href}
                    className="relative z-10 bg-white text-black px-6 py-2 shadow text-lg hover:bg-gray-100 transition-transform duration-300 transform group-hover:-translate-y-8 -bottom-48"
                  >
                    {slide.buttonText}
                  </Link>
                ) : (
                  <a
                    href={slide.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 bg-white text-black px-6 py-2 shadow text-lg hover:bg-gray-100 transition-transform duration-300 transform group-hover:-translate-y-8 -bottom-48"
                  >
                    {slide.buttonText}
                  </a>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-7 -translate-y-1/2 bg-white hover:bg-white/50 text-gray-800 hover:text-white rounded-full p-6 shadow-md z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
        disabled={current === 0}
        aria-label="Previous slide"
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
        aria-label="Next slide"
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
