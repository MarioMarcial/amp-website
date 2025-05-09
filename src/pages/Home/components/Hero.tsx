import { ButtonHero } from '../../../components/buttons';
import { Icons } from './../../../assets/icons/Icons';

export const Hero = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto md:py-15 md:gap-5 md:grid-cols-8 lg:gap-8 xl:gap-0 lg:grid-cols-12">
          <div className="mx-auto text-center place-self-center md:mx-0 md:text-start md:col-span-4 lg:mr-auto lg:col-span-7">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:max-w-md xl:max-w-xl xl:text-6xl dark:text-white">
              Academia de <span className="text-primary">música</span> en Puebla
            </h1>
            <p className="max-w-2xl mb-6 font-light text-graylight-300 md:text-lg lg:text-xl ">
              Da el primer paso. En&nbsp;
              <span className="font-bold text-white">Arte Musical Puebla</span>
              &nbsp;te ofrecemos el ambiente perfecto para desarrollar tu
              talento al máximo.
            </p>
            <ButtonHero
              icon={Icons.RightArrow}
              label="Comenzar Viaje"
              url="/contacto"
              displayStyles="hidden md:inline-flex"
            />
          </div>
          <div className="text-center md:text-start md:col-span-4 lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="src\assets\images\hero-mobile.png"
              className="w-full max-w-90 mx-auto md:max-w-full sm:mask-radial-to-center sm:mask-radial-from-68% sm:mask-radial-to-74% md:mask-radial-from-69% md:mask-radial-to-70%"
              alt="hero imagen"
            />
            <ButtonHero
              icon={Icons.RightArrow}
              label="Comenzar Viaje"
              url="/contacto"
              displayStyles="inline-flex md:hidden"
            />
          </div>
        </div>
      </section>
    </>
  );
};
