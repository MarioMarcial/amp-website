import type { ElementType } from 'react';
import { Link } from 'react-router';

type ButtonPrimaryProps = {
  label: string;
  url: string;
  icon?: ElementType;
  displayStyles?: string;
};

export const ButtonHero = ({
  label,
  url,
  icon: Icon,
  displayStyles,
}: ButtonPrimaryProps) => {
  return (
    <Link
      to={url}
      className={`${
        displayStyles ? displayStyles : 'inline-flex'
      } items-center justify-center px-5 py-3 mr-3 text-base font-bold text-center text-dark rounded-lg bg-primary hover:bg-primary-300 transition-colors`}
    >
      {label}
      {Icon && <Icon className="w-5 h-5 ml-2 -mr-1" />}
    </Link>
  );
};
