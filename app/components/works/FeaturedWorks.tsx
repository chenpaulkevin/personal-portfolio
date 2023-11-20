"use client";
import React from "react";
import Image from "next/image";
import FadeInWhenVisible from "../animations/fade";
import { motion } from "framer-motion";

function FeaturedWorks() {
  const header1 = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        delay: 0.05,
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      x: 0,
    },
  };

  return (
    <section className="my-10">
      <div className="w-full h-screen bg-primary flex justify-center items-center sticky top-0">
        <motion.div
          initial={"hidden"}
          whileInView={"visible"}
          variants={header1}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl px-6 md:px-8 lg:px-0 text-secondary text-center font-bold container mx-auto ">
            I like making websites.
          </h1>
        </motion.div>
      </div>
      <div className="w-full h-[100dvh] bg-slate-700 relative flex sticky top-0">
        <div className="z-10 container flex mx-auto px-6 md:px-8 lg:px-0">
          <div className="self-center w-full lg:w-4/12 text-center lg:text-start lg:self-end lg:ml-20 lg:mb-28 w-4/12">
            <h4 className="text-sm md:text-base lg:text-xl text-primary font-bold ml-1">
              E-Commerce Platform
            </h4>
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-primary font-black">
              Fangster
            </h1>
          </div>
          <div className="w-4/12 hidden lg:flex"></div>
          <div className="hidden lg:flex text-primary w-3/12 text-semibold mt-32 mr-20 leading-8">
            Fangster is an experienced manufacturer of motorcycle parts, as well
            as customized bikes. All products are designed in-house and
            manufactured rigorously in more than 15 steps.
          </div>
        </div>
        <div className="absolute inset-0">
          <Image
            className="z-0 brightness-[35%]"
            src="/fangster.webp"
            alt="fangster website background"
            fill
            priority
            style={{
              objectFit: "cover",
            }}
          ></Image>
        </div>
      </div>
      <div className="w-full h-[100dvh] bg-slate-700 relative flex sticky top-0">
        <div className="z-10 container flex mx-auto px-6 md:px-8 lg:px-0">
          <div className="self-center w-full lg:w-4/12 text-center lg:text-start lg:self-end lg:ml-20 lg:mb-28 w-4/12">
            <h4 className="text-sm md:text-base lg:text-xl text-primary font-bold ml-1">
              Content Management
            </h4>
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-primary font-black">
              Philbio
            </h1>
          </div>
          <div className="w-4/12 hidden lg:flex"></div>
          <div className="hidden lg:flex text-primary w-3/12 text-semibold mt-32 mr-20 leading-8">
            PhilBio was established for the specific purpose of furthering the
            biodiversity conservation activities of the &#39;Philippines
            Biodiversity Conservation Programme (PBCP)&#39; initiated in the
            1990&#39;s.
          </div>
        </div>
        <div className="absolute inset-0">
          <Image
            className="z-0 brightness-[35%]"
            src="/philbio.jpg"
            alt="Philbio website background"
            fill
            style={{
              objectFit: "cover",
            }}
          ></Image>
        </div>
      </div>
      <div className="w-full h-[100dvh] bg-slate-700 relative flex sticky top-0">
        <div className="z-10 container flex mx-auto px-6 md:px-8 lg:px-0">
          <div className="self-center w-full lg:w-4/12 text-center lg:text-start lg:self-end lg:ml-20 lg:mb-28 w-4/12">
            <h4 className="text-sm md:text-base lg:text-xl text-primary font-bold ml-1">
              Online Trading Journal
            </h4>
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-primary font-black">
              Pltrades
            </h1>
          </div>
          <div className="w-4/12 hidden lg:flex"></div>
          <div className="hidden lg:flex text-primary w-3/12 text-semibold mt-32 mr-20 leading-8">
            Pltrades provides graphs of a user&#39;s day to day trading activity
            from a given data and gives rooms for their notes, strategies and
            styles on how the user was able to achieve their results.
          </div>
        </div>
        <div className="absolute inset-0">
          <Image
            className="z-0 brightness-[35%]"
            src="/pltrades.jpg"
            alt="Pltrades website background"
            fill
            style={{
              objectFit: "cover",
            }}
          ></Image>
        </div>
      </div>
    </section>
  );
}

export default FeaturedWorks;
