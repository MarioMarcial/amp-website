import { instrumentsData } from '../data';
import type { Instrument } from './../types';

type InstrumentNav = {
  prevInstrument?: Instrument;
  nextInstrument?: Instrument;
};

export const getAdjacentInstruments = (id: Instrument['id']): InstrumentNav => {
  const index = instrumentsData.findIndex((instrument) => instrument.id === id);
  if (index < 0) return {};

  return {
    prevInstrument: index === 0 ? undefined : instrumentsData[index - 1],
    nextInstrument:
      index < instrumentsData.length ? instrumentsData[index + 1] : undefined,
  };
};
