import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import AddToCartButton from "@/components/AddToCartButton";
import Image from "next/image";
import { sabores } from "@/data/sabores";

export default function SaboresPage() {
  return (
    <main className="bg-marmore text-neutral-800 min-h-screen">

      <Navbar />

      {/* HERO INTERNO */}
      <section className="py-24 border-b border-neutral-200 bg-white">
        <div className="max-w-5xl mx-auto px-8 md:px-16 text-center">

          <h1 className="text-4xl md:text-5xl font-light">
            Nossos Sabores
          </h1>

          <p className="mt-6 text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Produzidos artesanalmente todos os dias, com ingredientes selecionados
            e técnica italiana tradicional.
          </p>

        </div>
      </section>

      {/* LISTA DE SABORES */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-8 md:px-16 space-y-32">

          {sabores.map((sabor, index) => (
            <div
              key={sabor.id}
              className={`grid md:grid-cols-2 gap-16 items-center ${
                index % 2 !== 0 ? "md:grid-flow-dense" : ""
              }`}
            >
              {/* IMAGEM */}
              <div
                className={`relative aspect-square w-full ${
                  index % 2 !== 0 ? "md:col-start-2" : ""
                }`}
              >
                <Image
                  src={sabor.imagem}
                  alt={sabor.nome}
                  fill
                  className="object-cover"
                />
              </div>

              {/* TEXTO */}
              <div>
                <div className="w-16 h-0.5 bg-dourado mb-6" />

                <h2 className="text-3xl font-light">
                  {sabor.nome}
                </h2>

                <p className="mt-6 text-neutral-600 leading-relaxed">
                  {sabor.descricao}
                </p>

                <p className="mt-8 text-dourado text-xl font-semibold">
                  R$ {sabor.preco}
                </p>

                <div className="mt-8 max-w-xs">
                  <AddToCartButton
                    id={sabor.id}
                    nome={sabor.nome}
                    preco={sabor.preco}
                  />
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      <BackToTop />

    </main>
  );
}