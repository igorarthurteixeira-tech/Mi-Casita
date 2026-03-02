"use client";

import Link from "next/link";
import { useCart } from "@/components/context/CartContext";

export default function Navbar() {
  const { itens } = useCart();

  const quantidadeTotal = itens.reduce(
    (acc, item) => acc + item.quantidade,
    0
  );

  const total = itens.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-8 md:px-16 py-5 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="font-serif text-lg tracking-wide">
          Mi Casita
        </Link>

        {/* MENU */}
        <div className="flex items-center gap-10 text-sm uppercase tracking-widest text-neutral-600 mr-20">

          <Link href="/sabores" className="hover:text-dourado transition">
            Sabores
          </Link>

          <Link href="/reserva" className="hover:text-dourado transition">
            Reserva
          </Link>


        </div>
      </div>
    </nav>
  );
}