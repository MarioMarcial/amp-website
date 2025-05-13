import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { appSections } from '../../data';
import { IoMdMenu } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { Transition } from '@headlessui/react';
import ampLogo from './../../assets/images/logo.png';

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-darkrich outline-primary-300/10 outline-1 md:outline-0 md:pt-3">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex space-x-2 rtl:space-x-reverse justify-start md:space-x-0"
        >
          <img
            src={ampLogo}
            className="h-9  object-contain self-start"
            alt="Arte Musical Puebla Logo"
          />
          <span className="self-center text-xs text-gray-50 font-semibold whitespace-nowrap -skew-1 md:-skew-2">
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
            {appSections.map((navItem) => (
              <li key={navItem.name}>
                <NavLink
                  to={navItem.path}
                  className={({
                    isActive,
                  }) => ` block p-0 rounded-sm border-0 transition-colors duration-150
                    ${
                      isActive
                        ? 'text-primary p-0 m-0'
                        : ' text-graylight hover:text-primary-300 '
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
          leave="transition-opacity duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="md:hidden md:opacity-0 w-full" id="navbar-solid-bg">
            <ul className="flex flex-col font-medium mt-4 rounded-lg rtl:space-x-reverse">
              {appSections.map((navItem) => (
                <li key={navItem.name}>
                  <NavLink
                    to={navItem.path}
                    className={({ isActive }) =>
                      `block py-2 px-3 ${
                        isActive
                          ? 'rounded-sm bg-linear-to-l from-darkrich from-15%   to-primary-700 to-40%  text-primary'
                          : 'rounded-sm bg-darkrich text-graylight hover:text-primary'
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
