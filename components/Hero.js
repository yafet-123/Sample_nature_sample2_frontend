import React from "react";

export function Hero() {
  return (
    <div className="w-full h-full">
      <div className="hero-background w-full h-[40rem] relative">
        <div className="bg-transparent w-full lg:w-[40rem] h-96 p-10 absolute top-0 right-0 bottom-0 left-0 my-auto flex flex-col justify-center">
          <h1 className="text-white text-6xl text-left font-bold uppercase mb-5 tracking-wide w-1/4">
            hiking in norway
          </h1>
          <button className="p-3 bg-yellow-500 capitalize text-lg w-1/4 text-white font-bold">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}
