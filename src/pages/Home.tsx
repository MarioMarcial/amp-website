import { Helmet } from '@dr.pogodin/react-helmet';
import { HeroHome } from '../components/ui/heros';
import { Container } from '../components/ui/containers/Container';
import { HeadingSection } from '../components/ui/headings/HeadingSection';
import { InstrumentsGrid, InstrumentsHeader } from '../components/instruments';
import { TestimonialsLayout } from '../components/testimonials';
import { HomeExploreGrid } from '../components/home/HomeExploreGrid';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Inicio | Academia de Música AMP</title>
        <meta
          name="description"
          content="Clases de música para todas las edades y niveles en Arte Musical Puebla. ¡Descubre tu talento en AMP! "
        />
      </Helmet>

      <HeroHome
        title={
          <>
            Academia de&nbsp;
            <span className="bg-linear-to-r from-primary from-40% to-secondary bg-clip-text text-transparent">
              música&nbsp;
            </span>
            en Puebla
          </>
        }
        description="Da el primer paso. En Arte Musical Puebla te ofrecemos el ambiente perfecto para desarrollar tu talento al máximo."
        image="cantante.png"
      />

      {/* Instruments */}
      <Container as="section" hasBorderBottom={false} size="max-w-screen-md">
        <InstrumentsHeader />
        <InstrumentsGrid />
      </Container>

      {/* Testimonials */}
      <TestimonialsLayout />

      <Container as="section" hasBorderBottom={false}>
        <HeadingSection
          as="h2"
          title="Explora Nuestra Academia"
          spacing="mb-6"
          textAlign="center"
        />
        <HomeExploreGrid />
      </Container>
    </>
  );
}
