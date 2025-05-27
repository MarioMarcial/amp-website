import { InstrumentsGrid } from '../components/instruments/InstrumentsGrid';
import { InstrumentsHeader } from '../components/instruments/InstrumentsHeader';
export default function Instruments() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 py-6 md:px-8 md:pb-15 border-b-2 border-gray-dark/80">
        <InstrumentsHeader />
        <InstrumentsGrid />
      </div>
    </>
  );
}
