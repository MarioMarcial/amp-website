import type { HomeSiteSection } from '../types/homeSiteSection.types';
import { RiContactsLine } from 'react-icons/ri';
import { TfiMedall } from 'react-icons/tfi';

export const homeSiteSectionsData: HomeSiteSection[] = [
  {
    title: '¿Cómo nos encuentras?',
    description: '¡Ubícanos y háznos saber en que podemos ayudarte!',
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
