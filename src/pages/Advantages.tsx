import { AdvantagesHero, AdvantagesGrid } from '../components/advantages';
import { TabAges } from '../components/ui/tabs/TabAgesGrid';
import {
  TestimonialsGrid,
  TestimonialsHeader,
} from '../components/testimonials';
import { FaRegCheckCircle } from 'react-icons/fa';

const methodologyFeatures: { feature: string }[] = [
  {
    feature: 'Evaluación inicial para determinar el nivel y objetivos',
  },
  {
    feature: 'Plan de estudio personalizado',
  },
  {
    feature: 'Combinación de teoría y práctica',
  },
  {
    feature: 'Seguimiento continuo del progreso',
  },
  {
    feature: 'Preparación para presentaciones y recitales',
  },
];

export default function Advantages() {
  return (
    <>
      <AdvantagesHero />

      <section className="max-w-screen-xl mx-auto px-4 md:px-8 py-12 md:py-15 lg:py-22 border-b-2 border-gray-dark">
        <h3 className="text-center text-xl text-white font-bold mb-0">
          Ventajas
        </h3>
        <h2 className="text-center text-2xl text-primary font-extrabold md:text-3xl mb-8 md:mb-9">
          Lo Que Te Ofrecemos
        </h2>
        <AdvantagesGrid />
      </section>

      <section className="bg-dark-rich-100">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 px-4 md:px-8 py-12 md:py-15 lg:py-22 border-b-2 border-gray-dark ">
          <div className="self-center p-8 z-10 bg-gray-dark border border-gray-800 rounded-xl md:rounded-ss-xl md:rounded-es-xl md:rounded-se-none md:rounded-ee-none xl:rounded-xl xl:px-15 xl:py-10">
            <h2 className="text-2xl font-bold text-white mb-4">
              Nuestra Metodología
            </h2>
            <p className="text-gray-300">
              Nuestra enseñanza combina técnica, teoría y expresión artística.
              Adaptamos el método a las necesidades y ritmo de cada estudiante.
            </p>
            <ul className="space-y-4 mt-4 px-2 md:px-3">
              {methodologyFeatures.map(({ feature }, index) => (
                <li
                  key={index}
                  className="text-gray-300 flex items-center gap-3"
                >
                  <span>
                    <FaRegCheckCircle className="text-secondary-100 w-5 h-5" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:block xl:-ms-10 z-0">
            <img
              src={'/images/header.jpg'}
              className="overflow-hidden object-cover md:rounded-se-xl md:rounded-ee-xl xl:rounded-xl w-full md:h-full"
              alt="metodologia imagen"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-4 md:px-8 py-12 md:py-15 lg:py-22 border-b-2 border-gray-dark">
        <h3 className="text-2xl heading-amp mb-6">Enfoque por Edades</h3>
        <TabAges />
      </section>

      <section className="bg-dark-rich-100">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-12 md:py-15 lg:py-22 border-b-2 border-gray-dark/80">
          <TestimonialsHeader />
          <TestimonialsGrid />
        </div>
      </section>
    </>
  );
}
