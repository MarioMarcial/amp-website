import { Link } from 'react-router';
import type { HeroContentInstrumentProps } from '../../../../types/hero.types';
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';

export const HeroContentInstrument = ({
  prevInstrument,
  nextInstrument,
  title,
  description,
}: HeroContentInstrumentProps) => {
  return (
    <div
      className={`max-w-screen-lg flex justify-between items-center gap-3 mx-auto px-8 py-35 ${
        !prevInstrument ? 'flex-col' : !nextInstrument ? 'flex-col-reverse' : ''
      } md:py-40 lg:py-50 xl:px-0`}
    >
      {prevInstrument && (
        <Link
          to={`/instrumentos/${prevInstrument.id}`}
          title="Mostrar instrumento anterior"
          aria-label="Ir a instrumento anterior"
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
          title="Mostrar instrumento siguiente"
          aria-label="Ir a instrumento siguiente"
          className="p-3 rounded-lg text-sm text-secondary font-bold border-2 border-secondary-400 focus:outline-none focus:ring-3 bg-gray-dark/40 transition-colors duration-200 hover:bg-secondary-300 focus:ring-secondary-500 hover:text-white"
        >
          <MdOutlineArrowForwardIos />
        </Link>
      )}
    </div>
  );
};
