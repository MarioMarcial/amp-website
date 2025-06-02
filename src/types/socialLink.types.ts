import type { IconType } from 'react-icons';

export interface SocialLink {
  name: 'Facebook' | 'Instagram' | 'Tiktok';
  url: string;
  icon: IconType;
  color: string;
}
