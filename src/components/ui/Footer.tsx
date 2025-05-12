import { Link } from 'react-router';
import { IconContext } from 'react-icons';

import { appSections, contactMethods, socialMedia } from '../../data';

export const Footer = () => {
  return (
    <>
      <footer className="bg-darkrich">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-evenly">
            <div className="mb-10 md:mb-0">
              <Link to={'/'} className="flex flex-col items-center">
                <img
                  src="src\assets\images\logo.png"
                  className="h-20 object-contain md:h-45"
                  alt="FlowBite Logo"
                  loading="lazy"
                />
                <span className="hidden self-center font-semibold whitespace-nowrap dark:text-white md:inline-block md:self-end md:text-md md:-mt-7 md:me-1 lg:text-xl -skew-4">
                  Arte Musical Puebla
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-1 text-center gap-8 md:gap-6 md:grid-cols-2 md:text-start justify-items-center">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Menú
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  {appSections.map((item) => (
                    <li key={item.path} className="mb-4">
                      <Link to={item.path} className="hover:underline">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Contacto
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  {contactMethods.map((item) => (
                    <li key={item.url} className="mb-4">
                      <Link
                        to={item.url}
                        className={`hover:underline flex justify-center ${
                          item.type === 'location' ? '' : 'items-center'
                        } gap-2 md:justify-start`}
                      >
                        <IconContext.Provider
                          value={{
                            color: 'white',
                            className: 'text-white w-5 h-5',
                          }}
                        >
                          <item.icon />
                        </IconContext.Provider>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="text-center sm:text-start sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2025&nbsp;
              <Link to={'/'} className="hover:underline">
                AMP™
              </Link>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 justify-center sm:mt-0 gap-1">
              {socialMedia.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener, noreferrer, nofollow"
                  title={`Abrir ${social.name}`}
                  aria-label="Abrir red social en otra ventana"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <IconContext.Provider
                    value={{
                      className: 'w-5 h-5',
                    }}
                  >
                    <social.icon />
                  </IconContext.Provider>
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
