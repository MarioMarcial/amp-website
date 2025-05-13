import { Hero } from '../components/hero/Hero';
import { InstrumentsGrid, InstrumentsHeader } from '../components/instruments';
import { PromoBanner } from '../components/banners/PromoBanner';

export default function Home() {
  return (
    <>
      <Hero />
      <InstrumentsHeader />
      <InstrumentsGrid />
      <PromoBanner />
    </>
  );
}
