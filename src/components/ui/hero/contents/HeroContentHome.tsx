import type { HeroContentHomeProps } from '../../../../types/hero.types';
import { Button } from '../../button';
import { FaArrowRightLong } from 'react-icons/fa6';

export const HeroContentHome = ({
  title,
  description,
  thumbnailImage,
}: HeroContentHomeProps) => {
  const thumbnailImageUrl = `${
    import.meta.env.BASE_URL
  }images/${thumbnailImage}`;
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-12 md:px-8 md:py-15 lg:py-25 xl:px-0 animate-fade-in-up">
      {/* Grid */}
      <div className="md:grid md:grid-cols-2 md:gap-1 lg:grid-cols-5 lg:gap-5">
        {/* First Column */}
        <div className="self-center md:mx-0 lg:col-span-3">
          <h1 className="mb-2 flex flex-wrap justify-center text-4xl font-extrabold text-white md:justify-start md:mb-4 lg:text-5xl">
            {title}
          </h1>
          <p className="mb-4 text-center text-base/6 text-gray-100 md:mb-6 md:text-lg md:text-start lg:max-w-xl lg:text-xl/8 ">
            {description}
          </p>
          <div className="hidden md:flex justify-start">
            <Button
              icon={FaArrowRightLong}
              label="Comenzar Viaje"
              url="/instrumentos"
              iconStart={false}
              fontBold={true}
            />
          </div>
        </div>

        {/* Second Column */}
        <div className="justify-self-center mt-1 md:justify-self-end lg:col-span-2 lg:mt-0">
          <img
            src={thumbnailImageUrl}
            className="w-full max-w-85 mx-auto mask-radial-from-55% mask-radial-to-75% md:max-w-85 md:mask-radial-from-69% md:mask-radial-to-70% lg:max-w-120"
            alt={`${thumbnailImage} imagen`}
            loading="lazy"
          />
          <div className="flex justify-center -mt-12 relative md:hidden">
            <Button
              icon={FaArrowRightLong}
              label="Comenzar Viaje"
              url="/instrumentos"
              iconStart={false}
              fontBold={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
