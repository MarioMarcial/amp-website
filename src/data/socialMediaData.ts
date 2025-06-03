import type { SocialLink } from '../types/socialLink.types';
import { FaInstagram } from 'react-icons/fa';
import { LuFacebook } from 'react-icons/lu';
import { PiTiktokLogo } from 'react-icons/pi';

export const socialMediaData: SocialLink[] = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/Artemusicalpuebla',
    icon: LuFacebook,
    color: '#3b5998',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/arte_musical_puebla',
    icon: FaInstagram,
    color: '#C13584',
  },
  {
    name: 'Tiktok',
    url: 'https://www.tiktok.com/@artemrhfw71',
    icon: PiTiktokLogo,
    color: '#fff',
  },
];
