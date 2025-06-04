import { Helmet } from '@dr.pogodin/react-helmet';
import { contactMethodsData, socialMediaData } from '../data';
import { HeroPage, Container, HeadingSection } from '../components/ui';
import {
  ContactFAQGrid,
  ContactLeafletMap,
  ContactMethodsGrid,
  ContactSocialsGrid,
  ContactHowToArriveCard,
  ContactWhatsAppCard,
} from '../components/contact';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contacto | Academia de Música AMP</title>
        <meta
          name="description"
          content="Ponte en contacto con nosotros para resolver tus dudas o para agendar tu clase muestra sin costo."
        />
      </Helmet>

      <HeroPage
        title={
          <>
            ¡Obtén tu <span className="text-primary">clase</span> muestra sin
            costo!
          </>
        }
        description="Pregunta por la promoción del mes y agenda tu clase muestra sin costo."
        image="hero-contacto.jpg"
      />

      <Container as="section">
        <div className="grid space-y-10 md:grid-cols-2 md:gap-x-10">
          {/* 1st Column */}
          <div>
            <HeadingSection as="h2" title="Medios de Contacto" />
            <ContactWhatsAppCard />
            <ContactMethodsGrid contactMethods={contactMethodsData} />
            <hr className="my-8 border-2 text-gray-900/60" />

            <div>
              <h3 className="heading-amp mb-4 text-white">
                Síguenos en Redes Sociales
              </h3>
              <ContactSocialsGrid socialsData={socialMediaData} />
            </div>
          </div>

          {/* 2nd Column */}
          <div>
            <HeadingSection as="h2" title="Nuestra Ubicación" />
            <ContactLeafletMap />
            <ContactHowToArriveCard />
          </div>
        </div>
      </Container>

      {/* FAQS */}
      <Container as="section" hasBorderBottom={false}>
        <HeadingSection
          as="h2"
          title="Preguntas Frecuentes"
          responsiveClasses="md:text-center"
        />
        <ContactFAQGrid />
      </Container>
    </>
  );
}
