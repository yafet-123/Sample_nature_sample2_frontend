import React from "react";

export function Gallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-5 py-20 md:px-20 bg-black">
      <div className="w-full h-full flex flex-col">
        <div className="gallery-background-one w-full h-full lg:mb-5 pt-64 pl-5">
          <h1 className="text-white text-2xl text-left font-bold uppercase mb-5 tracking-wide">
            find your path
          </h1>
          -
          <p className="text-white font-normal w-3/4 tracking-wide text-base mb-5">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="gallery-background-two w-full h-full"></div>
      </div>

      <div className="w-full h-full flex flex-col">
        <div className="gallery-background-seven w-full h-96 lg:mb-5"></div>
        <div className="gallery-background-four w-full h-96 lg:mb-5"></div>
        <div className="gallery-background-five w-full h-96"></div>
      </div>

      <div className="w-full h-full flex flex-col">
        <div className="gallery-background-six w-full h-full lg:mb-5"></div>
        <div className="gallery-background-three w-full h-full pt-64 pl-5">
          <h1 className="text-white text-2xl text-left font-bold uppercase mb-5 tracking-wide">
            Go hiking
          </h1>
          -
          <p className="text-white font-normal w-3/4 tracking-wide text-base mb-5">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}
