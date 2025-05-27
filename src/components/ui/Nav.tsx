import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { appMenuData } from './../../data';
import { IoMdMenu } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { Transition } from '@headlessui/react';

export const Nav = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="bg-dark-rich-100 outline-primary/10 outline-1 md:outline-0 px-4 md:px-8">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between py-4 md:py-6">
        <Link
          to="/"
          className="flex items-center space-x-2 rtl:space-x-reverse"
        >
          <img
            src="/images/amp-logo.png"
            className="h-8 object-contain pointer-events-none"
            alt="Arte Musical Puebla Logo"
          />
          <span className="text-[12px] text-gray-50 uppercase font-bold whitespace-nowrap md:block">
            Arte Musical Puebla
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
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
        <div className="hidden md:block w-auto" id="navbar-solid-bg">
          <ul className="flex flex-row font-medium mt-0 rounded-lg space-x-6 rtl:space-x-reverse border-0 bg-transparent">
            {appMenuData.map((navItem) => (
              <li key={navItem.name}>
                <NavLink
                  to={navItem.path}
                  className={({
                    isActive,
                  }) => ` block p-0 rounded-sm border-0 transition-colors duration-150
                    ${
                      isActive
                        ? 'text-primary p-0 m-0'
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
        <Transition
          show={isOpen}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150 ease-out"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="md:hidden md:opacity-0 w-full" id="navbar-solid-bg">
            <ul className="flex flex-col font-medium mt-4 rounded-xl rtl:space-x-reverse">
              {appMenuData.map((navItem) => (
                <li key={navItem.name}>
                  <NavLink
                    to={navItem.path}
                    className={({ isActive }) =>
                      `block py-2 px-3 ${
                        isActive
                          ? 'rounded-sm bg-linear-to-l from-dark-rich from-15%   to-primary-500 to-40%  text-primary'
                          : 'rounded-sm bg-dark-rich text-gray-300 hover:text-primary'
                      }`
                    }
                  >
                    {navItem.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </Transition>
      </div>
    </nav>
  );
};
