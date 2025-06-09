import { Link } from 'react-router';
import type { IconType } from 'react-icons';
import clsx from 'clsx';

interface ButtonProps {
  fontBold?: boolean;
  icon?: IconType;
  iconStart?: boolean;
  label: string;
  url: string;
  variant?: 'primary' | 'secondary';
}

export const Button = ({
  label,
  url,
  icon: Icon,
  variant = 'primary',
  iconStart = true,
  fontBold = false,
}: ButtonProps) => {
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
    <Link to={url} className={className} title={`Ir a ${label}`}>
      {Icon && <Icon className="w-5 h-5" />}
      {label}
    </Link>
  );
};
