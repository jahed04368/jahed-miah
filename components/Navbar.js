import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';

const Navbar = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const className = burgerMenu
    ? 'w-full md:block md:w-auto'
    : 'hidden w-full md:block md:w-auto';

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b-2 border-blue-500/30 backdrop-blur-lg sticky top-0 z-50 shadow-xl">
      <div className="container flex flex-wrap justify-between items-center mx-auto px-4 sm:px-6 py-5">
        <Link href="/" className="flex items-center cursor-pointer group">
          <span className="self-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 hover:from-yellow-300 hover:to-yellow-600 transition-all duration-300">
            Jahed Miah
          </span>
        </Link>
        <button
          onClick={() => setBurgerMenu(!burgerMenu)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-3 ml-3 text-sm rounded-lg md:hidden bg-slate-700/50 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <GiHamburgerMenu size={25} className="text-yellow-400" />
        </button>
        <div className={className} id="navbar-default">
          <ul
            onClick={() => setBurgerMenu(!burgerMenu)}
            className="flex flex-col p-4 px-8 mt-4 bg-slate-800/95 backdrop-blur-lg rounded-xl border border-slate-700 md:flex-row md:space-x-12 md:mt-0 md:text-base md:font-medium md:border-0 md:bg-transparent shadow-xl md:shadow-none"
          >
            <li>
              <Link
                href="/"
                className="block py-3 px-4 text-yellow-400 bg-blue-500/20 rounded-lg md:bg-transparent md:p-0 font-semibold hover:text-yellow-300 transition-all duration-300"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="projects"
                className="block py-3 px-4 text-gray-300 rounded-lg hover:bg-slate-700 md:hover:bg-transparent md:border-0 md:hover:text-yellow-400 md:p-0 font-semibold transition-all duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="contact"
                className="block py-3 px-4 text-gray-300 rounded-lg hover:bg-slate-700 md:hover:bg-transparent md:border-0 md:hover:text-yellow-400 md:p-0 font-semibold transition-all duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
