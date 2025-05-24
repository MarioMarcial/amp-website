import { Hero } from '../components/ui/heros/Hero';
import { InstrumentsGrid, InstrumentsHeader } from '../components/instruments';
import {
  TestimonialsGrid,
  TestimonialsHeader,
} from '../components/testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <section className="bg-dark-rich py-8 md:py-12">
        <InstrumentsHeader />
        <div className="max-w-screen-lg mx-auto">
          <InstrumentsGrid />
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto section-spacing bg-dark-rich-100 border-b-2 border-gray-dark/80">
        <TestimonialsHeader />
        <TestimonialsGrid />
      </section>
    </>
  );
}
