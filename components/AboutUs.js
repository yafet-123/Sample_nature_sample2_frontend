import React from "react";

export function AboutUs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-20 md:px-20 bg-black">
      <div className="flex flex-col justify-between px-20 md:px-0">
        <h1 className="text-white text-2xl text-left font-bold uppercase mb-5 tracking-wide">
          About Us
        </h1>
        -
        <p className="text-white font-normal w-3/4 tracking-wide text-base mb-5">
          Go hiking in ethopia and discover why the local can't ge enough of
          nature. Our most scenric landscape are defineitly best enjoeyed on
          foot.
        </p>
        <button className="p-3 bg-yellow-500 capitalize text-lg w-1/4 text-white font-bold">
          Read more
        </button>
      </div>

      <div className="about-us-background-one w-full h-96"></div>
      <div className="about-us-background-two w-full h-96"></div>
    </div>
  );
}
