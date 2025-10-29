
import React from 'react';
import { Link } from 'react-router-dom';
import SectorItem from '../components/SectorItem';

const SectoresNutraceuticosPage: React.FC = () => {
  const sectors = [
    {
      imageUrl: 'https://picsum.photos/800/600?image=550',
      title: 'Concentrados de Omega-3',
      reverse: false,
      description: () => (
        <>
          <p>Ofrecemos aceites de pescado de alta pureza, ricos en <strong>EPA (ácido eicosapentaenoico) y DHA (ácido docosahexaenoico)</strong>. Nuestros productos se obtienen de fuentes sostenibles y se someten a procesos de destilación molecular para garantizar niveles mínimos de contaminantes y una alta concentración de ácidos grasos esenciales.</p>
          <p>Disponemos de diferentes ratios de EPA/DHA y formas (triglicéridos, etil ésteres) para adaptarnos a las necesidades de la industria de suplementos dietéticos y alimentos funcionales. Cada lote se acompaña de un Certificado de Análisis (CoA) completo que detalla el perfil de ácidos grasos, los niveles de peróxidos, totox y metales pesados.</p>
        </>
      ),
    },
    {
      imageUrl: 'https://picsum.photos/800/600?image=560',
      title: 'Extractos Botánicos',
      reverse: true,
      description: () => (
        <>
          <p>Extraemos lo mejor de la flora mediterránea. Nuestra gama de extractos botánicos incluye extractos de hoja de olivo (ricos en oleuropeína), extractos de semilla de uva (proantocianidinas) y extractos de romero (ácido carnósico), entre otros. Estos ingredientes son altamente valorados por sus propiedades antioxidantes y funcionales.</p>
          <p>Utilizamos métodos de extracción avanzados (como la extracción con fluidos supercríticos) para preservar la integridad de los compuestos activos. Proveemos extractos estandarizados en polvo y líquidos, ideales para su incorporación en cápsulas, comprimidos, bebidas funcionales y cosméticos.</p>
        </>
      ),
    },
     {
      imageUrl: 'https://picsum.photos/800/600?image=570',
      title: 'Fibras Funcionales',
      reverse: false,
      description: () => (
        <>
          <p>Respondemos a la creciente demanda de ingredientes para la salud digestiva con una selección de fibras funcionales de origen natural. Nuestra cartera incluye fibra de cítricos, inulina de achicoria y otras fibras prebióticas que han demostrado científicamente sus beneficios para la microbiota intestinal.</p>
          <p>Estas fibras son ingredientes versátiles que mejoran el perfil nutricional de los productos finales, permitiendo alegaciones de "alto en fibra" y contribuyendo a la textura y estabilidad de formulaciones en panadería, lácteos y bebidas.</p>
        </>
      ),
    },
  ];

  return (
    <div className="bg-[#FDFBF7]">
      <section className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url('https://picsum.photos/1920/1080?image=431')` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#5A6C3E]/70 to-[#3D4A2B]/90"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Sector Nutracéuticos</h1>
          <p className="text-lg md:text-xl max-w-3xl mt-4">Ingredientes funcionales de origen europeo para la industria de la salud y el bienestar.</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
         <div className="container mx-auto px-4 text-center max-w-4xl">
             <h2 className="text-3xl md:text-4xl font-bold text-[#3D4A2B] mb-4">Ciencia y Naturaleza, unidas.</h2>
            <p className="text-lg text-[#707070]">
                El sector nutracéutico exige rigor científico, calidad y trazabilidad. En Health Link, nos especializamos en el sourcing y suministro de ingredientes activos de alta pureza, respaldados por documentación técnica completa y estudios que avalan su eficacia. Somos su puente hacia los mejores ingredientes funcionales de España y Europa.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3D4A2B]">Solicite Nuestro Catálogo Nutracéutico</h2>
          <p className="max-w-3xl mx-auto text-[#2C2C2C] mb-8">Obtenga información detallada sobre nuestros concentrados de Omega-3, extractos botánicos y fibras, incluyendo especificaciones y MOQs.</p>
          <Link to="/contacto" className="inline-block px-10 py-4 bg-[#D4AF37] text-[#3D4A2B] font-bold rounded-lg hover:bg-[#B8942A] transition-colors duration-300 text-lg">
            Solicitar Catálogo
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SectoresNutraceuticosPage;
