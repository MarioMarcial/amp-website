import { Link } from 'react-router';
import { instrumentsData } from '../../data/instrumentsData';

export const InstrumentsGrid = () => {
  return (
    <>
      <div className="flex flex-wrap justify-items-center gap-y-1 bg-transparent md:gap-y-8 md:rounded-lg md:overflow-hidden">
        {instrumentsData.map((instrument) => (
          <Link
            key={instrument.id}
            to={`/instrumentos/${instrument.id}`}
            className="group py-5 xl:py-7 w-1/2 md:w-1/3 rounded-lg md:rounded-none overflow-hidden bg-transparent border-1 border-transparent hover:border-gray-900 hover:bg-gray-dark hover:shadow-xl hover:shadow-dark-rich-200 transition-all duration-500"
          >
            <div className="flex flex-col items-center">
              <div className="mb-3 inline-block overflow-hidden rounded-full relative w-30 h-30 md:w-36 md:h-36 2xl:w-40 2xl:h-40 ">
                <img
                  className="w-auto h-full md:brightness-95 object-cover  md:group-hover:brightness-100 transition-all duration-500 pointer-events-none"
                  src={`/images/${instrument.id}.jpg`}
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
