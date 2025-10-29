
import React from 'react';
import { Link } from 'react-router-dom';
import SectorItem from '../components/SectorItem';

const SectoresAlimentacionPage: React.FC = () => {
  const sectors = [
    {
      imageUrl: 'https://picsum.photos/800/600?image=200',
      title: 'Aceites y Grasas Vegetales',
      reverse: false,
      description: () => (
        <>
          <p>El corazón de nuestra oferta. Nos especializamos en la selección y exportación de <strong>Aceite de Oliva Virgen Extra (AOVE)</strong> de calidad superior, procedente de las mejores denominaciones de origen de España. Trabajamos con almazaras que combinan tradición y tecnología para producir aceites con perfiles organolépticos excepcionales.</p>
          <p>Además del AOVE, gestionamos el suministro de otros aceites vegetales como el de girasol, orujo de oliva y aceites especiales para la industria alimentaria, garantizando siempre la trazabilidad y el cumplimiento de las especificaciones técnicas más exigentes (acidez, peróxidos, etc.).</p>
        </>
      ),
    },
    {
      imageUrl: 'https://picsum.photos/800/600?image=210',
      title: 'Conservas Vegetales',
      reverse: true,
      description: () => (
        <>
          <p>Seleccionamos una amplia gama de conservas vegetales que capturan la esencia de la huerta mediterránea. Nuestra oferta incluye desde conservas de tomate (entero, triturado, concentrado) y pimientos asados, hasta alcachofas y espárragos, tanto para el canal retail como para el sector HORECA e industrial.</p>
          <p>Priorizamos productores que utilizan materia prima fresca de temporada y procesos de elaboración que respetan las cualidades del producto. Ofrecemos diferentes formatos y especificaciones (calibres, tipo de envasado, etc.) adaptados a las necesidades de cada mercado de destino.</p>
        </>
      ),
    },
     {
      imageUrl: 'https://picsum.photos/800/600?image=220',
      title: 'Aceitunas de Mesa',
      reverse: false,
      description: () => (
        <>
          <p>España es líder mundial en la producción y exportación de aceitunas de mesa, y en Health Link le damos acceso a las mejores variedades. Gestionamos la compra de aceitunas Manzanilla, Gordal, Hojiblanca y otras, presentadas en una multitud de formatos: enteras, deshuesadas, rellenas (pimiento, anchoa, ajo) y en rodajas.</p>
          <p>Controlamos el proceso desde el origen, asegurando calibres uniformes, una curación óptima y un envasado que garantiza la frescura y el sabor. Adaptamos las recetas y el líquido de gobierno a las preferencias del consumidor asiático.</p>
        </>
      ),
    },
  ];

  return (
    <div className="bg-[#FDFBF7]">
      <section className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url('https://picsum.photos/1920/1080?image=365')` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#5A6C3E]/70 to-[#3D4A2B]/90"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Sector Alimentación</h1>
          <p className="text-lg md:text-xl max-w-3xl mt-4">Calidad, sabor y tradición mediterránea para los mercados más exigentes de Asia.</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
         <div className="container mx-auto px-4 text-center max-w-4xl">
             <h2 className="text-3xl md:text-4xl font-bold text-[#3D4A2B] mb-4">La Despensa de Europa, a su Alcance</h2>
            <p className="text-lg text-[#707070]">
                España es sinónimo de excelencia gastronómica y productos agroalimentarios de primer nivel. En Health Link, actuamos como su socio estratégico para identificar, auditar y suministrar una cuidada selección de alimentos que cumplen con los más altos estándares de calidad, seguridad alimentaria y sabor.
            </p>
         </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="space-y-16 lg:space-y-24">
            {sectors.map(sector => (
                <SectorItem key={sector.title} imageUrl={sector.imageUrl} title={sector.title} reverse={sector.reverse}>
                    <sector.description />
                </SectorItem>
            ))}
        </div>
      </section>
      
      <section className="bg-[#A8B595]">
        <div className="container mx-auto px-4 py-16 lg:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3D4A2B]">Solicite Nuestro Catálogo de Alimentación</h2>
          <p className="max-w-3xl mx-auto text-[#2C2C2C] mb-8">Acceda a fichas técnicas detalladas, especificaciones y precios de nuestra gama completa de productos de alimentación para importación.</p>
          {/* FIX: The Link component was incomplete, causing a syntax error. */}
          <Link to="/contacto" className="inline-block px-10 py-4 bg-[#D4AF37] text-[#3D4A2B] font-bold rounded-lg hover:bg-[#B8942A] transition-colors duration-300 text-lg">
            Solicitar Catálogo
          </Link>
        </div>
      </section>
    </div>
  );
};

// FIX: Added default export to resolve module import error in App.tsx.
export default SectoresAlimentacionPage;
