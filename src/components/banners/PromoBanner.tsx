import { FaPhoneAlt } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Button } from '../ui/buttons/Button';

export const PromoBanner = () => {
  return (
    <section className='text-center py-8 bg-linear-to-l from-secondary-700 via-darkrich to-primary-700 relative z-10 after:bg-[url("/images/announcement.jpg")] after:bg-cover after:bg-center after:bg-no-repeat after:opacity-10 after:absolute after:w-full after:h-full after:top-0 after:bottom-0 after:left-0 after:right-0 after:content-[""] after:-z-10 after:md:opacity-20 md:py-13'>
      <h4 className="text-secondary font-bold text-xl">
        Inscripciones abiertas
      </h4>
      <h3 className="text-white font-extrabold text-2xl">
        ¡Obtén tu clase muestra sin costo!
      </h3>
      <p className="text-graylight">
        Pregunta por la promoción del mes y agenda tu clase muestra sin costo.
      </p>
      <div className="space-y-3 mt-3">
        <Button
          label={'Explorar Instrumentos'}
          url={'/instrumentos'}
          icon={FaArrowRightLong}
          bgColor={'secondary'}
        />

        <a
          href="tel:+522221066291"
          className="justify-self-center flex items-center gap-1"
        >
          <FaPhoneAlt className="text-white" />
          <p className="text-graylight">
            Llámanos al&nbsp;
            <span className="font-bold text-white">(222) 106-62-91</span>
          </p>
        </a>
      </div>
    </section>
  );
};
