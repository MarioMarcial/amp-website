export type LevelBase = 'Principiante' | 'Intermedio' | 'Avanzado';

export type LevelBaseData = {
  level: LevelBase;
  description: string;
};

export type Level = LevelBaseData & {
  topics: string[];
};

export type Instrument = {
  id: string;
  name: string;
  description: string;
  levels: Level[];
};
