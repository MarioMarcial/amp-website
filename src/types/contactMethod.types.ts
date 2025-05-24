import type { IconType } from 'react-icons';

export type ContactMethod = {
  name: string;
  label: string;
  href: string;
  icon: IconType;
  type: 'email' | 'phone' | 'location' | 'schedule';
  details: string[];
};
