import React from "react";

const Banner = ({ src, alt }) => {
  return (
    <div className="mt-[-65px]">
      <img src={src} alt={alt} className="w-full object-cover" />
    </div>
  );
};

export default Banner;
