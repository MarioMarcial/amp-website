import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  hasBorderBottom?: boolean;
  as?: 'div' | 'section' | 'main' | 'footer' | 'header';
  size?: 'max-w-screen-md' | 'max-w-screen-lg' | 'max-w-screen-xl';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  hasBorderBottom = true,
  as: Element = 'div',
  size = 'max-w-screen-lg',
}) => {
  return (
    <Element
      className={`${size} mx-auto px-4 md:px-8 py-12 md:py-15 xl:px-0 ${
        hasBorderBottom && 'border-b-2 border-gray-dark/80'
      }`}
    >
      {children}
    </Element>
  );
};
