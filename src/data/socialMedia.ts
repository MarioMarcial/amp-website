import type { SocialLink } from '../types/socialLink.types';
import { FaFacebookF, FaTiktok } from 'react-icons/fa';
import { PiInstagramLogoFill } from 'react-icons/pi';

export const socialMedia: SocialLink[] = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/Artemusicalpuebla',
    icon: FaFacebookF,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/arte_musical_puebla',
    icon: PiInstagramLogoFill,
  },
  {
    name: 'Tiktok',
    url: '#',
    icon: FaTiktok,
  },
];
