type HeadingProps = {
  title: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  fontBold?: 'medium' | 'semibold' | 'bold' | 'extrabold';
  textAlign?: 'start' | 'center' | 'end';
  fontSize?: 'sm' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  responsiveClasses?: string;
  spacing?: string;
  color?: 'white' | 'primary' | 'secondary' | string;
};
export const HeadingSection: React.FC<HeadingProps> = ({
  title,
  as: Element = 'h1',
  fontBold = 'bold',
  textAlign = 'start',
  fontSize = '2xl',
  responsiveClasses = '',
  spacing = 'mb-6',
  color = 'white',
}) => {
  return (
    <Element
      className={`${spacing} text-${fontSize} text-${textAlign} text-${color} font-${fontBold} ${responsiveClasses}`}
    >
      {title}
    </Element>
  );
};
