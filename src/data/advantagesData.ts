import type { Advantage } from '../types/advantage.types';
import { HiOutlineUsers } from 'react-icons/hi2';
import { IoBookOutline } from 'react-icons/io5';
import { FaRegClock } from 'react-icons/fa';
import { GiThreeFriends } from 'react-icons/gi';
import { LiaGuitarSolid } from 'react-icons/lia';
import { FaRegFlag } from 'react-icons/fa';

export const advantagesData: Advantage[] = [
  {
    id: 1,
    title: 'Profesores Calificados',
    description:
      'Nuestros docentes son intérpretes activos con años tocando su instrumento. Enseñan desde la práctica, compartiendo lo que realmente funciona al aprender música.',
    icon: HiOutlineUsers,
  },
  {
    id: 2,
    title: 'Metodología Personalizada',
    description:
      'Adaptamos nuestro método de enseñanza a las necesidades, objetivos y ritmo de aprendizaje de cada estudiante.',
    icon: IoBookOutline,
  },
  {
    id: 3,
    title: 'Horarios Flexibles',
    description:
      'Sabemos que cada persona tiene su propio ritmo de vida. Por eso, ofrecemos horarios flexibles para que puedas aprender música sin sacrificar tus otras actividades.',
    icon: FaRegClock,
  },
  {
    id: 4,
    title: 'Planes de estudio claros y efectivos',
    description:
      'Cada clase sigue una ruta bien pensada. Avanzas paso a paso con ejercicios que te ayudan a crecer de forma constante y sin frustración.',
    icon: FaRegFlag,
  },
  {
    id: 5,
    title: 'Equipo a tu disposición',
    description:
      'Contamos con instrumentos disponibles para quienes aún no tienen el suyo. Así, cada alumno puede comenzar a practicar desde el primer día sin preocupaciones.',
    icon: LiaGuitarSolid,
  },
  {
    id: 6,
    title: 'Ambiente amigable y motivador',
    description:
      'Creamos un espacio en el que puedes expresarte con libertad, conectar con otros músicos y crecer tanto musical como personalmente.',
    icon: GiThreeFriends,
  },
];
