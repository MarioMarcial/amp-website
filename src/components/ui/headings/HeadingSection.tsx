interface HeadingProps {
  title: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  fontBold?: 'font-medium' | 'font-semibold' | 'font-bold' | 'font-extrabold';
  textAlign?: 'text-start' | 'text-center' | 'text-end';
  fontSize?:
    | 'text-sm'
    | 'text-lg'
    | 'text-xl'
    | 'text-2xl'
    | 'text-3xl'
    | 'text-4xl'
    | 'text-5xl';
  responsiveClasses?: string;
  spacing?: string;
  color?: 'text-white' | 'text-primary' | 'text-secondary';
}
export const HeadingSection: React.FC<HeadingProps> = ({
  title,
  as: Element = 'h1',
  fontBold = 'font-bold',
  textAlign = 'text-start',
  fontSize = 'text-2xl',
  responsiveClasses = '',
  spacing = 'mb-6',
  color = 'text-white',
}) => {
  return (
    <Element
      className={`${spacing} ${fontSize} ${textAlign} ${color} ${fontBold} ${responsiveClasses}`}
    >
      {title}
    </Element>
  );
};
