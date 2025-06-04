import { Container, HeadingSection } from '../ui';
import { TestimonialsGrid } from './TestimonialsGrid';

export const TestimonialsLayout = () => {
  return (
    <section className="relative z-10 bg-linear-to-tl from-secondary-700 to-primary-600 after:content-[''] after:absolute after:w-full after:h-full after:inset-0 after:bg-[url('/images/testimoniales-bg.jpg')] after:bg-cover after:bg-fixed after:bg-center after:bg-no-repeat after:opacity-6 after:-z-10">
      <Container hasBorderBottom={false}>
        <HeadingSection
          as="h2"
          title="Comentarios de Estudiantes"
          spacing="mb-6"
          responsiveClasses="md:text-center"
        />
        <TestimonialsGrid />
      </Container>
    </section>
  );
};
