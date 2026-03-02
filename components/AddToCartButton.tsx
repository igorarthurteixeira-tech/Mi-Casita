"use client";

import { useState } from "react";
import { useCart } from "@/components/context/CartContext";

export default function AddToCartButton({
  id,
  nome,
  preco,
}: {
  id: number;
  nome: string;
  preco: number;
}) {
  const { adicionarItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    adicionarItem({ id, nome, preco });
    setAdded(true);

    setTimeout(() => setAdded(false), 600);
  };

  return (
    <button
      onClick={handleClick}
      className={`mt-6 w-full border py-2 transition ${
        added
          ? "bg-dourado text-white scale-95"
          : "border-dourado text-dourado hover:bg-dourado hover:text-white"
      }`}
    >
      {added ? "Adicionado ✓" : "Adicionar à reserva"}
    </button>
  );
}