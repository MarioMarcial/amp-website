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

      <section className="max-w-screen-xl mx-auto section-spacing">
        <h3 className="text-center text-xl text-white font-bold mb-0">
          Ventajas
        </h3>
        <h2 className="text-center text-2xl text-primary font-extrabold md:text-3xl mb-8 md:mb-9">
          Lo Que Te Ofrecemos
        </h2>
        <AdvantagesGrid />
      </section>

      <section className="bg-dark-rich section-spacing">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2">
          <div className="self-center">
            <h2 className="text-2xl heading-amp mb-4">Nuestra Metodología</h2>
            <p className="text-gray-300 px-2 md:px-3">
              Nuestra metodología de enseñanza se basa en un enfoque integral
              que combina la técnica instrumental, la teoría musical y la
              expresión artística. Creemos que cada estudiante es único, por lo
              que personalizamos nuestro método según sus necesidades, objetivos
              y ritmo de aprendizaje.
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
          <div className="hidden md:block px-2 md:px-3">
            <img
              src={'/images/header.jpg'}
              className="rounded-xl overflow-hidden object-cover w-full"
              alt="metodologia imagen"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto section-spacing border-b-2 border-gray-dark/80">
        <h3 className="text-2xl heading-amp mb-6">Enfoque por Edades</h3>
        <div className="px-2 md:px-3 ">
          <TabAges />
        </div>
      </section>

      <section className="section-spacing bg-dark-rich border-b-2 border-gray-dark/80">
        <TestimonialsHeader />
        <TestimonialsGrid />
      </section>
    </>
  );
}
