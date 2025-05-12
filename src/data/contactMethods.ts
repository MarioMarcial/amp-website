import { CiLocationOn, CiMail, CiPhone } from 'react-icons/ci';
import type { ContactMethod } from '../types/contactMethod.types';
export const contactMethods: ContactMethod[] = [
  {
    type: 'phone',
    url: 'tel:+522221066291',
    label: '(222) 106-62-91',
    icon: CiPhone,
  },
  {
    type: 'email',
    url: 'mailto:artemusicalpuebla@gmail.com',
    label: 'artemusicalpuebla@gmail.com',
    icon: CiMail,
  },
  {
    type: 'location',
    url: '/contacto#ubicacion',
    label: '5 sur #3302 Colonia Chula Vista Puebla',
    icon: CiLocationOn,
  },
];
