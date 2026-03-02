"use client";

import { createContext, useContext, useState } from "react";

type Item = {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
};

type CartContextType = {
  itens: Item[];
  adicionarItem: (item: Omit<Item, "quantidade">) => void;
  removerItem: (id: number) => void;
  limparCarrinho: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [itens, setItens] = useState<Item[]>([]);

  const adicionarItem = (item: Omit<Item, "quantidade">) => {
    setItens((prev) => {
      const existente = prev.find((i) => i.id === item.id);

      if (existente) {
        return prev.map((i) =>
          i.id === item.id
            ? { ...i, quantidade: i.quantidade + 1 }
            : i
        );
      }

      return [...prev, { ...item, quantidade: 1 }];
    });
  };

  const removerItem = (id: number) => {
    setItens((prev) => prev.filter((i) => i.id !== id));
  };

  const limparCarrinho = () => setItens([]);

  return (
    <CartContext.Provider
      value={{ itens, adicionarItem, removerItem, limparCarrinho }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart deve estar dentro do CartProvider");
  return context;
}