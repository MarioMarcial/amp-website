import { Link } from 'react-router';
import { instruments } from '../../data/instruments';

export const InstrumentsGrid = () => {
  return (
    <>
      <section className="max-w-screen-xl mx-auto md:pb-6 flex flex-wrap justify-items-center gap-y-1 shadow-sm bg-transparent md:justify-center">
        {instruments.map((instrument) => (
          <Link
            key={instrument.id}
            to={`/instrumentos/${instrument.id}#`}
            className="group inline-block w-1/2 rounded-lg overflow-hidden py-5 bg-transparent hover:bg-linear-to-br hover:from-primary-600 hover:via-darkrich hover:to-secondary-600 transition-colors duration-500 ease-out md:w-1/4"
          >
            <div className="flex flex-col items-center">
              <img
                className="w-30 h-30 mb-3 rounded-full shadow-lg lg:w-40 xl:w-42 md:object-cover md:h-auto"
                src={`/images/${instrument.id}.jpg`}
                alt={`${instrument.name}`}
                loading="lazy"
              />
              <h5 className="mb-1 text-lg text-center px-6 font-bold text-graylight group-hover:text-white transition-colors duration-250 md:justify-self-end">
                {instrument.name}
              </h5>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
};
