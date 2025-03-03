"use client";

import React from "react";
import Link from "next/link";
import Button from "./ui/Button";

export default function HeroSection() {
  return (
    <section className="relative z-10 mt-12 mx-auto max-w-6xl flex flex-col items-center justify-center gap-6 min-h-screen bg-transparent text-center px-4 py-16"> 
      <h1 className="text-3xl sm:text-5xl text-white md:text-6xl font-outfit font-semibold leading-tight"> 
        <span className="relative inline-block bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent rainbow-animation">
          API Testing
        </span>{" "}
        Made{" "}
        <span className="relative inline-block bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent rainbow-animation">
          Effortless
        </span>{" "}
        – The Ultimate{" "}
        <span className="relative inline-block bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent rainbow-animation">
          Developer’s
        </span>{" "}
        Tool
      </h1>
      <p className="mt-4 text-white/60 text-lg sm:text-xl md:text-2xl max-w-xl leading-relaxed"> 
      Unlock superior performance and ease-of-use, transforming your API challenges into smooth, efficient processes.
      </p>
      <Link
        href="/signup"
        className="font-outfit"
      >
        <Button />
      </Link>
    </section>
  );
}