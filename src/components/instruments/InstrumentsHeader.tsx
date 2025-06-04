import { useLocation } from 'react-router';
import { HeadingSection } from '../ui';

export const InstrumentsHeader = () => {
  const { pathname } = useLocation();
  return (
    <div className="pb-4 space-y-1 bg-transparent text-center md:pb-8">
      <HeadingSection
        as="h3"
        title="Clases"
        spacing="mb-0"
        textAlign="text-center"
        fontSize="text-xl"
      />

      <HeadingSection
        as="h2"
        title="Instrumentos"
        color="text-primary"
        textAlign="text-center"
        spacing="-mt-2"
        fontBold="font-extrabold"
        responsiveClasses="md:text-3xl"
      />

      {pathname === '/' && (
        <p className="px-4 text-gray-300">
          Elige un instrumento y comienza a desarrollar tu talento hoy mismo
        </p>
      )}
    </div>
  );
};
