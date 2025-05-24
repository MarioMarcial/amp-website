import type { Instrument } from '../types/instrument.types';
import { levelsBase } from './levelsBaseData';

export const instrumentsData: Instrument[] = [
  {
    id: 'guitarra-acustica',
    name: 'Guitarra Acústica',
    description:
      'Nuestro curso de Guitarra Acústica está diseñado para desarrollar habilidades técnicas y musicales en este hermoso instrumento. Aprenderás desde la postura correcta y técnicas básicas hasta interpretaciones avanzadas de piezas populares. Nuestros profesores experimentados te guiarán en un viaje musical personalizado según tu nivel y objetivos.',
    levels: [
      {
        ...levelsBase['Principiante'],
        topics: [
          'Postura correcta',
          'Acordes básicos',
          'Melodías sencillas',
          'Ritmos fundamentales',
        ],
      },
      {
        ...levelsBase['Intermedio'],
        topics: [
          'Arpegios y escalas',
          'Lectura de partituras',
          'Técnicas de púa y dedos',
          'Repertorio variado',
        ],
      },
      {
        ...levelsBase['Avanzado'],
        topics: [
          'Técnicas complejas',
          'Armonía avanzada',
          'Improvisación',
          'Preparación para conciertos',
        ],
      },
    ],
  },
  {
    id: 'guitarra-electrica',
    name: 'Guitarra Eléctrica',
    description:
      'Nuestro curso de Guitarra Eléctrica se enfoca en desarrollar tu técnica, creatividad e interpretación dentro de diversos géneros musicales. Desde riffs básicos hasta solos complejos, nuestros profesores te acompañarán para que explotes el potencial expresivo de este instrumento versátil.',
    levels: [
      {
        ...levelsBase['Principiante'],
        topics: [
          'Postura con correa y técnica básica',
          'Acordes abiertos y power chords',
          'Riffs sencillos',
          'Manejo de amplificador y efectos básicos',
        ],
      },
      {
        ...levelsBase['Intermedio'],
        topics: [
          'Escalas pentatónicas y mayores',
          'Palm mute y slides',
          'Improvisación básica',
          'Estilos: rock, blues, funk',
        ],
      },
      {
        ...levelsBase['Avanzado'],
        topics: [
          'Tapping, bending y sweep picking',
          'Teoría musical aplicada',
          'Construcción de solos',
          'Grabación y presentación en vivo',
        ],
      },
    ],
  },
  {
    id: 'bateria',
    name: 'Batería',
    description:
      'Nuestro curso de batería está diseñado para que aprendas a dominar este instrumento de manera progresiva. Explorarás desde los rudimentos básicos hasta la interpretación de diversos géneros musicales. Conecta tu ritmo con cada golpe.',
    levels: [
      {
        ...levelsBase['Principiante'],
        topics: [
          'Postura y técnica de baquetas',
          'Rudimentos básicos',
          'Coordinación entre extremidades',
          'Ritmos básicos (rock/pop)',
        ],
      },
      {
        ...levelsBase['Intermedio'],
        topics: [
          'Rudimentos intermedios',
          'Lectura rítmica',
          'Fills y variaciones',
          'Estilos: funk, jazz, reggae',
        ],
      },
      {
        ...levelsBase['Avanzado'],
        topics: [
          'Polirritmia y compases irregulares',
          'Técnica de doble pedal',
          'Improvisación en solos',
          'Preparación para conciertos',
        ],
      },
    ],
  },
  {
    id: 'bajo',
    name: 'Bajo',
    description:
      'El curso de Bajo está pensado para desarrollar tu habilidad como base rítmica y armónica en cualquier ensamble musical. Dominarás técnica, groove y teoría aplicable a todos los géneros.',
    levels: [
      {
        ...levelsBase['Principiante'],
        topics: [
          'Postura y digitación',
          'Ejercicios de ritmo',
          'Notas al aire y cuerdas',
          'Grooves sencillos',
        ],
      },
      {
        ...levelsBase['Intermedio'],
        topics: [
          'Escalas y modos',
          'Slap básico',
          'Walking bass',
          'Interacción con batería',
        ],
      },
      {
        ...levelsBase['Avanzado'],
        topics: [
          'Técnicas avanzadas (tapping, slap complejo)',
          'Improvisación y solos',
          'Armonía funcional',
          'Preparación para conciertos',
        ],
      },
    ],
  },
  {
    id: 'violin',
    name: 'Violín',
    description:
      'Nuestro curso de Violín combina técnica clásica con sensibilidad interpretativa. Aprenderás desde cómo sostener el arco hasta ejecutar repertorio avanzado, desarrollando oído y musicalidad.',
    levels: [
      {
        ...levelsBase['Principiante'],
        topics: [
          'Postura y afinación',
          'Ejercicios de arco',
          'Escalas simples',
          'Lectura de partitura básica',
        ],
      },
      {
        ...levelsBase['Intermedio'],
        topics: [
          'Cambios de posición',
          'Vibrato básico',
          'Repertorio clásico y moderno',
          'Ensamble',
        ],
      },
      {
        ...levelsBase['Avanzado'],
        topics: [
          'Técnicas avanzadas de arco',
          'Interpretación expresiva',
          'Repertorio solista',
          'Preparación para conciertos',
        ],
      },
    ],
  },
  {
    id: 'piano',
    name: 'Piano',
    description:
      'En nuestro curso de Piano aprenderás desde lectura musical hasta la ejecución de obras complejas. Fortalecerás tu técnica, coordinación y expresión musical, adaptado a tu estilo y nivel.',
    levels: [
      {
        ...levelsBase['Principiante'],
        topics: [
          'Postura y digitación',
          'Notación musical',
          'Melodías sencillas',
          'Acompañamientos básicos',
        ],
      },
      {
        ...levelsBase['Intermedio'],
        topics: [
          'Escalas y acordes complejos',
          'Lectura a dos manos',
          'Improvisación básica',
          'Repertorio clásico y contemporáneo',
        ],
      },
      {
        ...levelsBase['Avanzado'],
        topics: [
          'Interpretación avanzada',
          'Armonía aplicada',
          'Composición',
          'Repertorio de concierto',
        ],
      },
    ],
  },
  {
    id: 'canto',
    name: 'Canto',
    description:
      'Nuestro curso de Canto desarrolla tu voz como instrumento. Aprenderás técnica vocal, control respiratorio, expresión e interpretación, adaptado a cualquier estilo musical que te apasione.',
    levels: [
      {
        ...levelsBase['Principiante'],
        topics: [
          'Respiración diafragmática',
          'Afinación y entonación',
          'Vocalización',
          'Ejercicios de calentamiento',
        ],
      },
      {
        ...levelsBase['Intermedio'],
        topics: [
          'Proyección vocal',
          'Resonancia y timbre',
          'Interpretación',
          'Técnicas de estilo',
        ],
      },
      {
        ...levelsBase['Avanzado'],
        topics: [
          'Técnica mixta y belting',
          'Control emocional y escénico',
          'Improvisación vocal',
          'Preparación para presentaciones',
        ],
      },
    ],
  },
  {
    id: 'saxofon',
    name: 'Saxofón',
    description:
      'Nuestro curso de Saxofón está diseñado para explorar desde los fundamentos hasta las técnicas más expresivas de este instrumento. Aprenderás a interpretar estilos como jazz, pop, blues y más.',
    levels: [
      {
        ...levelsBase['Principiante'],
        topics: [
          'Postura y embocadura',
          'Sonido básico',
          'Lectura de notas',
          'Ejercicios de respiración',
        ],
      },
      {
        ...levelsBase['Intermedio'],
        topics: [
          'Escalas y articulaciones',
          'Improvisación inicial',
          'Estilos: jazz, funk, soul',
          'Ensamble',
        ],
      },
      {
        ...levelsBase['Avanzado'],
        topics: [
          'Técnicas extendidas (glissando, overtones)',
          'Improvisación avanzada',
          'Teoría y análisis de solos',
          'Preparación para presentaciones',
        ],
      },
    ],
  },
];
