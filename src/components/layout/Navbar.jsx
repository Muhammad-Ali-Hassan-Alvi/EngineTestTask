"use client";
import MegaMenu from "@/app/(components)/MegaMenu";
import { FaHeart } from "react-icons/fa";
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function Navbar() {
  const count = useSelector((s) => s.cart.items.reduce((a, b) => a + b.qty, 0));
  const items = useSelector((s) => s.cart.items);
  const wishCount = useSelector((s) => s.wishlist.items.length);

  useEffect(() => {
    // Debug: log cart items to help trace why cart/wishlist counts don't update
    console.debug('Navbar cart items:', items);
  }, [items]);
  return (
    <header className="relative top-0 z-40 bg-transparent">
      <div className="h-8 text-[13px] flex items-center bg-white/60 border-b overflow-hidden">
        <span className="whitespace-nowrap animate-[custom-marquee_35s_linear_infinite] block w-full">
          Free Delivery for orders above Rs. 5,000.
        </span>
      </div>

      <div className="h-16 flex items-center justify-between bg-transparent px-12">
        <nav className="hidden sm:flex items-center gap-8 nav-link mt-14">
          <button data-open-mega className="text-red-600 font-bold">
            Sale
          </button>
          <button className="font-bold" data-open-mega>
            New In
          </button>
          <button className="font-bold" data-open-mega>
            Men
          </button>
          <button className="font-bold" data-open-mega>
            Women
          </button>
          <button className="font-bold" data-open-mega>
            Kids
          </button>
        </nav>

        <div className="text-[40px] mt-10 font-extrabold text-rose-600">
          ENGINE
        </div>

        <div className="flex items-center justify-between mt-14">
          <div className="w-[200px] max-w-[40vw] hidden md:block">
            <input
              placeholder="Search..."
              className="w-40 h-10 rounded-full border-[1.5px] px-5 text-sm bg-transparent text-black border-black placeholder-black"
            />
          </div>

          <div className="relative flex w-12 justify-between">
              <Link href="/wishlist" aria-label="Wishlist" className="hidden sm:inline-block relative">
                <FaHeart className="text-white stroke-black stroke-[40]" size={20} />
                <span className="absolute -top-2 -right-2 bg-black text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {wishCount}
                </span>
              </Link>
            </div>

          <Link href="/cart" aria-label="Bag" className="hidden sm:inline-flex items-center justify-center bg-white rounded-full w-10 h-10">
            {/* Custom SVG Cart Icon */}
            <svg
              id="silentLuxuryCart"
              width="17"
              height="19"
              viewBox="0 0 17 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                display: "inline-block",
                width: "17px",
                height: "19px",
                zIndex: 10,
              }}
            >
              <path
                d="M6.66016 10.997V3.322C6.66016 2.70617 6.9048 2.11556 7.34025 1.6801C7.77571 1.24464 8.36632 1 8.98216 1C9.28717 0.999869 9.58922 1.05983 9.87105 1.17646C10.1529 1.2931 10.409 1.46411 10.6247 1.67974C10.8404 1.89538 11.0116 2.15139 11.1283 2.43318C11.2451 2.71496 11.3052 3.01699 11.3052 3.322V3.754"
                stroke="black"
                strokeLinecap="square"
              ></path>
              <path
                d="M8.57218 5.453H14.0982C14.5232 5.453 14.8782 5.778 14.9132 6.201L15.8512 17.111C15.8612 17.2242 15.8475 17.3381 15.811 17.4457C15.7745 17.5533 15.716 17.6521 15.6393 17.7358C15.5625 17.8195 15.4692 17.8864 15.3652 17.932C15.2611 17.9777 15.1488 18.0012 15.0352 18.001H1.81817C1.70467 18.001 1.5924 17.9774 1.48851 17.9317C1.38462 17.886 1.29138 17.8191 1.21473 17.7354C1.13807 17.6517 1.07968 17.553 1.04325 17.4455C1.00683 17.338 0.993184 17.2241 1.00317 17.111L1.94117 6.201C1.9587 5.99693 2.05216 5.80685 2.20306 5.66835C2.35397 5.52985 2.55135 5.453 2.75618 5.453H4.67717"
                stroke="black"
                strokeLinecap="square"
              ></path>
            </svg>
          </Link>
        </div>
      </div>

      <div className="sm:hidden px-4 pb-3">
        <nav className="flex items-center gap-6 text-sm font-bold">
          <button data-open-mega className="text-red-600">
            Sale
          </button>
          <button data-open-mega>New In</button>
          <button data-open-mega>Men</button>
          <button data-open-mega>Women</button>
          <button data-open-mega>Kids</button>
        </nav>
      </div>

      <MegaMenu />
    </header>
  );
}
