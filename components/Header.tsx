
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LogoIcon } from './icons/LogoIcon';

const NavItem: React.FC<{ to: string; children: React.ReactNode; }> = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#5A6C3E] md:p-0 ${isActive ? 'text-[#5A6C3E] font-bold' : ''}`
    }
  >
    {children}
  </NavLink>
);

const DropdownItem: React.FC<{ title: string; children: React.ReactNode; }> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="flex items-center justify-between w-full py-2 px-3 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#5A6C3E] md:p-0 md:w-auto">
        {title}
        <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
          <ul className="py-2 text-sm text-gray-700">
            {children}
          </ul>
        </div>
      )}
    </div>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#FDFBF7]/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <NavLink to="/" className="flex items-center">
            <LogoIcon className="h-10 w-auto mr-3" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-[#3D4A2B]">Health Link</span>
          </NavLink>
          <div className="flex items-center md:order-2">
            <NavLink to="/contacto" className="text-white bg-[#5A6C3E] hover:bg-[#3D4A2B] focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 focus:outline-none transition-colors duration-300">
              Contacto
            </NavLink>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
          <div className={`${isMenuOpen ? 'block' : 'hidden'} justify-between items-center w-full md:flex md:w-auto md:order-1`} id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
              <li><NavItem to="/">Inicio</NavItem></li>
              <li>
                <DropdownItem title="Servicios">
                  <li><NavLink to="/servicios/empresas-es" className="block px-4 py-2 hover:bg-gray-100">Empresas Españolas</NavLink></li>
                  <li><NavLink to="/servicios/asia" className="block px-4 py-2 hover:bg-gray-100">Compradores Asia</NavLink></li>
                </DropdownItem>
              </li>
              <li>
                 <DropdownItem title="Sectores">
                  <li><NavLink to="/sectores/alimentacion" className="block px-4 py-2 hover:bg-gray-100">Alimentación</NavLink></li>
                  <li><NavLink to="/sectores/nutraceuticos" className="block px-4 py-2 hover:bg-gray-100">Nutracéuticos</NavLink></li>
                </DropdownItem>
              </li>
              <li><NavItem to="/operaciones-cumplimiento">Operaciones</NavItem></li>
              <li><NavItem to="/casos">Casos</NavItem></li>
              <li><NavItem to="/sobre-nosotros">Sobre Nosotros</NavItem></li>
              <li><NavItem to="/blog">Blog</NavItem></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
