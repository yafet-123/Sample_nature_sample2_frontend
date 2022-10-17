import React from "react";

export function Testomiany() {
  return (
    <div className="flex flex-col bg-black py-20 px-32 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
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

      <div className="testomiany-background-three w-full h-96 -px-20 my-10"></div>
    </div>
  );
}
