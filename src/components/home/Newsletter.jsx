"use client";
import React from "react";
import { FaPinterestP, FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa";

export default function Newsletter() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white p-4 lg:p-8">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1fr] gap-8 items-center">
        {/* Column 1: Left Images */}
        <div className="flex flex-col gap-56">
          <div className="flex ">
            <img
              src="https://engine.com.pk/cdn/shop/files/Stay_in_touch_-2_7a7bbbae-7c39-4549-90ad-947980961999.jpg?v=1751976662"
              alt="Woman listening to music"
              className="w-48 h-48 md:w-36 md:h-56 object-cover rounded-3xl shadow-lg"
            />
            <a
              href="#"
              className="h-16 w-16 flex justify-center items-center bg-white p-1 ml-10 rounded-full hover:bg-gray-100 transition border"
            >
              <FaFacebookF />
            </a>
          </div>
          {/* Bottom-left image */}
          <div className="flex items-center ml-24">
            <a
              href="#"
              className="h-16 w-16 flex justify-center items-center bg-white p-1 mr-10 rounded-full hover:bg-gray-100 transition border "
            >
              <FaTiktok />
            </a>
            <img
              src="https://engine.com.pk/cdn/shop/files/Stay_in_touch_-_4_4a1af171-b28a-437e-91ef-0ed9bf68383b.jpg?v=1751976662"
              alt="Woman posing"
              className="w-48 h-48 md:w-36 md:h-56 object-cover rounded-3xl shadow-lg"
            />
          </div>
        </div>

        {/* Column 2: Central Content */}
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900">
            Stay In
            <br />
            Touch
          </h1>
          <form className="mt-8 flex flex-col sm:flex-row items-center justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter email..."
              className="w-full sm:w-auto flex-grow px-4 py-4 text-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-gray-900 text-white px-4 py-4 text-lg hover:bg-gray-800 transition"
            >
              Join JewelMine
            </button>
          </form>
        </div>

        {/* Column 3: Right Images */}
        <div className="flex flex-col gap-56">
          {/* Top-right image */}
          <div className="flex">
            <img
              src="https://engine.com.pk/cdn/shop/files/Stay_in_touch_-3_c88145d5-ce1d-4530-95b4-20e3eac2ecbc.jpg?v=1751976662"
              alt="Man in casual wear"
              className="w-48 h-48 md:w-36 md:h-56 object-cover rounded-3xl shadow-lg"
            />
            <a
              href="#"
              className="h-16 w-16 flex justify-center items-center bg-white p-1 ml-10 rounded-full hover:bg-gray-100 transition border"
            >
              <FaInstagram />
            </a>
          </div>
          {/* Bottom-right image */}
          <div className="flex items-center ml-24">
            <a
              href="#"
              className="h-16 w-16 flex justify-center items-center bg-white p-1 mr-10 rounded-full hover:bg-gray-100 transition border"
            >
              <FaPinterestP />
            </a>
            <img
              src="https://engine.com.pk/cdn/shop/files/Stay_in_touch_-1_0982e208-7d51-4654-aef6-6809d642bcad.jpg?v=1751976662"
              alt="Man in a pink shirt"
              className="w-48 h-48 md:w-36 md:h-56 object-cover rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
