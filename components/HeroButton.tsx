"use client";

export default function HeroButton() {
  const handleClick = () => {
    const element = document.getElementById("sabores");
    if (!element) return;

    const extraOffset = 80; // ajuste fino aqui

    const top =
      element.getBoundingClientRect().top +
      window.scrollY +
      extraOffset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleClick}
      className="mt-12 px-10 py-3 border border-dourado text-dourado hover:bg-dourado hover:text-white transition duration-300"
    >
      Ver sabores
    </button>
  );
}