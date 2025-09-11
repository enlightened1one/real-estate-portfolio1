"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";

export function Hero() {
  return (
    <WavyBackground className="border-2 border-red-500  w-full h-full">
    <div className="pb-40 bg flex flex-col justify-center items-center w-full h-full">
      <p className={`text-xl text-nowrap md:text-4xl lg:text-7xl text-white font-bold font-[Geist Sans] geist-sans text-center`}>
        Welcome to Alpha Real Estate
      </p>
      <p className={`text-base md:text-lg mt-4 text-white font-normal inter-var text-center`}>
        Your trusted partner in finding your dream home.
      </p>      
    </div>

    </WavyBackground>
  );
}
