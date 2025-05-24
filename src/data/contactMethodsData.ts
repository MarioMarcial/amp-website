import { CiLocationOn, CiMail, CiPhone } from 'react-icons/ci';
import type { ContactMethod } from '../types/contactMethod.types';
export const contactMethodsData: ContactMethod[] = [
  {
    name: 'Teléfono',
    href: 'tel:+522221066291',
    label: '(222) 106-62-91',
    icon: CiPhone,
    type: 'phone',
    details: [
      'Lunes a Viernes: 9:00 AM - 8:00 PM',
      'Sábados: 9:00 AM - 2:00 PM',
    ],
  },
  {
    name: 'Correo Eléctronico',
    label: 'artemusicalpuebla@gmail.com',
    href: 'mailto:artemusicalpuebla@gmail.com',
    icon: CiMail,
    type: 'email',
    details: ['Respuesta en 24-48 horas'],
  },
  {
    name: 'Dirección',
    label: '5 Sur 3302, Col. Chula Vista Puebla',
    href: '/contacto#ubicacion',
    icon: CiLocationOn,
    type: 'location',
    details: ['5 Sur 3302, Col. Chula Vista', 'Puebla, Puebla, CP 72420'],
  },
  {
    name: 'Horario de Atención',
    label: '',
    href: 'asd',
    icon: CiLocationOn,
    type: 'schedule',
    details: [
      'Lunes a Viernes: 1:00 PM - 8:00 PM',
      'Sábados: 9:00 AM - 2:00 PM',
      'Domingos: Cerrado',
    ],
  },
];
