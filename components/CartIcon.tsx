"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/context/CartContext";

export default function CartIcon() {
  const { itens } = useCart();
  const [integrated, setIntegrated] = useState(false);
  const [animate, setAnimate] = useState(false);

  const quantidadeTotal = itens.reduce(
    (acc, item) => acc + item.quantidade,
    0
  );

  const total = itens.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  // Detecta integração com navbar
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("nav");
      if (!navbar) return;
      const rect = navbar.getBoundingClientRect();
      setIntegrated(rect.top <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Anima quando quantidade muda
  useEffect(() => {
    if (quantidadeTotal === 0) return;

    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 250);

    return () => clearTimeout(timer);
  }, [quantidadeTotal]);

  return (
    <Link
      href="/reserva"
      className={`
        fixed top-3 right-6 z-50
        flex items-center gap-2
        px-4 py-2
        transition-all duration-300
        ${
          integrated
            ? "bg-transparent border border-transparent shadow-none"
            : "bg-white border border-neutral-200 shadow-md"
        }
      `}
    >
      <span className="text-dourado font-semibold">🛒</span>

      <span
        className={`
          text-sm transition-transform duration-200
          ${animate ? "scale-110" : "scale-100"}
        `}
      >
        {quantidadeTotal} • R$ {total}
      </span>
    </Link>
  );
}