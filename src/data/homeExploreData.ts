import type { HomeExploreItem } from '../types/homeExploreItem.types';
import { RiContactsLine } from 'react-icons/ri';
import { TfiMedall } from 'react-icons/tfi';

export const homeExploreData: HomeExploreItem[] = [
  {
    title: '¿Cómo nos encuentras?',
    description: '¡Contáctanos y cuéntanos cómo podemos ayudarte!',
    url: '/contacto',
    icon: RiContactsLine,
  },
  {
    title: '¿Por qué deberías unirte?',
    description: 'Descubre las ventajas de estudiar con nosotros',
    url: '/ventajas',
    icon: TfiMedall,
  },
];
