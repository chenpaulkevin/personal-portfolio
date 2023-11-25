"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

//Components:
import MenuButton from "./MenuButton";

function Navbar() {
  const navVar = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    hidden: {
      opacity: 0,
      y: -50,
    },
  };
  return (
    <>
      <nav className="flex px-6 md:px-8 h-16 lg:px-0 text-primary justify-between items-center mt-8 container mx-auto">
        <motion.div variants={navVar} initial="hidden" whileInView="visible">
          <Image
            src="/logo.svg"
            alt="logo"
            width={0}
            height={0}
            priority
            style={{ width: "92px", height: "auto" }}
          ></Image>
        </motion.div>
        <motion.div variants={navVar} initial="hidden" whileInView="visible">
          <MenuButton />
        </motion.div>
      </nav>
    </>
  );
}

export default Navbar;
