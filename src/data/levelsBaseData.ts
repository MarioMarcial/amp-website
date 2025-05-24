import type { LevelBaseData, LevelBase } from '../types/instrument.types';

export const levelsBase: Record<LevelBase, LevelBaseData> = {
  Principiante: {
    level: 'Principiante',
    description:
      'Para estudiantes sin experiencia previa. Aprenderás los fundamentos de tu instrumento y comenzarás a tocar piezas simples.',
  },
  Intermedio: {
    level: 'Intermedio',
    description:
      'Para estudiantes con conocimientos básicos. Desarrollarás técnicas más avanzadas y ampliarás tu repertorio.',
  },
  Avanzado: {
    level: 'Avanzado',
    description:
      'Para estudiantes con experiencia sólida. Perfeccionarás tu técnica y desarrollarás tu propio estilo interpretativo.',
  },
};
