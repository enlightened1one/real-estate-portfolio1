"use client";
// import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import "./Hero.scss"
import localFont from "next/font/local";
// import "../../../node_modules/geist/dist/fonts/geist-sans/Geist-Variable.woff2";

// Define font at the module scope
const geistSans = localFont({
  src: "../../../node_modules/geist/dist/fonts/geist-sans/Geist-Variable.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
  preload: true,
});

export function Hero() {
  return (
    // dark:bg-[#171717]
    <main className="hero-1 flex flex-row justify-stretch items-stretch w-full h-screen p-0  bg-[#0a0a0a] px-4" >
    <div className="flex flex-row w-full h-full justify-between items-stretch">
      <div className="flex flex-col justify-end items-start h-full w-full min-h-[100%] py-5">
          <p className={`text-xl wrap-normal text-left md:text-4xl lg:text-7xl text-white font-bold ${geistSans.className}`}>
        T.C.S Properties
      </p>
      <p className={`text-base md:text-lg  text-left mt-4 text-white font-normal ${geistSans.className}`}>
        Your trusted partner in finding your dream home.
      </p> 
      </div>
      <div className="border-2 w-full h-full flex-col justify-center items-center">

      </div>
    </div>
     
    </main>

 
  );
}
