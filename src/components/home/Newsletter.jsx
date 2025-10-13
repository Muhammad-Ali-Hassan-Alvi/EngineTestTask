"use client";
import { useEffect, useState } from "react";

// SVG Icon Components (for better reusability)
const FacebookIcon = () => (
  <svg
    className="w-6 h-6"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 29 29"
  >
    <path
      d="M16.37 16.067h2.916l1.167-4.667H16.37V9.067c0-1.202 0-2.333 2.333-2.333h1.75v-3.92c-.38-.05-1.816-.164-3.333-.164-3.168 0-5.417 1.933-5.417 5.484V11.4h-3.5v4.667h3.5v9.917h4.667v-9.917Z"
      fill="#fff"
    ></path>
  </svg>
);

const InstagramIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 29 29"
  >
    <path
      d="M14.034 10.817a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm0-2.334a5.833 5.833 0 1 1 0 11.666 5.833 5.833 0 0 1 0-11.666Zm7.583-.291a1.459 1.459 0 1 1-2.917 0 1.459 1.459 0 0 1 2.917 0Zm-7.583-3.209c-2.886 0-3.358.008-4.7.068-.915.043-1.529.166-2.098.387-.507.196-.872.43-1.26.82a3.372 3.372 0 0 0-.822 1.26c-.221.572-.344 1.185-.386 2.098-.06 1.288-.067 1.738-.067 4.7 0 2.887.008 3.358.067 4.701.043.914.166 1.528.386 2.097.199.507.432.872.82 1.26.393.392.758.626 1.26.82.576.223 1.19.346 2.1.388 1.287.06 1.738.068 4.7.068 2.886 0 3.357-.008 4.7-.068.913-.043 1.527-.165 2.097-.386a3.41 3.41 0 0 0 1.26-.819c.393-.393.627-.758.821-1.26.222-.575.346-1.19.387-2.1.061-1.288.068-1.738.068-4.7 0-2.887-.008-3.358-.068-4.7-.043-.913-.165-1.53-.387-2.099a3.396 3.396 0 0 0-.82-1.26 3.364 3.364 0 0 0-1.26-.82c-.572-.223-1.185-.345-2.098-.387-1.288-.06-1.738-.068-4.7-.068Zm0-2.333c3.17 0 3.565.012 4.809.07 1.242.058 2.088.253 2.832.542.77.297 1.42.698 2.068 1.346a5.727 5.727 0 0 1 1.345 2.067c.288.743.484 1.59.543 2.833.054 1.243.07 1.639.07 4.809s-.012 3.565-.07 4.809c-.059 1.242-.255 2.088-.543 2.832a5.697 5.697 0 0 1-1.345 2.068 5.735 5.735 0 0 1-2.067 1.345c-.744.288-1.59.484-2.833.542-1.244.055-1.64.07-4.81.07-3.169 0-3.564-.011-4.808-.07-1.243-.058-2.088-.254-2.833-.542a5.705 5.705 0 0 1-2.067-1.345 5.72 5.72 0 0 1-1.345-2.068c-.29-.743-.484-1.59-.543-2.832-.055-1.244-.07-1.64-.07-4.81s.012-3.565.07-4.808c.059-1.244.253-2.089.543-2.833a5.693 5.693 0 0 1 1.345-2.067 5.713 5.713 0 0 1 2.067-1.346c.745-.289 1.59-.484 2.833-.542 1.244-.055 1.639-.07 4.809-.07Z"
      fill="#fff"
    ></path>
  </svg>
);

const TiktokIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 29 29"
  >
    <g clipPath="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.422 2.941c.37 3.229 2.148 5.154 5.238 5.358v3.632c-1.79.177-3.36-.417-5.184-1.536v6.791c0 8.628-9.279 11.324-13.009 5.14-2.397-3.98-.929-10.962 6.76-11.242v3.83a11.01 11.01 0 0 0-1.784.443c-1.71.587-2.68 1.686-2.41 3.625.518 3.713 7.238 4.812 6.679-2.444V2.948h3.71v-.007Z"
        fill="#fff"
      ></path>
    </g>
    <defs>
      <clipPath id="a">
        <path
          fill="#fff"
          transform="translate(4.41 2.942)"
          d="M0 0h19.25v22.75H0z"
        ></path>
      </clipPath>
    </defs>
  </svg>
);

const PinterestIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 29 29"
  >
    <path
      d="M15.632 2.76a11.67 11.67 0 0 0-6.263 22.255 9.05 9.05 0 0 1 .19-2.675c.216-.979 1.512-6.374 1.512-6.374a4.364 4.364 0 0 1-.378-1.84c0-1.732 1-3.025 2.244-3.025a1.557 1.557 0 0 1 1.565 1.76c0 1.05-.674 2.639-1.026 4.13a1.802 1.802 0 0 0 1.837 2.243c2.214 0 3.699-2.836 3.699-6.184 0-2.567-1.7-4.49-4.834-4.49a5.537 5.537 0 0 0-5.752 5.593 3.454 3.454 0 0 0 .756 2.299.56.56 0 0 1 .19.646c-.054.215-.19.727-.243.915a.413.413 0 0 1-.595.296c-1.615-.646-2.376-2.423-2.376-4.452 0-3.321 2.782-7.298 8.347-7.298 4.428 0 7.373 3.24 7.373 6.705 0 4.56-2.54 7.99-6.293 7.99a3.338 3.338 0 0 1-2.863-1.454s-.674 2.702-.807 3.213a9.363 9.363 0 0 1-1.19 2.486c1.078.327 2.197.49 3.321.486a11.653 11.653 0 0 0 11.662-11.67A11.669 11.669 0 0 0 15.634 2.76l-.002-.001Z"
      fill="#fff"
    ></path>
  </svg>
);

const ParallaxImage = ({ src, alt, href, icon, initialY }) => {
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newY = initialY - scrollY * 0.1;
      setTranslateY(newY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [initialY]);

  return (
    <div
      className="relative"
      style={{ transform: `translateY(${translateY}px)` }}
    >
      <div className="relative group">
        <img
          loading="lazy"
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
        <a
          href={href}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          {icon}
        </a>
      </div>
    </div>
  );
};

export default function Newsletter() {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Image Blocks */}
          <div className="md:col-span-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
            <ParallaxImage
              src="//engine.com.pk/cdn/shop/files/Stay_in_touch_-2_7a7bbbae-7c39-4549-90ad-947980961999.jpg?v=1751976662"
              alt="Facebook"
              href="https://www.facebook.com/EnginePakistan"
              icon={<FacebookIcon />}
              initialY={-5}
            />
            <ParallaxImage
              src="//engine.com.pk/cdn/shop/files/Stay_in_touch_-3_c88145d5-ce1d-4530-95b4-20e3eac2ecbc.jpg?v=1751976662"
              alt="Instagram"
              href="https://www.instagram.com/enginepakistan/"
              icon={<InstagramIcon />}
              initialY={-8}
            />
            <ParallaxImage
              src="//engine.com.pk/cdn/shop/files/Stay_in_touch_-_4_4a1af171-b28a-437e-91ef-0ed9bf68383b.jpg?v=1751976662"
              alt="TikTok"
              href="https://www.tiktok.com/@enginepakistan"
              icon={<TiktokIcon />}
              initialY={-4}
            />
            <ParallaxImage
              src="//engine.com.pk/cdn/shop/files/Stay_in_touch_-1_0982e208-7d51-4654-aef6-6809d642bcad.jpg?v=1751976662"
              alt="Pinterest"
              href="https://www.pinterest.com/engineclothingpk"
              icon={<PinterestIcon />}
              initialY={-9}
            />
          </div>

          {/* Content Block */}
          <div className="md:col-span-12 md:absolute md:inset-0 flex items-center justify-center text-center p-8">
            <div className="bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-lg shadow-xl max-w-lg">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                Stay In Touch
              </h2>
              <form
                action="/contact#email_signup_2"
                method="post"
                className="newsletter-form"
              >
                <input type="hidden" name="form_type" value="customer" />
                <input type="hidden" name="utf8" value="✓" />
                <input type="hidden" name="contact[tags]" value="newsletter" />

                <div className="relative flex items-center">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Enter email...
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    name="contact[email]"
                    className="w-full px-5 py-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter email..."
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-r-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    <span className="hidden sm:inline">Join Engine</span>
                    <span className="inline sm:hidden">Join</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
