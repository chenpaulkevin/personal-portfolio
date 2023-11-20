import { Container } from "postcss";
import React from "react";
import { useState, useEffect } from "react";

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = (e: { clientX: any; clientY: any }) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    parent.addEventListener("mousemove", updateMousePosition);
    return () => {
      parent.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
}
