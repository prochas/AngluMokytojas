"use client";

import React, { useEffect, useState } from "react";

export default function ScrollShadowWrapper({ children, threshold = 10 }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return (
    <header
      className={`fixed lg:px-28 px-5 top-0 left-0 w-full z-50 bg-white p-5 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      {children}
    </header>
  );
}
