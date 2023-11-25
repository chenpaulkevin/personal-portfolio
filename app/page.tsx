"use client";
import Hero from "./components/hero/Hero";
import FeaturedWorks from "./components/works/FeaturedWorks";
import Brands from "./components/brand/Brands";
import Camera from "./components/cctv/Camera";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function Home() {
  return (
    <ReactLenis root>
      <Hero></Hero>
      <FeaturedWorks />
      <Brands></Brands>
      <Camera></Camera>
    </ReactLenis>
  );
}
