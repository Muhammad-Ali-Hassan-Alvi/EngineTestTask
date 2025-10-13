"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSlider({ images }) {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative aspect-[16/7] sm:aspect-[16/6] lg:aspect-[16/5]">
        <Slider images={images} />
      </div>
    </section>
  );
}

function Slider({ images }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 5000);
    return () => clearInterval(id);
  }, [images.length]);

  const go = (dir) => setIndex((i) => (i + dir + images.length) % images.length);

  return (
    <div className="h-full w-full">
      {images.map((src, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}>
          <Image src={src} alt={`Slide ${i+1}`} fill className="object-cover" priority={i===0} />
        </div>
      ))}
      <button aria-label="Prev" onClick={() => go(-1)} className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 grid place-items-center">‹</button>
      <button aria-label="Next" onClick={() => go(1)} className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 grid place-items-center">›</button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} className={`h-2.5 w-2.5 rounded-full ${i===index? 'bg-white' : 'bg-white/50'}`} />
        ))}
      </div>
    </div>
  );
}


