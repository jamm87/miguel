
import React from 'react';
import { Link } from 'react-router-dom';

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#3D4A2B] sm:text-4xl">{title}</h2>
          <p className="mt-6 text-lg leading-8 text-[#707070]">
            El contenido de esta sección está actualmente en desarrollo. Vuelva pronto para descubrir más sobre nuestros servicios y soluciones.
          </p>
          <div className="mt-10">
            <Link 
              to="/" 
              className="rounded-md bg-[#5A6C3E] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#3D4A2B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5A6C3E]"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;
