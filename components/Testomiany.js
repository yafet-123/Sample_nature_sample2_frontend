import React from "react";

export function Testomiany() {
  return (
    <div className="flex flex-col bg-black py-20  ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10 px-32">
        <div className="testomiany-background-one w-36 h-36 border rounded-full"></div>
        <div className="flex flex-col">
          <p className="text-white font-normal w-3/4 tracking-wide text-base mb-5">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h1 className="text-white text-2xl text-left font-bold uppercase mb-5 tracking-wide">
            yafet Addisu
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10 px-32 ">
        <div className="flex flex-col">
          <p className="text-white font-normal w-3/4 tracking-wide text-base mb-5">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h1 className="text-white text-2xl text-left font-bold uppercase mb-5 tracking-wide">
            biniyam tolosa
          </h1>
        </div>
        <div className="testomiany-background-two w-36 h-36 border rounded-full"></div>
      </div>

      <div className="testomiany-background-three w-full h-[30rem] mb-10"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10 px-32">
        <div className="flex flex-col justify-between px-20 md:px-0">
          <p className="text-white font-normal w-3/4 tracking-wide text-base mb-5">
            Denbel city mall
          </p>
          <p className="text-white font-normal w-3/4 tracking-wide text-base mb-5">
            Bole subciy Around Denbel
          </p>
          <p className="text-white font-normal w-3/4 tracking-wide text-base mb-5">
            +251934781038
          </p>

          <p className="text-white font-normal w-3/4 tracking-wide text-base mb-5">
            yafetaddisu123@gmail.com
          </p>
        </div>
        <div className="flex flex-col justify-between px-20 md:px-0">
          <h1 className="text-white text-4xl text-left font-bold uppercase mb-5 tracking-wide">
            take a hike
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
      </div>
    </div>
  );
}
