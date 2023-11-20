"use client";
import React from "react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const marqueeVariants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 60,
        ease: "linear",
      },
    },
  },
};

function Marquee() {
  const firstText = useRef(null);
  const secondText = useRef(null);

  return (
    <div className="slide-container">
      <motion.div
        variants={marqueeVariants}
        animate="animate"
        className="slider"
      >
        <p
          ref={firstText}
          className="text-primary flex gap-4 items-center font-bold text-5xl md:text-6xl lg:text-7xl"
        >
          <span> </span>
          <span>Creative Developer</span>
          <span className="text-accent text-3xl md:text-4xl lg:text-5xl divider-spin">
            &#10059;
          </span>
          <span>Web Designer</span>
          <span className="text-accent text-3xl md:text-4xl lg:text-5xl divider-spin">
            &#10059;
          </span>
          <span>Hello World Specialist</span>
          <span className="text-accent text-3xl md:text-4xl lg:text-5xl divider-spin">
            &#10059;
          </span>
          <span>Motion Designer</span>
          <span className="text-accent text-3xl md:text-4xl lg:text-5xl divider-spin">
            &#10059;
          </span>
          <span>3D Artist</span>
          <span className="text-accent text-3xl md:text-4xl lg:text-5xl divider-spin">
            &#10059;
          </span>
          <span>Figma Wizard</span>
          <span className="text-accent text-3xl md:text-4xl lg:text-5xl divider-spin">
            &#10059;
          </span>
        </p>
        <p
          ref={secondText}
          className="text-primary gap-4 flex items-center font-bold text-5xl md:text-6xl lg:text-7xl"
        >
          <span> </span>
          <span>Creative Developer</span>
          <span className="text-accent text-3xl md:text-4xl lg:text-5xl divider-spin">
            &#10059;
          </span>
          <span>Web Designer</span>
          <span className="text-accent text-3xl md:text-4xl lg:text-5xl divider-spin">
            &#10059;
          </span>
          <span>Hello World Specialist</span>
          <span className="text-accent text-3xl md:text-4xl lg:text-5xl divider-spin">
            &#10059;
          </span>
          <span>Motion Designer</span>
          <span className="text-accent text-3xl md:text-4xl lg:text-5xl divider-spin">
            &#10059;
          </span>
          <span>3D Artist</span>
          <span className="text-accent text-3xl md:text-4xl lg:text-5xl divider-spin">
            &#10059;
          </span>
          <span>Figma Wizard</span>
          <span className="text-accent text-3xl md:text-4xl lg:text-5xl divider-spin">
            &#10059;
          </span>
        </p>
      </motion.div>
    </div>
  );
}

export default Marquee;
