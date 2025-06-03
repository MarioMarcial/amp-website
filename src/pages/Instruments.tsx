import { Helmet } from '@dr.pogodin/react-helmet';
import { Container } from '../components/ui/containers/Container';
import { InstrumentsGrid } from '../components/instruments/InstrumentsGrid';
import { InstrumentsHeader } from '../components/instruments/InstrumentsHeader';
import { HeroPage } from '../components/ui/heros/HeroPage';

export default function Instruments() {
  return (
    <>
      <Helmet>
        <title>Clases de Música | Academia de Música AMP</title>
        <meta
          name="description"
          content="Conoce nuestras opciones de clases y comienza a desarrollar tu potencial"
        />
      </Helmet>

      <HeroPage
        title={
          <>
            Encuentra tu <span className="text-primary">instrumento</span>
          </>
        }
        description="Elige un instrumento y comienza a desarrollar tu talento"
        image="hero-instrumentos.jpg"
      />

      <Container size="max-w-screen-md">
        <InstrumentsHeader />
        <InstrumentsGrid />
      </Container>
    </>
  );
}
