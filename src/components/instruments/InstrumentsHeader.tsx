import { useLocation } from 'react-router';

export const InstrumentsHeader = () => {
  const { pathname } = useLocation();
  return (
    <div className="bg-transparent text-center space-y-1 pb-4 md:pb-8">
      {pathname !== '/' ? (
        <>
          <h2 className="text-xl text-white font-bold mb-0">Clases</h2>
          <h1 className="text-2xl text-primary font-extrabold md:text-3xl">
            Instrumentos Musicales
          </h1>
        </>
      ) : (
        <>
          <h3 className="text-xl text-white font-bold mb-0">Clases</h3>
          <h2 className="text-2xl text-primary font-extrabold md:text-3xl">
            Instrumentos Musicales
          </h2>
        </>
      )}
      <p className="text-gray-300 px-4">
        Conoce nuestras opciones de clases y comienza a desarrollar tu potencial
        como músico
      </p>
    </div>
  );
};
