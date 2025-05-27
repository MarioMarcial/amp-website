import { Link, NavLink } from 'react-router';

import { appMenuData, contactMethodsData, socialMediaData } from '../../data';

export const Footer = () => {
  const contactMethods = contactMethodsData.filter(
    (contact) => contact.type !== 'schedule'
  );
  return (
    <>
      <footer className="px-4 md:px-8">
        <section className="bg-dark-rich-100 py-8 md:py-10">
          <div className="md:flex md:justify-evenly max-w-screen-xl mx-auto">
            <div className="mb-6 md:mb-0">
              <Link to={'/'} className="flex flex-col items-center">
                <img
                  src={`${import.meta.env.BASE_URL}images/amp-logo.png`}
                  className="h-20 object-contain md:h-30 pointer-events-none md:self-center"
                  alt="FlowBite Logo"
                  loading="lazy"
                />
                <span className="hidden self-center font-extrabold uppercase whitespace-nowrap text-white md:inline-block md:text-md lg:text-lg">
                  Arte Musical Puebla
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-1 justify-items-center text-center gap-8 md:grid-cols-2 md:text-start md:gap-0 xl:gap-6">
              <div className="">
                <h4 className="mb-3 md:mb-6 text-sm font-semibold uppercase text-white">
                  Menú
                </h4>
                <ul className="font-medium space-y-3 md:space-y-4">
                  {appMenuData.map((item) => (
                    <li key={item.path}>
                      <NavLink
                        to={item.path}
                        className={({ isActive }) => `hover:underline
                    ${isActive ? 'text-primary p-0 m-0' : ' text-gray-400'}
                  `}
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h4 className="mb-3 md:mb-6 text-sm font-semibold uppercase text-white">
                  Contacto
                </h4>
                <ul className="text-gray-400 font-medium space-y-3 md:space-y-4">
                  {contactMethods.map((contact) => (
                    <li key={contact.type}>
                      <Link
                        to={contact.href}
                        className={`hover:underline flex justify-center ${
                          contact.type === 'location' ? '' : 'items-center'
                        } gap-2 md:justify-start`}
                      >
                        <contact.icon className="text-white w-5 h-5" />
                        {contact.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-900" />

        <section className="bg-dark-rich-200">
          <div className="max-w-screen-xl mx-auto py-6 text-center sm:flex sm:items-center sm:justify-between">
            <span className="text-sm sm:text-center text-gray-400">
              © 2025&nbsp;
              <Link to={'/'} className="hover:underline">
                AMP™
              </Link>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 justify-center sm:mt-0 gap-2">
              {socialMediaData.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener, noreferrer, nofollow"
                  title={`Abrir ${social.name}`}
                  aria-label="Abrir red social en otra ventana"
                  className="text-gray-500 dark:hover:text-white transition-colors duration-500"
                >
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};
