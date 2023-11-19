"use client";
import React from "react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

function Marquee() {
  const firstText = useRef(null);
  const secondText = useRef(null);

  useEffect(() => {
    let xPercent = 0;
    let direction = -1;
    const animation = () => {
      if (xPercent <= -100) {
        xPercent = 0;
      }
      if (xPercent > 0) {
        xPercent = -100;
      }
      gsap.set(firstText.current, { xPercent: xPercent });
      gsap.set(secondText.current, { xPercent: xPercent });
      xPercent += 0.02 * direction;
      requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  }, []);

  return (
    <div className="slide-container">
      <div className="slider">
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
      </div>
    </div>
  );
}

export default Marquee;
