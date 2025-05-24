import { useMemo } from 'react';
import { Link, Navigate, useParams } from 'react-router';
import { TabAges } from '../components/ui/tabs/TabAgesGrid';
import { Button } from '../components/ui/buttons';
import { instrumentsData } from '../data';

import type { Instrument } from '../types';

// Functions
import { getAdjacentInstruments } from '../helpers/getAdjacentInstruments';

// Icons
import {
  MdDateRange,
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';

export default function Instrument() {
  const { id } = useParams();
  if (typeof id !== 'string') return <Navigate to="/instrumentos" />;

  const instrument = useMemo(
    () => instrumentsData.find((item) => id === item.id),
    [id]
  );

  if (!instrument) return <Navigate to="/instrumentos" />;

  const { prevInstrument, nextInstrument } = useMemo(
    () => getAdjacentInstruments(id),
    [id]
  );

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 2xl:px-0 pb-10 md:pb-15 border-b-2 border-gray-dark/80">
        <div className="flex justify-between items-center relative mt-6">
          {prevInstrument && (
            <Link
              to={`/instrumentos/${prevInstrument.id}`}
              className="rounded-lg text-sm text-secondary font-bold p-3 border-2 border-secondary-400 focus:outline-none focus:ring-3 bg-gray-dark hover:bg-secondary-300 focus:ring-secondary-500 hover:text-white transition-colors duration-200"
            >
              <MdOutlineArrowBackIosNew />
            </Link>
          )}

          <h1 className="text-2xl md:text-4xl font-bold md:font-extrabold text-center text-white md:mx-auto">
            {instrument.name}
          </h1>

          {nextInstrument && (
            <Link
              to={`/instrumentos/${nextInstrument.id}`}
              className="rounded-lg text-sm text-secondary font-bold p-3 border-2 border-secondary-400 focus:outline-none focus:ring-3 bg-gray-dark hover:bg-secondary-300 focus:ring-secondary-500 hover:text-white transition-colors duration-200"
            >
              <MdOutlineArrowForwardIos />
            </Link>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-4 mt-4 mb-12 md:mt-8 md:mb-15 bg-dark-rich md:bg-transparent rounded-b-xl md:rounded-xl overflow-hidden">
          <div className="relative rounded-t-xl overflow-hidden md:rounded-none">
            <img
              className="w-full md:h-80 xl:h-full object-cover md:rounded-xl pointer-events-none"
              src={`/images/${instrument.id}.jpg`}
              alt={`${instrument.name} imagen`}
              loading="lazy"
            />
          </div>
          <div className="space-y-6 pb-6 px-6 md:px-4 md:self-center">
            <div>
              <h2 className="mb-3 text-2xl text-gray-200 font-bold">
                Descripción de la clase
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {instrument.description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                label="Agendar una Clase"
                bgColor="primary"
                url="/contacto"
                icon={MdDateRange}
              />
            </div>
          </div>
        </div>

        <div className="mb-12 md:mb-15">
          <h3 className="text-2xl heading-amp mb-8">Niveles</h3>
          <div className="grid lg:grid-cols-3 place-content-center gap-6 px-2 md:px-3">
            {instrument.levels.map((level) => (
              <div
                key={level.level}
                className="p-6 outline-1 outline-primary-400 bg-dark-rich rounded-xl space-y-3"
              >
                <h4 className="text-primary-100 font-semibold text-xl">
                  {level.level}
                </h4>
                <p className="text-gray-300">{level.description}</p>

                <ul className="space-y-2">
                  {level.topics.map((topic, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                      <span className="text-gray-300">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl heading-amp mb-8">Edades</h3>
          <div className="px-2 md:px-3">
            <TabAges />
          </div>
        </div>
      </div>
    </>
  );
}
