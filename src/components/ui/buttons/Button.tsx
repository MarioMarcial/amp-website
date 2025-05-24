import { Link } from 'react-router';
import type { ElementType } from 'react';
import clsx from 'clsx';

export type Color =
  | 'primary'
  | 'primary-100'
  | 'secondary'
  | 'secondary-100'
  | 'dark-rich'
  | 'white'
  | 'gray-dark'
  | 'gray-light';

type ButtonPrimaryProps = {
  label: string;
  url: string;
  icon?: ElementType;
  bgColor?: Color;
  textColor?: Color;
  iconStart?: boolean;
  fontBold?: boolean;
};

export const Button = ({
  label,
  url,
  icon: Icon,
  bgColor = 'primary',
  textColor = 'dark-rich',
  iconStart = true,
  fontBold = false,
}: ButtonPrimaryProps) => {
  const className = clsx(
    'px-5 py-3 inline-flex items-center justify-center text-base text-center rounded-lg transition-colors',
    `text-${textColor}`,
    `bg-${bgColor} hover:bg-${bgColor}`,
    `${fontBold ? 'font-bold' : 'font-medium'}`
  );
  return (
    <Link to={url} className={className}>
      {iconStart ? (
        <>
          {Icon && <Icon className="w-5 h-5 mr-2" />}
          {label}
        </>
      ) : (
        <>
          {label}
          {Icon && <Icon className="w-5 h-5 ml-2 -mr-1" />}
        </>
      )}
    </Link>
  );
};
