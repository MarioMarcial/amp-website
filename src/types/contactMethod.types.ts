import type { IconType } from 'react-icons';

export type ContactMethod = {
  type: 'email' | 'phone' | 'location';
  url: string;
  label: string;
  icon: IconType;
};
