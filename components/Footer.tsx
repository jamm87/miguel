
import React from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon } from './icons/LogoIcon';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode; }> = ({ href, children }) => (
    <a href={href} className="text-[#A8B595] hover:text-[#FDFBF7]">
        <span className="sr-only">{href}</span>
        {children}
    </a>
);


const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3D4A2B] text-[#FDFBF7]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 md:w-1/3">
            <Link to="/" className="flex items-center">
              <LogoIcon className="h-10 mr-3 text-white" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Health Link</span>
            </Link>
            <p className="mt-4 text-sm text-[#A8B595]">Conectando la excelencia de los productos españoles con los mercados de Asia.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">Navegación</h2>
              <ul className="text-[#A8B595] font-medium">
                <li className="mb-4"><Link to="/sobre-nosotros" className="hover:underline">Sobre Nosotros</Link></li>
                <li className="mb-4"><Link to="/casos" className="hover:underline">Casos de Éxito</Link></li>
                <li><Link to="/blog" className="hover:underline">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">Recursos</h2>
              <ul className="text-[#A8B595] font-medium">
                <li className="mb-4"><Link to="/faq" className="hover:underline">FAQ</Link></li>
                <li className="mb-4"><Link to="/legal" className="hover:underline">Aviso Legal</Link></li>
                <li><a href="#" className="hover:underline">Descargables</a></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">Contacto</h2>
              <ul className="text-[#A8B595] font-medium">
                <li className="mb-4"><Link to="/contacto" className="hover:underline">Contactar</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-500 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-[#A8B595] sm:text-center">© {new Date().getFullYear()} <a href="#" className="hover:underline">Health Link™</a>. Todos los derechos reservados.</span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-5">
            <SocialIcon href="#">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
            </SocialIcon>
            <SocialIcon href="#">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
            </SocialIcon>
             <SocialIcon href="#">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
