import type { ReactNode } from 'react';
import { Button } from '../buttons';
import { FaArrowRightLong } from 'react-icons/fa6';

type HeroHomeProps = {
  title: ReactNode;
  description: string;
  image: string;
};

export const HeroHome = ({ title, description, image }: HeroHomeProps) => {
  return (
    <section
      className={`relative z-10 bg-linear-to-t from-dark-rich-100 to-primary-600 after:content-['']
        after:absolute after:w-full after:h-full after:inset-0 after:bg-[url('/images/hero-inicio.jpg')] after:bg-cover after:bg-fixed after:bg-center after:bg-no-repeat after:opacity-5 after:mask-top after:mask-b-from-70% after:mask-b-to-100% after:-z-10 md:after:mask-b-from-70% md:after:mask-b-to-100%`}
    >
      <div className="max-w-screen-lg mx-auto px-4 py-12 md:grid md:grid-cols-2 md:gap-1 md:px-8 md:py-15 lg:grid-cols-5 lg:gap-5 lg:py-25 xl:px-0 animate-fade-in-up">
        <div className="self-center md:mx-0 lg:col-span-3">
          <h1 className="mb-2 flex flex-wrap justify-center text-4xl font-extrabold text-white md:justify-start md:mb-4 lg:text-5xl">
            {title}
          </h1>
          <p className="mb-4 text-center text-base/6 text-gray-100 md:mb-6 md:text-lg md:text-start lg:max-w-xl lg:text-xl/8 ">
            {description}
          </p>
          <div className="hidden md:inline-flex">
            <Button
              icon={FaArrowRightLong}
              label="Comenzar Viaje"
              url="/instrumentos"
              iconStart={false}
              fontBold={true}
            />
          </div>
        </div>
        <div className="justify-self-center mt-1 md:justify-self-end lg:col-span-2 lg:mt-0">
          <img
            src={`${import.meta.env.BASE_URL}images/${image}`}
            className="w-full max-w-85 mx-auto mask-radial-from-55% mask-radial-to-75% md:max-w-85 md:mask-radial-from-69% md:mask-radial-to-70% lg:max-w-120"
            alt="hero imagen"
            loading="lazy"
          />
          <div className="flex justify-center -mt-12 relative md:hidden">
            <Button
              icon={FaArrowRightLong}
              label="Comenzar Viaje"
              url="/instrumentos"
              iconStart={false}
              fontBold={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
