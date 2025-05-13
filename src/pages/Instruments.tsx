import { InstrumentsGrid } from '../components/instruments/InstrumentsGrid';
import { PromoBanner } from '../components/banners/PromoBanner';
import { InstrumentsHeader } from '../components/instruments/InstrumentsHeader';
export default function Instruments() {
  return (
    <>
      <InstrumentsHeader />
      <InstrumentsGrid />
      <PromoBanner />
    </>
  );
}
