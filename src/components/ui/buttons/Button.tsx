import { Link } from 'react-router';
import type { ElementType } from 'react';
import clsx from 'clsx';

type ButtonPrimaryProps = {
  fontBold?: boolean;
  icon?: ElementType;
  iconStart?: boolean;
  label: string;
  url: string;
  variant?: 'primary' | 'secondary';
};

export const Button = ({
  label,
  url,
  icon: Icon,
  variant = 'primary',
  iconStart = true,
  fontBold = false,
}: ButtonPrimaryProps) => {
  const className = clsx(
    'inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-base text-center text-dark-rich transition-colors',
    `${iconStart ? 'flex-row' : 'flex-row-reverse'}`,
    `${
      variant === 'primary'
        ? 'bg-primary hover:bg-primary-100'
        : 'bg-secondary hover:bg-secondary-100'
    }`,
    `${fontBold ? 'font-bold' : 'font-medium'}`
  );
  return (
    <Link to={url} className={className}>
      {Icon && <Icon className="w-5 h-5" />}
      {label}
    </Link>
  );
};
