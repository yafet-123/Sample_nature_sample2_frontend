import React from "react";

export function RighThings() {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="RighThings-background-one w-full h-full md:h-[30rem] pt-10 bg-black px-20">
        <h1 className="text-white text-5xl text-left font-bold uppercase mb-5 tracking-wide">
          Hiking in Ethopia
        </h1>
        -
        <p className="text-white font-normal w-2/4 tracking-wide text-xl mb-5">
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
    </div>
  );
}
