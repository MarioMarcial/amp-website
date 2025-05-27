import { FaArrowRightLong } from 'react-icons/fa6';
import { Button } from '../ui/buttons';

export const HomeHero = () => {
  return (
    <>
      <section className="bg-dark-rich md:py-5 relative z-10 after:mask-top after:mask-b-from-60% after:mask-b-to-100% after:bg-[url('/images/herobg.jpg')] after:bg-cover after:bg-fixed after:bg-center after:bg-no-repeat after:opacity-15 after:absolute after:w-full after:h-full after:top-0 after:bottom-0 after:left-0 after:right-0 after:content-[''] after:-z-10 after:md:mask-b-from-90% after:md:mask-b-to-100% after:lg:mask-b-from-95% after:lg:mask-b-to-110%">
        <div className="max-w-screen-xl container-spacing mx-auto grid md:gap-5 md:grid-cols-8 lg:gap-8 xl:gap-0 lg:grid-cols-12">
          <div className="mx-auto text-center place-self-center md:mx-0 md:text-start md:col-span-4 lg:mr-auto lg:col-span-7">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:max-w-md xl:max-w-xl xl:text-6xl dark:text-white">
              Academia de{' '}
              <span className="bg-linear-to-r from-primary from-40% to-secondary bg-clip-text text-transparent">
                música
              </span>{' '}
              en Puebla
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-300 md:text-lg lg:text-xl ">
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
          <div className="text-center md:text-start md:col-span-4 lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="/images/hero-mobile.png"
              className="w-full max-w-90 mx-auto md:max-w-full sm:mask-radial-to-center sm:mask-radial-from-68% sm:mask-radial-to-74% md:mask-radial-from-69% md:mask-radial-to-70%"
              alt="hero imagen"
              loading="lazy"
            />
            <div className="inline-flex md:hidden">
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
