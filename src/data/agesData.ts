import type { AgeCategory } from '../types/ageTab';

export const agesData: AgeCategory[] = [
  {
    id: 1,
    category: 'Niños',
    title: 'Para Pequeños Grandes Músicos (6-12 años)',
    description:
      'Nuestro método de enseñanza para niños convierte el aprendizaje musical en una aventura divertida y accesible. Usamos pedagogía adaptada a su edad, con juegos y actividades dinámicas que desarrollan su coordinación, oído musical y creatividad.',
    details: [
      'Clases concisas y dinámicas',
      'Instrumentos adaptados a su tamaño',
      'Uso de material didáctico e interactivo',
      'Fundamentos sólidos y prácticos',
    ],
  },
  {
    id: 2,
    category: 'Jóvenes',
    title: 'Enfoque en Jóvenes (13-17 años)',
    description:
      'Nuestro programa para jóvenes combina técnica y expresión, adaptándose a sus intereses musicales. Fomentamos la creatividad y ofrecemos oportunidades para tocar en conjunto, preparándolos para posibles estudios musicales superiores.',
    details: [
      'Clases de 60 minutos',
      'Repertorio adaptado a sus gustos',
      'Teoría musical aplicada',
      'Participación en bandas y ensambles',
    ],
  },
  {
    id: 3,
    category: 'Adultos',
    title: 'Enfoque en Adultos (18+ años)',
    description:
      'Nuestro programa para adultos se adapta a tus objetivos personales, ya sea aprender por hobby, retomar estudios previos o prepararte profesionalmente. Ofrecemos horarios flexibles y un enfoque personalizado para cada estudiante.',
    details: [
      'Clases de 60-90 minutos',
      'Plan de estudio personalizado',
      'Horarios flexibles',
      'Oportunidades de presentación opcional',
    ],
  },
];
