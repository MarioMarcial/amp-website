import { Helmet } from '@dr.pogodin/react-helmet';
import { Container } from '../components/ui/containers/Container';
import { HeroPage } from '../components/ui/heros/HeroPage';
import { HeadingSection } from '../components/ui/headings/HeadingSection';
import { TabAgesGrid } from '../components/ui/tabs/TabAgesGrid';
import { AdvantagesGrid } from '../components/advantages/AdvantagesGrid';
import { TestimonialsLayout } from '../components/testimonials';
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
      <Helmet>
        <title>¿Por qué elegir AMP? | Academia AMP</title>
        <meta
          name="description"
          content="Conoce los beneficios únicos de aprender música en nuestra academia."
        />
      </Helmet>

      <HeroPage
        title={
          <>
            ¿Por qué deberías <span className="text-primary">unirte</span> a
            AMP?
          </>
        }
        description="Descubre las ventajas de estudiar con nosotros"
        image="hero-ventajas.jpg"
      />

      <Container as="section">
        <HeadingSection as="h2" title="Te Ofrecemos" textAlign="center" />
        <AdvantagesGrid />
      </Container>

      <Container as="section">
        <div className="grid md:grid-cols-2">
          <div className="self-center p-8 z-10 bg-gray-dark border border-gray-800 rounded-xl md:rounded-ss-xl md:rounded-es-xl md:rounded-se-none md:rounded-ee-none xl:px-15 xl:py-10 xl:rounded-xl">
            <HeadingSection
              as="h2"
              title="Nuestra Metodología"
              spacing="mb-3"
            />
            <p className="text-gray-300">
              Nuestra enseñanza combina técnica, teoría y expresión artística.
              Adaptamos el método a las necesidades y ritmo de cada estudiante.
            </p>
            <ul className="space-y-4 mt-4 px-2 md:px-3">
              {methodologyFeatures.map(({ feature }, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <span>
                    <FaRegCheckCircle className="w-5 h-5 text-secondary-100" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:block xl:-ms-10 z-0">
            <img
              src={`${import.meta.env.BASE_URL}images/metodologia.jpg`}
              className="overflow-hidden object-cover w-full md:rounded-se-xl md:rounded-ee-xl md:h-full xl:rounded-xl xl:h-130"
              alt="metodologia imagen"
              loading="lazy"
            />
          </div>
        </div>
      </Container>

      <Container as="section" hasBorderBottom={false}>
        <HeadingSection as="h2" title="Enfoque Por Edad" textAlign="center" />
        <TabAgesGrid />
      </Container>

      <TestimonialsLayout />
    </>
  );
}
