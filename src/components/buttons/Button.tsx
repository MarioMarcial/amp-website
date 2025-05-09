import type { ElementType } from 'react';

type Color = 'primary' | 'secondary' | 'dark' | 'white' | 'graydark';

type ButtonPrimaryProps = {
  label: string;
  url: string;
  icon?: ElementType;
  bgColor?: Color;
  textColor?: Color;
};

export const Button = ({
  label,
  url,
  icon: Icon,
  bgColor = 'primary',
  textColor = 'dark',
}: ButtonPrimaryProps) => {
  return (
    <a
      href={url}
      className={`inline-flex
      items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-${textColor} rounded-lg bg-${bgColor} hover:bg-${bgColor}-300 transition-colors`}
    >
      {label}
      {Icon && <Icon className="w-5 h-5 ml-2 -mr-1" />}
    </a>
  );
};
