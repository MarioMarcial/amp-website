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
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 pb-12 md:pb-15 lg:pb-20 xl:px-0 border-b-2 border-gray-dark/80">
        {/* Navigation */}
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

        {/* Image & Description */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-4 mt-4 mb-14 md:mt-8 md:mb-18 border border-gray-800 bg-gray-dark rounded-b-xl md:rounded-xl overflow-hidden">
          <div className="relative rounded-t-xl overflow-hidden md:rounded-none">
            <img
              className="w-full md:h-110 xl:h-full object-cover md:rounded-xl pointer-events-none"
              src={`/images/${instrument.id}.jpg`}
              alt={`${instrument.name} imagen`}
              loading="lazy"
            />
          </div>
          <div className="space-y-6 pb-6 px-6 md:px-4 md:py-0 md:self-center">
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

        {/* Levels */}
        <div className="mb-14 md:mb-18">
          <h3 className="text-2xl heading-amp mb-8">Niveles</h3>
          <div className="grid lg:grid-cols-3 place-content-center gap-6">
            {instrument.levels.map((level) => (
              <div
                key={level.level}
                className="p-6 border border-gray-800 bg-gray-dark rounded-xl space-y-3"
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

        {/* Ages */}
        <div>
          <h3 className="text-2xl heading-amp mb-8">Edades</h3>
          <div className="">
            <TabAges />
          </div>
        </div>
      </div>
    </>
  );
}
