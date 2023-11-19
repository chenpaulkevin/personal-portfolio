"use client";
import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

//Components:
import Marquee from "./Marquee";
import Gradient from "./Gradient";

function Hero() {
  return (
    <section className="my-14 md:my-16 lg:my-10 h-[90dvh] container mx-auto px-6 md:px-8 lg:px-0">
      <div className="hero-text mb-14">
        <h1 className="text-primary font-bold text-5xl md:text-6xl lg:text-7xl mb-9">
          Hi, I&#39;m Paul.
        </h1>
        <div className="flex justify-start gap-4 text-primary text-5xl md:text-6xl lg:text-7xl items-center">
          <h1 className="font-bold hidden lg:flex">Your Next</h1>
          <div className="overflow-hidden relative w-full lg:w-1/2 h-20 md:h-24 lg:h-28 py-3 rounded-full border-2 border-primary items-center flex justify-start">
            <Marquee></Marquee>
          </div>
        </div>
      </div>
      <div className="w-full h-[55dvh] lg:h-[50dvh] overflow-hidden rounded-2xl relative bg-violet-950 bg-opacity-0">
        <Gradient></Gradient>
        <div className="w-1/6 h-2/4 bg-secondary hidden lg:flex absolute bottom-0 left-0 rounded-tr-2xl">
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-40 text-primary h-40 rounded-full relative cta-spin flex justify-center items-center">
              <Image
                src="/learn-more.svg"
                alt="Scroll to Learn More"
                fill={true}
              ></Image>
            </div>
            <div className="absolute">
              <Icon icon="bi:arrow-down" className="text-primary text-4xl" />
            </div>
          </div>
          <div className="h-8 w-8 bg-transparent clips absolute rounded-full  -top-8"></div>
          <div className="h-8 w-8 bg-transparent clips absolute rounded-full  bottom-0 -right-8"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
