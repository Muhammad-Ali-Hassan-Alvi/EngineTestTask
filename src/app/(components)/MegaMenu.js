"use client";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

// Data remains the same...
const menuData = {
  Sale: {
    title: "Sale",
    columns: [
      {
        heading: "Shop Sale",
        items: [
          "Summer Sale",
          "Tops",
          "Bottoms",
          "Sets",
          "Active Wear",
          "Accessories",
          "Outerwear",
          "Clearance Sale",
        ],
      },
      {
        heading: "Featured",
        items: ["Bestsellers on Sale", "New to Sale", "Shop All Sale"],
      },
    ],
  },
  "New In": {
    /* ... */
  },
  Men: {
    /* ... */
  },
  Women: {
    /* ... */
  },
  Kids: {
    /* ... */
  },
};

// The component now accepts `open` and `onClose` props
export default function MegaMenu({ open, onClose }) {
  const [activeTab, setActiveTab] = useState("Sale");

  // This effect to lock body scroll is still useful
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const activeContent = menuData[activeTab];

  return (
    <div
      // Use the `onClose` prop for the overlay
      onClick={onClose}
      aria-hidden={!open}
      className={`fixed inset-0 z-50 transition-colors duration-300 ease-in-out ${
        open ? "bg-black/50" : "bg-transparent pointer-events-none"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute bottom-0 left-0 right-0 flex max-h-[85vh] w-full flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out 
                    md:bottom-auto md:left-1/2 md:top-1/2 md:max-h-[80vh] md:w-full md:max-w-4xl md:rounded-2xl ${
                      open
                        ? "translate-y-0 md:-translate-x-1/2 md:-translate-y-1/2"
                        : "translate-y-full md:translate-y-[-200%] md:-translate-x-1/2"
                    }`}
      >
        <div className="flex w-full justify-center p-2 md:hidden">
          <div className="h-1.5 w-12 rounded-full bg-gray-300"></div>
        </div>

        <div className="flex shrink-0 items-center gap-4 border-b px-6 text-sm font-semibold sm:gap-6 sm:text-base">
          {Object.keys(menuData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 transition-colors ${
                activeTab === tab
                  ? "border-b-2 border-red-600 text-red-600"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
          {/* Use the `onClose` prop for the close button */}
          <button
            className="ml-auto text-2xl text-gray-500 hover:text-black"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        <div className="overflow-y-auto px-8 py-6">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3">
            {activeContent?.columns.map((col, i) => (
              <div key={i}>
                <div className="mb-4 font-bold text-gray-800">
                  {col.heading}
                </div>
                <ul className="space-y-3 text-[15px] text-gray-600">
                  {col.items.map((it) => (
                    <li
                      key={it}
                      className="flex cursor-pointer items-center justify-between hover:text-black"
                    >
                      <span>{it}</span>
                      <FaChevronDown className="-rotate-90 text-xs" />
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
