import { Link } from 'react-router';
import { instrumentsData } from '../../data/instrumentsData';

export const InstrumentsGrid = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-y-1 justify-items-center md:grid-cols-3 xl:grid-cols-4 md:rounded-lg md:overflow-hidden">
        {instrumentsData.map((instrument) => (
          <Link
            key={instrument.id}
            to={`/instrumentos/${instrument.id}`}
            className="group py-5 xl:py-7 w-full rounded-lg overflow-hidden bg-transparent border-1 border-transparent hover:border-gray-900 hover:bg-gray-dark hover:shadow-xl hover:shadow-dark-rich-200 md:hover:scale-102 transition-all duration-500"
          >
            <div className="flex flex-col items-center">
              <div className="mb-3 inline-block overflow-hidden rounded-full relative w-26 h-26 md:w-33 md:h-33 2xl:w-36 2xl:h-36">
                <img
                  className="w-auto h-full md:brightness-90 object-cover md:group-hover:brightness-100   transition-all duration-500 pointer-events-none"
                  src={`${import.meta.env.BASE_URL}images/${instrument.id}.jpg`}
                  alt={`${instrument.name} imagen`}
                  loading="lazy"
                />
              </div>
              <h5 className="mb-1 text-lg text-center px-6 font-bold text-gray-light group-hover:text-white transition-colors duration-500 md:justify-self-end">
                {instrument.name}
              </h5>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
