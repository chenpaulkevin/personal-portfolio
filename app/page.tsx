"use client";
import { useEffect } from "react";
import Hero from "./components/hero/Hero";
import FeaturedWorks from "./components/works/FeaturedWorks";
import Brands from "./components/brand/Brands";
import Camera from "./components/cctv/Camera";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <main>
      <Hero></Hero>
      <FeaturedWorks />
      <Brands></Brands>
      <Camera></Camera>
    </main>
  );
}
