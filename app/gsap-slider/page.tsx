"use client";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function Page() {
  useEffect(() => {
    gsap.to(".text-header", {});
  }, []);

  return (
    <section>
      <div className="header-trigger w-full h-screen bg-primary flex sticky top-0 justify-center items-center">
        <h1 className="text-header text-5xl md:text-6xl lg:text-7xl px-6 md:px-8 lg:px-0 text-secondary text-center font-bold container mx-auto ">
          I like making websites.
        </h1>
      </div>
      <div className="end-trigger w-full h-screen bg-sky-400 sticky top-0 flex justify-center items-center">
        <h1 className="text-header text-5xl md:text-6xl lg:text-7xl px-6 md:px-8 lg:px-0 text-secondary text-center font-bold container mx-auto ">
          I like making websites.
        </h1>
      </div>
    </section>
  );
}

export default Page;
