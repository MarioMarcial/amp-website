export interface Instrument {
  id: string;
  name: string;
  description: string;
  levels: Level[];
}

export interface Level extends LevelBaseData {
  topics: string[];
}

export interface LevelBaseData {
  level: LevelBase;
  description: string;
}

export type LevelBase = 'Principiante' | 'Intermedio' | 'Avanzado';
