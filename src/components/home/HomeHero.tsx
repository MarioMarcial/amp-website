import { FaArrowRightLong } from 'react-icons/fa6';
import { Button } from '../ui/buttons';

export const HomeHero = () => {
  return (
    <>
      <section className="bg-dark-rich relative z-10 after:mask-top after:mask-b-from-60% after:mask-b-to-100% after:bg-[url('/images/herobg.jpg')] after:bg-cover after:bg-fixed after:bg-center after:bg-no-repeat after:opacity-25 after:absolute after:w-full after:h-full after:top-0 after:bottom-0 after:left-0 after:right-0 after:content-[''] after:-z-10 after:blur-xs md:after:mask-b-from-50% md:after:mask-b-to-100%">
        <div className="max-w-screen-xl container-spacing md:grid md:grid-cols-2 lg:grid-cols-5 md:gap-1 lg:gap-5">
          <div className="md:mx-0 self-center lg:col-span-3">
            <h1 className="text-white text-4xl font-extrabold flex flex-wrap justify-center mb-2 md:mb-4 md:justify-start lg:text-6xl">
              Academia de&nbsp;
              <span className="bg-linear-to-r from-primary from-40% to-secondary bg-clip-text text-transparent">
                música&nbsp;
              </span>
              en Puebla
            </h1>
            <p className="text-center text-gray-100 text-base/6 mb-4 md:mb-6 md:text-start md:text-lg lg:text-xl/8 lg:max-w-xl">
              Da el primer paso. En&nbsp;
              <span className="font-bold">Arte Musical Puebla</span>
              &nbsp;te ofrecemos el ambiente perfecto para desarrollar tu
              talento al máximo.
            </p>
            <div className="hidden md:inline-flex">
              <Button
                icon={FaArrowRightLong}
                label="Comenzar Viaje"
                url="/instrumentos"
                iconStart={false}
                fontBold={true}
              />
            </div>
          </div>
          <div className="justify-self-center mt-1 md:justify-self-end lg:mt-0 lg:col-span-2">
            <img
              src={`${import.meta.env.BASE_URL}images/hero-mobile.png`}
              className="w-full max-w-80 mx-auto sm:mask-radial-to-center sm:mask-radial-from-68% sm:mask-radial-to-74% md:mask-radial-from-69% md:mask-radial-to-70% md:max-w-85 lg:max-w-120"
              alt="hero imagen"
              loading="lazy"
            />
            <div className="flex justify-center md:hidden">
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
      </section>
    </>
  );
};
