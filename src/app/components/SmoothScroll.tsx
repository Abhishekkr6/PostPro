"use client";

import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: "vertical", 
      smooth: true,
      smoothTouch: false, 
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      // Uncomment करें यदि lenis.destroy() उपलब्ध है
      // lenis.destroy();
    };
  }, []);

  return null;
}
