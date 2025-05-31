import { FaPhoneAlt } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Button } from '../ui/buttons/Button';

export const PromoBanner = () => {
  return (
    <section className="max-w-screen-xl mx-auto grid md:grid-cols-2 rounded-xl bg-linear-to-l from-secondary-700 via-dark-rich via-25% to-primary-500 overflow-hidden">
      <div>
        <img
          src="/images/announcement.jpg"
          className="w-full object-cover md:max-h-80"
          alt=""
        />
      </div>
      <div className="self-center md:px-20">
        <h4 className="text-secondary font-bold text-xl">
          Inscripciones abiertas
        </h4>
        <h3 className="text-white font-extrabold text-2xl px-5 md:px-0">
          ¡Obtén tu clase muestra sin costo!
        </h3>
        <p className="text-gray-300">
          Pregunta por la promoción del mes y agenda tu clase muestra.
        </p>
        <div className="space-y-3 mt-3">
          <Button
            label={'Explorar Instrumentos'}
            url={'/instrumentos'}
            icon={FaArrowRightLong}
            iconStart={false}
          />

          <a href="tel:+522221066291" className="flex items-center gap-1">
            <FaPhoneAlt className="text-white" />
            <p className="text-gray-300">
              Llámanos al&nbsp;
              <span className="font-bold text-white">(222) 106-62-91</span>
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};
