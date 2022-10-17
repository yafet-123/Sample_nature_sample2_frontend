import React from "react";

export function Hiking() {
  return (
    <div className="bg-black w-full h-full px-20">
      <div className="">
        <h1 className="text-white text-2xl text-left font-bold uppercase mb-5 tracking-wide">
          Hiking in Ethopia
        </h1>
        -
        <p className="text-white font-normal w-1/2 tracking-wide text-base mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet risus
          nullam eget felis eget nunc lobortis.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5"></div>
    </div>
  );
}
