import { contactMethodsData, socialMediaData } from '../data';
import { ContactLeafletMap } from '../components/contact/ContactLeafletMap';
import { FiMessageCircle } from 'react-icons/fi';
import { RiExternalLinkLine } from 'react-icons/ri';
import { HiOutlineLocationMarker } from 'react-icons/hi';

export default function Contact() {
  return (
    <>
      <section className="max-w-screen-xl mx-auto section-spacing grid space-y-10 md:grid-cols-2 md:gap-x-10">
        {/* Column 1 */}
        <div>
          <h2 className="text-2xl font-extrabold text-gray-100 md:text-3xl mb-8 md:mb-9">
            Medios de Contacto
          </h2>

          {/* Whatsapp Card */}
          <div className="mb-10">
            <div className="bg-dark-rich p-6 rounded-xl border-l-4 border-green-500">
              <div className="flex items-start gap-4">
                <div className="bg-green-500 p-3 rounded-full">
                  <FiMessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    WhatsApp (Respuesta Inmediata)
                  </h3>
                  <p className="text-gray-300 mb-3">
                    Nuestro principal medio de contacto. Respuesta rápida para
                    consultas y agendamiento de clases.
                  </p>
                  <a
                    href="https://wa.me/522221066291"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors"
                  >
                    <span>Enviar mensaje</span>
                    <RiExternalLinkLine className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            {contactMethodsData.map((contact) => (
              <div key={contact.type} className="flex items-start gap-4">
                <div className="bg-gray-dark p-3 rounded-full">
                  <contact.icon className="h-6 w-6 text-primary-100 stroke-1" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-white">
                    {contact.name}
                  </h3>

                  {!['location', 'schedule'].includes(contact.type) && (
                    <a
                      href={contact.href}
                      className="text-gray-300 hover:underline hover:text-primary-100 transition-colors font-medium"
                    >
                      {contact.label}
                    </a>
                  )}

                  {contact.details.map((detail) => (
                    <p
                      key={detail}
                      className={`${
                        !['location', 'schedule'].includes(contact.type)
                          ? 'text-gray-400 text-xs'
                          : 'text-gray-300 text-sm'
                      }  mt-1`}
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <hr className="my-8 border-2 text-gray-900/60" />

          {/* Socials */}
          <div>
            <h3 className="heading-amp mb-4 text-gray-200">
              Síguenos en Redes Sociales
            </h3>
            <div className="flex flex-wrap gap-4 px-4">
              {socialMediaData.map((social) => (
                <a
                  key={social.name}
                  href="https://facebook.com/academiamusica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-dark hover:bg-[oklch(0.25_0.02_274.75)] py-2 px-4 rounded-lg transition-colors text-gray-200"
                >
                  <social.icon
                    className="h-5 w-5"
                    style={{ color: social.color }}
                  />
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-2xl font-extrabold text-gray-100 md:text-3xl mb-8 md:mb-9">
            Nuestra Ubicación
          </h2>

          {/* Map */}
          <div className="rounded-xl overflow-hidden mb-8">
            <ContactLeafletMap />
          </div>

          {/* Additional Info */}
          <div className="bg-dark-rich border-primary-400 rounded-xl">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary-100">
                Cómo llegar
              </h3>

              {/* How to arrive */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-white mb-1">
                    En transporte público:
                  </h4>
                  <p className="text-gray-300">
                    Rutas de autobús: 10, 14, 25 y 32 con parada en Av. Juárez y
                    Calle Reforma.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-white mb-1">En automóvil:</h4>
                  <p className="text-gray-300">
                    Estacionamiento disponible en el edificio. Entrada por Calle
                    Reforma.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-white mb-1">
                    Puntos de referencia:
                  </h4>
                  <p className="text-gray-300">
                    A dos cuadras del Parque Central y frente al Centro
                    Comercial Las Américas.
                  </p>
                </div>
              </div>

              {/* Action Call */}
              <div className="mt-6">
                <a
                  href="https://maps.app.goo.gl/ozyDkep4Q41435Dg6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-100 text-dark-rich-100 py-2 px-4 rounded-lg transition-colors"
                >
                  <HiOutlineLocationMarker className="h-5 w-5" />
                  <span>Ver en Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
