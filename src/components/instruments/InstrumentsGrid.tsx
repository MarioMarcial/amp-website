import { Link } from 'react-router';
import { instrumentsData } from '../../data/instrumentsData';

export const InstrumentsGrid = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-y-1 justify-items-center md:grid-cols-3 md:rounded-lg md:overflow-hidden">
        {instrumentsData.map((instrument) => (
          <Link
            key={instrument.id}
            to={`/instrumentos/${instrument.id}`}
            className="group w-full py-5 rounded-lg overflow-hidden bg-transparent border-1 border-transparent transition-all duration-500 ease-in-out hover:shadow-xl hover:border-gray-900 hover:bg-gray-dark hover:shadow-black-200 xl:py-7"
          >
            <div className="flex flex-col items-center">
              <div className="w-26 h-26 relative inline-block mb-3 rounded-full overflow-hidden md:w-33 md:h-33 xl:w-36 xl:h-36">
                <img
                  className="w-auto h-full object-cover transition-all duration-500 ease-in-out pointer-events-none md:brightness-90 md:group-hover:brightness-100 md:group-hover:scale-105"
                  src={`${import.meta.env.BASE_URL}images/${instrument.id}.jpg`}
                  alt={`${instrument.name} imagen`}
                  loading="lazy"
                />
              </div>
              <h3 className="mb-1 px-6 text-xl text-center font-bold text-gray-200 group-hover:text-white transition-colors duration-500 md:justify-self-end">
                {instrument.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
