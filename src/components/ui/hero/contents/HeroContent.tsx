import type { HeroContentProps } from '../../../../types/hero.types';

export const HeroContent = ({ title, description }: HeroContentProps) => {
  return (
    <div className="px-8 py-35 space-y-2 md:py-40 lg:py-50">
      <h1 className="text-3xl font-extrabold text-white lg:text-4xl">
        {title}
      </h1>
      <p className="px-4 text-base/6 text-gray-100 md:text-lg md:max-w-lg md:mx-auto">
        {description}
      </p>
    </div>
  );
};
