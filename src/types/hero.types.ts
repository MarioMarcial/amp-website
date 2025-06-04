import type { ReactNode } from 'react';
import type { Instrument } from './instrument.types';

export interface Hero {
  title: ReactNode;
  description: string;
  image: string;
}

export interface HeroInstrument extends Hero {
  prevInstrument: Instrument | undefined;
  nextInstrument: Instrument | undefined;
}
