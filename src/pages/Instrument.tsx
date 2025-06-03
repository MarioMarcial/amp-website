import { useMemo } from 'react';
import { Navigate, useParams } from 'react-router';
import { Helmet } from '@dr.pogodin/react-helmet';

import type { Instrument } from '../types';
import { instrumentsData } from '../data';
import { getAdjacentInstruments } from '../helpers/getAdjacentInstruments';

import { Container } from '../components/ui/containers/Container';
import { HeadingSection } from '../components/ui/headings/HeadingSection';
import { Button } from '../components/ui/buttons';
import { TabAgesGrid } from '../components/ui/tabs/TabAgesGrid';
import { HeroInstrument } from '../components/ui/heros';

// Icons
import { MdDateRange } from 'react-icons/md';

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

  const instrumentImage = `${import.meta.env.BASE_URL}images/${
    instrument.id
  }.jpg`;

  return (
    <>
      <Helmet>
        <title>Clases de {instrument.name} | Academia de Música AMP</title>
        <meta name="description" content={instrument.description} />
      </Helmet>

      <HeroInstrument
        title={
          <>
            Clases de <span className="text-primary">{instrument.name}</span>
          </>
        }
        description="¡Desarrolla tu talento!"
        image={`${instrument.id}.jpg`}
        prevInstrument={prevInstrument}
        nextInstrument={nextInstrument}
      />

      <Container as="section">
        {/* Image & Description */}
        <div className="grid gap-8 rounded-b-xl overflow-hidden md:grid-cols-2 md:gap-4 md:rounded-xl">
          <div className="hidden relative overflow-hidden md:rounded-none md:block md:order-1">
            <img
              className="w-full h-full object-cover pointer-events-none md:rounded-xl xl:h-full "
              src={instrumentImage}
              alt={`${instrument.name} imagen`}
              loading="lazy"
            />
          </div>
          <div className="space-y-6 md:px-4 md:py-0 md:self-center">
            <div>
              <HeadingSection
                as="h2"
                title="Descripción de la clase"
                spacing="mb-3"
              />
              <p className="text-gray-300 leading-relaxed">
                {instrument.description}
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                label="Agendar una Clase"
                url="/contacto"
                icon={MdDateRange}
              />
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <HeadingSection
          as="h2"
          title="Niveles"
          spacing="mb-6"
          responsiveClasses="md:text-center"
        />

        {/* Levels Grid */}
        <div className="grid place-content-center gap-6 lg:grid-cols-3">
          {instrument.levels.map((level) => (
            <div
              key={level.level}
              className="p-6 space-y-3 border rounded-xl border-gray-800 bg-gray-dark"
            >
              <h3 className="text-primary-100 font-semibold text-xl">
                {level.level}
              </h3>
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
      </Container>

      <Container hasBorderBottom={false}>
        <HeadingSection
          as="h2"
          title="Enfoque Por Edad"
          spacing="mb-6"
          responsiveClasses="md:text-center"
        />

        <TabAgesGrid />
      </Container>
    </>
  );
}
