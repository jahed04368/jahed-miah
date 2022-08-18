import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';

const Navbar = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const className = burgerMenu
    ? 'w-full md:block md:w-auto'
    : 'hidden w-full md:block md:w-auto';

  return (
    <nav className="bg-slate-700 border-gray-200 px-2 sm:px-4 py-4 rounded dark:bg-gray-900 text-white border-b-2 border-white sticky top-0 z-50">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" className="flex items-center cursor-pointer">
          <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white cursor-pointer">
            Jahed Miah
          </span>
        </Link>
        <button
          onClick={() => setBurgerMenu(!burgerMenu)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <GiHamburgerMenu size={25} />
        </button>
        <div className={className} id="navbar-default">
          <ul
            onClick={() => setBurgerMenu(!burgerMenu)}
            className="flex flex-col p-4 px-14 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-20 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <Link href="/">
                <a
                  className="block py-2 pr-4 pl-3 text-gray-700 bg-blue-100 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="projects">
                <a className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Projects
                </a>
              </Link>
            </li>
            <li>
              <Link href="contact">
                <a className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
