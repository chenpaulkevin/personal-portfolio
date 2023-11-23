"use client";
import React from "react";
import { Icon } from "@iconify/react";

function MenuButton() {
  return (
    <div className="w-16 h-16 rounded-full bg-secondary/50 backdrop-blur cursor-pointer border-2 border-primary flex justify-center items-center">
      <Icon icon="ant-design:menu-outlined" className="text-primary text-2xl" />
    </div>
  );
}

export default MenuButton;
