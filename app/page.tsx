import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";

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

          <button className="mt-12 px-10 py-3 border border-dourado text-dourado hover:bg-dourado hover:text-white transition duration-300">
            Ver sabores
          </button>

        </div>
      </section>

      {/* NAVBAR (fica fixa ao atingir topo) */}
      <Navbar />

      {/* DIVISOR */}
      <div className="h-px bg-neutral-300" />

      {/* MANIFESTO */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-8 md:px-16 py-32 text-center">

          <h2 className="text-3xl md:text-4xl font-light">
            Uma pausa refinada no meio do dia.
          </h2>

          <p className="mt-10 text-neutral-600 leading-relaxed">
            Inspirados na tradição italiana, produzimos gelatos com técnica,
            precisão e respeito ao tempo. Cada reserva é feita online,
            garantindo frescor e exclusividade na retirada.
          </p>

        </div>
      </section>

      {/* SABORES */}
      <section id="sabores" className="bg-madeira py-32">
        <div className="max-w-6xl mx-auto px-8 md:px-16">

          <div className="w-20 h-0.5 bg-dourado mb-12" />

          <h2 className="text-4xl font-light mb-20 text-neutral-800">
            Sabores assinatura
          </h2>

          <div className="grid md:grid-cols-3 gap-16">

            <div className="border-b border-neutral-300 pb-8">
              <h3 className="text-xl font-medium">
                Pistache Siciliano
              </h3>
              <p className="mt-4 text-neutral-700">
                Intenso, cremoso e levemente tostado.
              </p>
              <p className="mt-6 text-dourado font-semibold">
                R$ 24
              </p>
            </div>

            <div className="border-b border-neutral-300 pb-8">
              <h3 className="text-xl font-medium">
                Baunilha de Madagascar
              </h3>
              <p className="mt-4 text-neutral-700">
                Clássico refinado com aroma natural.
              </p>
              <p className="mt-6 text-dourado font-semibold">
                R$ 22
              </p>
            </div>

            <div className="border-b border-neutral-300 pb-8">
              <h3 className="text-xl font-medium">
                Chocolate Belga 70%
              </h3>
              <p className="mt-4 text-neutral-700">
                Profundo, elegante e marcante.
              </p>
              <p className="mt-6 text-dourado font-semibold">
                R$ 26
              </p>
            </div>

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
              <span className="text-dourado font-semibold">02</span> Agende o horário de retirada
            </p>

            <p>
              <span className="text-dourado font-semibold">03</span> Retire na loja no horário escolhido
            </p>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section id="reserva" className="bg-white py-32 border-t border-neutral-300">
        <div className="text-center">

          <h2 className="text-3xl font-light">
            Reserve seu momento.
          </h2>

          <button className="mt-12 px-12 py-3 bg-dourado text-white hover:bg-oliva transition duration-300">
            Fazer reserva
          </button>

        </div>
      </section>
    <BackToTop />
    </main>
  );
}