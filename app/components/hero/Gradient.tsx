import React from "react";
import { useEffect } from "react";

function Gradient() {
  useEffect(() => {
    const interBubble = document.querySelector<HTMLDivElement>(".interactive")!;
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;
    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(() => {
        move();
      });
    }

    window.addEventListener("mousemove", (event) => {
      tgX = event.clientX - 300;
      tgY = event.clientY - 500;
    });

    move();
  }, []);
  return (
    <div>
      <div className="gradient-bg  w-full h-[55dvh]  blur-3xl overflow-hidden">
        <svg
          className="svg-goo absolute z-10 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradient-container overflow-hidden isolate relative w-full h-full">
          <div className="blur-3xl mix-blend-soft-light g1 w-96 h-96 rounded-full absolute opacity-60 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-300 via-red-500 to-red-600"></div>
          <div className="blur-3xl mix-blend-soft-light g8 w-[32rem] h-[32rem] rounded-full absolute opacity-60 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-300 via-emerald-500 to-emerald-600"></div>
          <div className="blur-3xl mix-blend-soft-light g2 w-52 h-52 rounded-full absolute opacity-60 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-300 via-green-500 to-green-600"></div>
          <div className="blur-3xl mix-blend-soft-light g3 w-64 h-64 rounded-full absolute opacity-60 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-300 via-blue-500 to-blue-600"></div>
          <div className="blur-3xl mix-blend-soft-light g4 w-80 h-80 rounded-full absolute opacity-60 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-300 via-purple-500 to-purple-600"></div>
          <div className="blur-3xl mix-blend-soft-light g5 w-[30rem] h-[30rem] rounded-full absolute opacity-60 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-300 via-sky-500 to-sky-600"></div>
          <div className="blur-3xl mix-blend-soft-light g6 w-[24rem] h-[24rem] rounded-full absolute opacity-60  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-300 via-sky-500 to-sky-600"></div>
          <div className="blur-3xl mix-blend-soft-light g7 w-52 h-52 rounded-full absolute opacity-60 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-300 via-rose-500 to-rose-600"></div>
          <div className="interactive blur-xl mix-blend-soft-light w-52 h-52 rounded-full absolute opacity-50 bg-purple-300"></div>
        </div>
      </div>
    </div>
  );
}

export default Gradient;
