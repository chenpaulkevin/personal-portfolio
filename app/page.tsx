"use client";
import { useEffect } from "react";
import Hero from "./components/hero/Hero";
import FeaturedWorks from "./components/works/FeaturedWorks";
import Brands from "./components/brand/Brands";

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <FeaturedWorks />
      <Brands></Brands>
    </main>
  );
}
