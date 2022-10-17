import React from "react";
import Image from "next/image";

export function Hiking() {
  return (
    <div className="bg-black w-full h-full px-0 md:px-20 pb-24">
      <div className="flex flex-col px-20 md:px-0">
        <h1 className="text-white text-5xl text-left font-bold uppercase mb-5 tracking-wide">
          Hiking in Ethopia
        </h1>
        -
        <p className="text-white font-normal w-full lg:w-1/2 tracking-wide text-base mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet risus
          nullam eget felis eget nunc lobortis Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col justify-between ">
          <Image src="/images/bgImage12.avif" width={250} height={250} />
          <p className="text-white font-normal w-full lg:w-3/4 tracking-wide text-base my-5 px-20 md:px-0">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <button className="p-3 bg-yellow-500 capitalize text-lg w-1/4 text-white font-bold mx-20 md:mx-0">
            Read more
          </button>
        </div>

        <div className="flex flex-col justify-between">
          <Image src="/images/bgImage13.avif" width={250} height={250} />
          <p className="text-white font-normal w-full lg:w-3/4 tracking-wide text-base my-5 px-20 md:px-0">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <button className="p-3 bg-yellow-500 capitalize text-lg w-1/4 text-white font-bold mx-20 md:mx-0">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}
