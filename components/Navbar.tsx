"use client";

export default function Navbar() {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-y border-neutral-200">
      <div className="max-w-6xl mx-auto px-8 md:px-16 py-5 flex justify-between items-center">

        <span className="font-serif text-lg tracking-wide">
          Mi Casita
        </span>

        <div className="flex gap-10 text-sm uppercase tracking-widest text-neutral-600">
          <button onClick={() => scrollToSection("sabores")} className="hover:text-dourado transition">
            Sabores
          </button>

          <button onClick={() => scrollToSection("como-funciona")} className="hover:text-dourado transition">
            Como funciona
          </button>

          <button onClick={() => scrollToSection("reserva")} className="hover:text-dourado transition">
            Reserva
          </button>
        </div>

      </div>
    </nav>
  );
}