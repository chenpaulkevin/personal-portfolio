"use client";
import React from "react";
import Image from "next/image";
import { ArrowLongDownIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import FadeInWhenVisible from "../animations/fade";

//Components:
import Marquee from "./Marquee";
import Gradient from "./Gradient";

function Hero() {
  const header1 = {
    visible: {
      opacity: 1,
      y: [100, 0, 0],
      x: ["-50%", "-50%", "0%"],
      transition: {
        delay: 0.1,
        duration: 1,
        ease: "easeInOut",
      },
    },
    hidden: {
      opacity: 0,
      y: -50,
      x: "-10%",
    },
  };
  const header2 = {
    visible: {
      opacity: 1,
      y: [80, 0, 0],
      x: ["45%", "45%", "0%"],
      transition: {
        delay: 0.1,
        duration: 1,
        ease: "easeInOut",
      },
    },
    hidden: {
      opacity: 0,
      y: -50,
      x: "50%",
    },
  };
  const header3 = {
    visible: {
      opacity: 1,
      y: [-50, 0, 0],
      x: ["20%", "20%", "0%"],
      transition: {
        delay: 0.1,
        duration: 1,
        ease: "easeInOut",
      },
    },
    hidden: {
      opacity: 0,
      y: -50,
      x: "20%",
    },
  };
  return (
    <section className="my-14 md:my-16 lg:my-10 h-[90dvh] overflow-hidden container mx-auto px-6 md:px-8 lg:px-0">
      <div className="hero-text mb-14">
        <motion.div
          variants={header3}
          initial="hidden"
          viewport={{ once: true }}
          whileInView="visible"
          className="mb-9 mt-9 lg:mt-0 "
        >
          <h1 className="text-primary text-center lg:text-start leading-[0px] m-0 font-bold text-5xl md:text-6xl lg:text-7xl ">
            Hi, I&#39;m Paul.
          </h1>
        </motion.div>
        <div className="flex justify-start lg:gap-4 text-primary text-5xl md:text-6xl lg:text-7xl items-center">
          <motion.div
            variants={header1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h1 className="font-bold hidden lg:flex">Your Next</h1>
          </motion.div>
          <motion.div
            variants={header2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="overflow-hidden relative w-full lg:w-1/2 h-20 md:h-24 lg:h-28 py-3 rounded-full border-2 border-primary items-center flex justify-start"
          >
            <Marquee></Marquee>
          </motion.div>
        </div>
      </div>
      <FadeInWhenVisible>
        <div className="w-full h-[55dvh] lg:h-[50dvh] custom-height overflow-hidden rounded-2xl relative bg-violet-950 bg-opacity-40">
          <Gradient></Gradient>
          <div className="w-1/6 h-2/4 bg-secondary hidden lg:flex absolute bottom-0 left-0 rounded-tr-2xl">
            <div className="w-full h-full flex justify-center items-center">
              <div className="w-40 text-primary h-40 rounded-full relative cta-spin flex justify-center items-center">
                <Image
                  src="/learn-more.svg"
                  alt="Scroll to Learn More"
                  width={0}
                  height={0}
                  priority
                  style={{ width: "150px", height: "auto" }}
                ></Image>
              </div>
              <div className="absolute">
                <ArrowLongDownIcon className="h-10 w-10 text-primary" />
              </div>
            </div>
            <div className="h-8 w-8 bg-transparent clips absolute rounded-full  -top-8"></div>
            <div className="h-8 w-8 bg-transparent clips absolute rounded-full  bottom-0 -right-8"></div>
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}

export default Hero;
