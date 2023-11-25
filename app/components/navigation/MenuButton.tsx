"use client";
import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

function MenuButton() {
  return (
    <div className="w-16 h-16 rounded-full bg-secondary/50 backdrop-blur cursor-pointer border-2 border-primary flex justify-center items-center">
      <Bars3Icon className="h-6 w-6 text-primary" />
    </div>
  );
}

export default MenuButton;
