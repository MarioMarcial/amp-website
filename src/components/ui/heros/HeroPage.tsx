import type { ReactNode } from 'react';

type HeroProps = {
  title: ReactNode;
  description: string;
  image: string;
};

export const HeroPage = ({ title, description, image }: HeroProps) => {
  const imageUrl = `${import.meta.env.BASE_URL}images/${image}`;

  return (
    <section
      className={`relative px-8 py-35 text-center z-10 bg-linear-to-t from-dark-rich-100 to-primary-600  md:py-40 lg:py-50`}
    >
      <div className="absolute -z-10 inset-0 mask-top mask-b-from-70% mask-b-to-100% md:mask-b-from-70% md:after:mask-b-to-100%">
        <img
          src={imageUrl}
          alt={`${image} imagen`}
          className="w-full h-full object-cover object-[50%_40%] opacity-6 pointer-events-none"
          loading="lazy"
        />
      </div>
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold text-white lg:text-4xl">
          {title}
        </h1>
        <p className="px-4 text-base/6 text-gray-100 md:text-lg md:max-w-lg md:mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
};
