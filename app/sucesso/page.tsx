"use client";

import { useState } from "react";
import { useCart } from "@/components/context/CartContext";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function ReservaPage() {
  const { itens, removerItem, limparCarrinho } = useCart();
  const router = useRouter();

  const [horario, setHorario] = useState("");

  const total = itens.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  const confirmarReserva = () => {
    if (!horario || itens.length === 0) return;

    limparCarrinho();
    router.push("/sucesso");
  };

  return (
    <main className="min-h-screen bg-marmore text-neutral-800">
      <Navbar />

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-8 md:px-16">

          <h1 className="text-4xl font-light mb-16">
            Sua Reserva
          </h1>

          {itens.length === 0 ? (
            <p className="text-neutral-600">
              Seu carrinho está vazio.
            </p>
          ) : (
            <>
              {/* ITENS */}
              <div className="space-y-8">
                {itens.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center border-b border-neutral-200 pb-6"
                  >
                    <div>
                      <h2 className="text-lg font-medium">
                        {item.nome}
                      </h2>
                      <p className="text-sm text-neutral-500">
                        Quantidade: {item.quantidade}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-dourado font-semibold">
                        R$ {item.preco * item.quantidade}
                      </p>

                      <button
                        onClick={() => removerItem(item.id)}
                        className="text-sm text-neutral-500 hover:text-red-500 mt-2"
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* TOTAL */}
              <div className="mt-12 flex justify-between items-center border-t border-neutral-200 pt-6">
                <span className="text-xl font-light">
                  Total
                </span>
                <span className="text-xl text-dourado font-semibold">
                  R$ {total}
                </span>
              </div>

              {/* HORÁRIO */}
              <div className="mt-16">
                <label className="block text-sm uppercase tracking-widest text-neutral-600 mb-4">
                  Escolha o horário de retirada
                </label>

                <select
                  value={horario}
                  onChange={(e) => setHorario(e.target.value)}
                  className="w-full border border-neutral-300 px-4 py-3 bg-white"
                >
                  <option value="">Selecione um horário</option>
                  <option>14:00</option>
                  <option>14:30</option>
                  <option>15:00</option>
                  <option>15:30</option>
                  <option>16:00</option>
                </select>
              </div>

              {/* BOTÃO */}
              <button
                onClick={confirmarReserva}
                disabled={!horario}
                className={`
                  mt-12 px-10 py-3
                  ${
                    horario
                      ? "bg-dourado text-white hover:bg-oliva"
                      : "bg-neutral-300 text-neutral-500 cursor-not-allowed"
                  }
                  transition
                `}
              >
                Confirmar Reserva
              </button>
            </>
          )}
        </div>
      </section>
    </main>
  );
}