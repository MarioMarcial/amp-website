import type { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  hasBorderBottom?: boolean;
  as?: 'div' | 'section' | 'main' | 'footer' | 'header';
};

export const Container: React.FC<ContainerProps> = ({
  children,
  hasBorderBottom = true,
  as: Element = 'div',
}) => {
  return (
    <Element
      className={`max-w-screen-lg mx-auto px-4 md:px-8 py-12 md:py-15 xl:px-0 ${
        hasBorderBottom && 'border-b-2 border-gray-dark/80'
      }`}
    >
      {children}
    </Element>
  );
};
