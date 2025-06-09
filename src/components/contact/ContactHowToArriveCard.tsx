import { HiOutlineLocationMarker } from 'react-icons/hi';
import { TbLocation } from 'react-icons/tb';

export const ContactHowToArriveCard = () => {
  return (
    <>
      <div className="bg-gray-dark border-primary-400 rounded-ee-xl rounded-es-xl">
        <div className="p-6">
          <h3 className="flex items-center gap-3 mb-4 text-xl font-semibold text-primary-100">
            <TbLocation className="stroke-3" />
            Cómo llegar
          </h3>
          {/* How to arrive */}
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-200 mb-1">
                En transporte público:
              </h4>
              <p className="text-gray-300">
                Rutas de autobús: 10, Boulevard C.U., Nueva Visión, Loma Bella,
                Ruta 11.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-200 mb-1">
                En automóvil:
              </h4>
              <p className="text-gray-300">
                Estacionamiento disponible en el edificio. Entrada por Calle 5
                Sur o Avenida 33 Poniente.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-200 mb-1">
                Puntos de referencia:
              </h4>
              <p className="text-gray-300">
                A 4 calles de la línea 2 del ruta. 2da planta del edificio al
                lado del Oxxo. A 4 calles del Bodega Aurrera.
              </p>
            </div>
          </div>

          {/* Maps Link */}
          <div className="mt-6">
            <a
              href="https://maps.app.goo.gl/ozyDkep4Q41435Dg6"
              target="_blank"
              title="Abrir en Google Maps"
              aria-label="Abrir en Google Maps"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-100 text-dark-rich-100 py-2 px-4 rounded-lg transition-colors"
            >
              <HiOutlineLocationMarker className="h-5 w-5" />
              <span>Ver en Google Maps</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
