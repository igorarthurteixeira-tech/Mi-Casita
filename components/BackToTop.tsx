"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 flex items-center justify-center 
      border border-dourado text-dourado bg-white/90 backdrop-blur-md
      transition-all duration-300 hover:bg-dourado hover:text-white
      ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      ↑
    </button>
  );
}