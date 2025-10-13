"use client";
import { useEffect, useState } from "react";

const columns = [
  {
    title: "Sale",
    items: [
      "Summer Sale",
      "Tops",
      "Bottoms",
      "Sets",
      "Active Wear",
      "Accessories",
      "Outerwear",
      "View All",
      "Clearance Sale",
    ],
  },
];

export default function MegaMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const openers = document.querySelectorAll('[data-open-mega]');
    const onClick = () => setOpen(true);
    openers.forEach((el) => el.addEventListener('click', onClick));
    return () => openers.forEach((el) => el.removeEventListener('click', onClick));
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
      <div className="absolute left-4 right-4 top-6 bottom-6 bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="flex items-center gap-6 px-6 h-14 border-b text-lg font-semibold">
          <button className="text-red-600">Sale</button>
          <button>New In</button>
          <button>Men</button>
          <button>Women</button>
          <button>Kids</button>
          <button className="ml-auto text-xl" onClick={() => setOpen(false)}>×</button>
        </div>
        <div className="h-[calc(100%-3.5rem)] overflow-y-auto px-8 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {columns.map((col, i) => (
              <div key={i}>
                <div className="font-semibold mb-3">{col.title}</div>
                <ul className="space-y-4 text-[15px]">
                  {col.items.map((it) => (
                    <li key={it} className="flex items-center justify-between border-b pb-3">
                      <span>{it}</span>
                      <span>▾</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


