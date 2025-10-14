"use client";
import { useState } from 'react';

export default function SizeSelector({ sizes = ["XS", "S", "M", "L", "XL"], onChange }) {
  const [selected, setSelected] = useState(sizes[2] || null);

  return (
    <div>
      <div className="mb-2 text-sm font-medium">Size</div>
      <div className="flex gap-2">
        {sizes.map((s) => (
          <button
            key={s}
            onClick={() => { setSelected(s); onChange && onChange(s); }}
            className={`w-10 h-10 border rounded text-sm ${selected === s ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
