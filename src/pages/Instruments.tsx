import { InstrumentsGrid } from '../components/instruments/InstrumentsGrid';
import { InstrumentsHeader } from '../components/instruments/InstrumentsHeader';
export default function Instruments() {
  return (
    <>
      <div className="max-w-screen-lg mx-auto border-b-2 border-gray-dark/80 py-8">
        <InstrumentsHeader />
        <InstrumentsGrid />
      </div>
    </>
  );
}
