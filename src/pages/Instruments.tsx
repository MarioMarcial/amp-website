import { Helmet } from '@dr.pogodin/react-helmet';
import { Container, HeroPage } from '../components/ui';
import { InstrumentsGrid, InstrumentsHeader } from '../components/instruments';

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
