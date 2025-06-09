import { FiMessageCircle } from 'react-icons/fi';
import { RiExternalLinkLine } from 'react-icons/ri';

export const ContactWhatsAppCard = () => {
  return (
    <div className="mb-10">
      <div className="p-6 rounded-xl bg-gray-dark border-l-4 border-green-500">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-green-500">
            <FiMessageCircle className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-gray-200">
              WhatsApp (Respuesta Inmediata)
            </h3>
            <p className="mb-3 text-gray-300">
              Nuestro principal medio de contacto. Respuesta rápida para
              consultas y agendamiento de clases.
            </p>
            <a
              href="https://wa.me/522221066291"
              target="_blank"
              rel="noopener noreferrer"
              title="Abrir chat en WhatsApp"
              aria-label="Abrir chat en WhatsApp"
              className="inline-flex items-center gap-2 py-2 px-4 rounded-lg bg-green-500 hover:bg-green-600 text-white transition-colors"
            >
              <span>Enviar mensaje</span>
              <RiExternalLinkLine className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
