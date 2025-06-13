import type { ReactNode } from 'react';
import type { Instrument } from './instrument.types';

export interface HeroProps {
  bgImage: string;
  children: ReactNode;
  type?: 'home' | 'instrument' | 'page';
}

export interface HeroContentProps {
  title: ReactNode;
  description: string;
}

export interface HeroContentInstrumentProps extends HeroContentProps {
  prevInstrument?: Instrument;
  nextInstrument?: Instrument;
}

export interface HeroContentHomeProps extends HeroContentProps {
  thumbnailImage: string;
}
