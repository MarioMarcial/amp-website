import { HomeHero, HomeSiteSections } from '../components/home';
import { InstrumentsGrid, InstrumentsHeader } from '../components/instruments';
import {
  TestimonialsGrid,
  TestimonialsHeader,
} from '../components/testimonials';

export default function Home() {
  return (
    <>
      <HomeHero />

      {/* Instruments */}
      <section className="bg-dark-rich-100">
        <div className="max-w-screen-xl container-spacing border-b-2 border-gray-dark/80">
          <InstrumentsHeader />
          <InstrumentsGrid />
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-linear-to-br from-secondary-700 to-primary-500 relative z-10 after:bg-[url('/images/students.jpg')] after:bg-cover after:bg-fixed after:bg-center after:bg-no-repeat after:opacity-10 after:absolute after:w-full after:h-full after:top-0 after:bottom-0 after:left-0 after:right-0 after:content-[''] after:-z-10 after:md:opacity-5 after:blur-xs">
        <div className="max-w-screen-xl container-spacing border-b-2 border-gray-dark/80">
          <TestimonialsHeader />
          <TestimonialsGrid />
        </div>
      </section>

      <section className="bg-dark-rich-100">
        <div className="max-w-screen-xl container-spacing border-b-2 border-gray-dark/80">
          <HomeSiteSections />
        </div>
      </section>
    </>
  );
}
