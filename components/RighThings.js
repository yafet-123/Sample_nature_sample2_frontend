import React from "react";

export function RighThings() {
  return (
    <div className="flex flex-col h-full w-full bg-black ">
      <div className="RighThings-background-one w-full h-full md:h-[30rem] pt-10 px-20">
        <h1 className="text-white text-5xl text-left font-bold uppercase mb-5 tracking-wide">
          Hiking in Ethopia
        </h1>
        -
        <p className="text-white font-normal w-full lg:w-2/4 tracking-wide text-xl mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h1 className="text-white text-9xl font-bold uppercase text-center">
              37
            </h1>
            <p className="text-white font-normal tracking-wide text-xl mb-5 text-center">
              Lorem
            </p>
          </div>

          <div>
            <h1 className="text-white text-9xl font-bold uppercase text-center">
              65
            </h1>
            <p className="text-white font-normal tracking-wide text-xl mb-5 text-center">
              Lorem
            </p>
          </div>

          <div>
            <h1 className="text-white text-9xl font-bold uppercase text-center">
              24
            </h1>
            <p className="text-white font-normal tracking-wide text-xl mb-5 text-center">
              Lorem
            </p>
          </div>

          <div>
            <h1 className="text-white text-9xl font-bold uppercase text-center">
              85
            </h1>
            <p className="text-white font-normal tracking-wide text-xl mb-5 text-center">
              Lorem
            </p>
          </div>
        </div>
      </div>

      <div className="RighThings-background-two w-full h-full md:h-[30rem] p-20 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="flex flex-col ">
          <h1 className="text-black text-2xl text-left font-bold uppercase mb-5 tracking-wide">
            Hiking with Ehopian Hikking Associaion
          </h1>
          -
          <p className="text-black font-normal w-3/4 tracking-wide text-xl mb-5">
            Go hiking in ethopia and discover why the local can't ge enough of
            nature. Our most scenric landscape are defineitly best enjoeyed on
            foot.Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur.
          </p>
          <button className="p-3 bg-yellow-500 capitalize text-lg w-1/4 text-white font-bold">
            Read more
          </button>
        </div>

        <div className="flex flex-col ">
          <p className="text-black font-normal w-3/4 tracking-wide text-base mb-5">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        </div>
      </div>
    </div>
  );
}
