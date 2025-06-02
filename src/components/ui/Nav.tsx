import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { appNavData } from './../../data';
import { IoMdMenu } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';

export const Nav = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="px-4 bg-dark-rich-100 outline-primary/10 outline-1 md:outline-0 md:px-8">
      <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto py-4 md:py-6 xl:py-7">
        <Link
          to="/"
          className="flex items-center space-x-2 rtl:space-x-reverse"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/logo.png`}
            className="h-11 object-contain pointer-events-none"
            alt="Arte Musical Puebla Logo"
          />
          <span className="hidden text-[10px] text-gray-50 uppercase font-bold whitespace-nowrap md:block">
            Arte Musical Puebla
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm focus:outline-none focus:ring-2 text-gray-400 rounded-lg hover:bg-gray-700 focus:ring-gray-600 md:hidden"
          aria-controls="navbar-solid-bg"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <IoClose className="w-10 h-10" />
          ) : (
            <IoMdMenu className="w-10 h-10" />
          )}
        </button>

        {/* Desktop */}
        <div className="w-auto hidden md:block" id="navbar-solid-bg">
          <ul className="flex flex-row mt-0 space-x-6 rtl:space-x-reverse font-medium rounded-lg border-0 bg-transparent">
            {appNavData.map((navItem) => (
              <li key={navItem.name}>
                <NavLink
                  to={navItem.url}
                  className={({
                    isActive,
                  }) => `block p-0 rounded-sm border-0 transition-colors duration-300
                    ${
                      isActive
                        ? 'p-0 m-0 text-primary'
                        : ' text-gray-300 hover:text-primary-100'
                    }
                  `}
                >
                  {navItem.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile */}
        <div
          className={`w-full transition-all duration-300 ease-in-out overflow-hidden md:hidden
            ${
              isOpen
                ? 'h-55 opacity-100 pointer-events-auto'
                : 'h-0 opacity-0 pointer-events-none'
            }
          `}
        >
          <ul className="flex flex-col mt-4 rounded-xl bg-dark-rich-100 font-medium">
            {appNavData.map((navItem) => (
              <li key={navItem.name}>
                <NavLink
                  to={navItem.url}
                  className={({ isActive }) =>
                    `block p-3 transition-colors duration-300 focus:border-none ${
                      isActive
                        ? 'text-primary rounded-xl bg-gray-dark'
                        : 'text-gray-300 hover:text-primary-100'
                    }`
                  }
                >
                  {navItem.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
