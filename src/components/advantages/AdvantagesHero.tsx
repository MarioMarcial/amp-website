export const AdvantagesHero = () => {
  return (
    <section className="relative z-10 px-8 py-20 space-y-2 text-center bg-transparent mask-radial-to-center after:bg-[url('/images/advantages-hero.jpg')] after:bg-cover after:bg-center after:bg-no-repeat after:opacity-25 after:absolute after:w-full after:h-full after:top-0 after:bottom-0 after:left-0 after:right-0 after:content-[''] after:-z-10 after:blur-xs md:mask-top md:mask-b-from-60% md:mask-b-to-95% md:px-0 md:py-30">
      <h1 className="text-3xl lg:text-5xl font-extrabold text-white">
        ¿Por qué elegir nuestra Academia?
      </h1>
      <p className="text-md md:text-xl md:max-w-xl md:mx-auto text-gray-100 text-base/6 px-4">
        Descubre las ventajas que nos distinguen y hacen de tu experiencia
        musical algo único
      </p>
    </section>
  );
};
