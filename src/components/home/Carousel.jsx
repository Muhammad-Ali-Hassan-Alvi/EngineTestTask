"use client";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const visibleSlides = 3;

  const nextSlide = () =>
    setCurrent((prev) =>
      prev < slides.length - visibleSlides ? prev + 1 : prev
    );

  const prevSlide = () => setCurrent((prev) => (prev > 0 ? prev - 1 : prev));

  return (
    <div className="relative w-full overflow-hidden py-6 group">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / 3)}%)`,
          width: `${(slides.length / 3) * 100}%`,
        }}
      >
        {slides.map((slide, idx) => (
          <div key={idx} className="w-fit px-3 flex-shrink-0 relative group">
            <div
              className="w-[400px] h-[500px] bg-cover bg-center shadow relative flex flex-col items-center justify-center"
              style={{ backgroundImage: `url(${slide.imageSrc})` }}
            >
              <div className="absolute bg-black/20 group-hover:bg-black/30 transition-all duration-300 inset-0"></div>

              {slide.overlayText && (
                <div className="relative z-10 text-white text-center font-bold text-5xl drop-shadow-xl mb-4">
                  {slide.overlayText}
                </div>
              )}

              <button className="relative z-10 bg-white text-black px-6 py-2 shadow text-lg hover:bg-gray-100 transition -bottom-48">
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-7 -translate-y-1/2 
             bg-white hover:bg-white/50 
             text-gray-800 hover:text-white 
             rounded-full p-6 shadow-md z-10 
             opacity-0 group-hover:opacity-100 
             transition-all duration-300 backdrop-blur-sm"
      >
        <FaChevronLeft size={30} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-7 -translate-y-1/2 bg-white hover:bg-white/50 text-gray-800 hover:text-white rounded-full p-6 shadow-md z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
      >
        <FaChevronRight size={30} />
      </button>
    </div>
  );
}
