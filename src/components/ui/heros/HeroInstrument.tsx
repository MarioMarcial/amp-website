import type { ReactNode } from 'react';
import type { Instrument } from './../../../types';
import { Link } from 'react-router';

import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';

type HeroProps = {
  title: ReactNode;
  description: string;
  image: string;
  prevInstrument: Instrument | undefined;
  nextInstrument: Instrument | undefined;
};

export const HeroInstrument = ({
  title,
  description,
  image,
  prevInstrument,
  nextInstrument,
}: HeroProps) => {
  const imageUrl = `${import.meta.env.BASE_URL}images/${image}`;

  return (
    <section
      className={`px-8 py-35 z-10 text-center bg-linear-to-t from-dark-rich-100 to-primary-600 relative md:py-40 lg:py-50`}
    >
      <div className="absolute -z-10 inset-0 mask-top mask-b-from-70% mask-b-to-100% md:mask-b-from-70% md:after:mask-b-to-100%">
        <img
          src={imageUrl}
          alt={image}
          className="w-full h-full object-cover object-[50%_40%] opacity-30 pointer-events-none md:opacity-6"
          loading="lazy"
        />
      </div>
      <div
        className={`max-w-screen-lg flex justify-between items-center gap-3 mx-auto ${
          !prevInstrument
            ? 'flex-col'
            : !nextInstrument
            ? 'flex-col-reverse'
            : ''
        }`}
      >
        {prevInstrument && (
          <Link
            to={`/instrumentos/${prevInstrument.id}`}
            className="p-3 rounded-lg text-sm text-secondary font-bold border-2 border-secondary-400 focus:outline-none focus:ring-3 bg-gray-dark/40 transition-colors duration-200 hover:bg-secondary-300 focus:ring-secondary-500 hover:text-white"
          >
            <MdOutlineArrowBackIosNew />
          </Link>
        )}
        <div>
          <h1 className="flex flex-col justify-center font-extrabold text-3xl text-white lg:text-4xl">
            {title}
          </h1>
          <p className="mt-1 px-4 text-base/6 text-gray-100 md:text-lg md:max-w-lg md:mx-auto">
            {description}
          </p>
        </div>
        {nextInstrument && (
          <Link
            to={`/instrumentos/${nextInstrument.id}`}
            className="p-3 rounded-lg text-sm text-secondary font-bold border-2 border-secondary-400 focus:outline-none focus:ring-3 bg-gray-dark/40 transition-colors duration-200 hover:bg-secondary-300 focus:ring-secondary-500 hover:text-white"
          >
            <MdOutlineArrowForwardIos />
          </Link>
        )}
      </div>
    </section>
  );
};
