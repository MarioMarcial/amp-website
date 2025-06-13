import type { HeroProps } from '../../../types';

export const Hero = ({ bgImage, children, type }: HeroProps) => {
  const bgImageUrl = `${import.meta.env.BASE_URL}images/${bgImage}`;
  return (
    <section
      className={`relative text-center z-10 bg-linear-to-t from-dark-rich-100 to-primary-600`}
    >
      {/* Background Image */}
      <div className="absolute -z-10 inset-0 mask-top mask-b-from-70% mask-b-to-100% md:mask-b-from-70% md:after:mask-b-to-100%">
        <img
          src={bgImageUrl}
          alt={`${bgImage} imagen`}
          className={`w-full h-full object-cover object-[50%_40%] ${
            type === 'instrument' ? 'opacity-30' : 'opacity-6'
          } md:opacity-6  pointer-events-none`}
          loading="lazy"
        />
      </div>

      {children}
    </section>
  );
};
