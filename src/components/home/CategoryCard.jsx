import Image from "next/image";

export default function CategoryCard({ title, src, href }) {
  return (
    <a href={href || '#'} className="group">
      <div className="relative aspect-[3/4] overflow-hidden rounded">
        <Image src={src} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <span className="bg-white/90 px-4 py-1.5 rounded shadow text-[15px]">{title}</span>
        </div>
      </div>
    </a>
  );
}


