import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import HeroButton from "@/components/HeroButton";
import AddToCartButton from "@/components/AddToCartButton";
import Image from "next/image";
import Link from "next/link";
import { sabores } from "@/data/sabores";

export default function Home() {
  return (
    <main className="bg-marmore text-neutral-800">

      {/* HERO */}
      <section className="bg-marmore">
        <div className="max-w-6xl mx-auto px-8 md:px-16 pt-32 pb-40">

          <div className="w-20 h-0.5 bg-dourado mb-10" />

          <h1 className="text-5xl md:text-7xl leading-tight font-light max-w-3xl">
            A arte do gelato,
            <br />
            reinterpretada com elegância.
          </h1>

          <p className="mt-8 text-lg text-neutral-600 max-w-xl leading-relaxed">
            Produção artesanal diária, ingredientes selecionados
            e retirada exclusiva na loja.
          </p>

          <HeroButton />

        </div>
      </section>

      {/* NAVBAR */}
      <Navbar />

      {/* SABORES DESTAQUE */}
      <section id="sabores" className="bg-madeira py-32">
        <div className="max-w-6xl mx-auto px-8 md:px-16">

          <div className="w-20 h-0.5 bg-dourado mb-12" />

          <h2 className="text-4xl font-light mb-20 text-neutral-800">
            Sabores em destaque
          </h2>

          <div className="grid md:grid-cols-3 gap-16">

            {sabores.slice(0, 3).map((sabor) => (
              <div
                key={sabor.id}
                className="group bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-4/5 w-full">
                  <Image
                    src={sabor.imagem}
                    alt={sabor.nome}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-medium">
                    {sabor.nome}
                  </h3>

                  <p className="mt-4 text-neutral-600">
                    {sabor.descricao}
                  </p>

                  <p className="mt-6 text-dourado font-semibold">
                    R$ {sabor.preco}
                  </p>

                  <AddToCartButton
                    id={sabor.id}
                    nome={sabor.nome}
                    preco={sabor.preco}
                  />
                </div>

              </div>
            ))}

          </div>

          {/* BOTÃO VER TODOS */}
          <div className="text-center mt-20">
            <Link
              href="/sabores"
              className="inline-block border border-dourado text-dourado px-10 py-3 hover:bg-dourado hover:text-white transition"
            >
              Ver todos os sabores
            </Link>
          </div>

        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="bg-neutral-900 text-white py-32">
        <div className="max-w-4xl mx-auto px-8 md:px-16 text-center">

          <h2 className="text-3xl font-light">
            Como funciona
          </h2>

          <div className="mt-16 space-y-10">

            <p>
              <span className="text-dourado font-semibold">01</span> Escolha seus sabores
            </p>

            <p>
              <span className="text-dourado font-semibold">02</span> Defina a quantidade desejada
            </p>

            <p>
              <span className="text-dourado font-semibold">03</span> Finalize sua reserva online
            </p>

            <p>
              <span className="text-dourado font-semibold">04</span> Retire na loja no horário escolhido
            </p>

          </div>

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-white py-32 border-t border-neutral-300">
        <div className="text-center">

          <h2 className="text-3xl font-light">
            Reserve seu momento.
          </h2>

          <Link
            href="/reserva"
            className="mt-12 inline-block px-12 py-3 bg-dourado text-white hover:bg-oliva transition duration-300"
          >
            Finalizar reserva
          </Link>

        </div>
      </section>

      <BackToTop />

    </main>
  );
}