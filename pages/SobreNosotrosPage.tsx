
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon, CrossIcon } from '../components/icons/ComparisonIcons';

const SobreNosotrosPage: React.FC = () => {
  const comparisonData = [
    { feature: 'Transparencia de costes', traditional: false, healthlink: true },
    { feature: 'Control de Calidad en origen', traditional: false, healthlink: true },
    { feature: 'Acceso directo al productor', traditional: false, healthlink: true },
    { feature: 'Soporte regulatorio integral', traditional: false, healthlink: true },
    { feature: 'Comisiones ocultas', traditional: true, healthlink: false },
    { feature: 'Consolidación de pedidos', traditional: false, healthlink: true },
  ];

  return (
    <div className="bg-[#FDFBF7]">
      <section className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url('https://picsum.photos/1920/1080?image=1074')` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#5A6C3E]/70 to-[#3D4A2B]/90"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Nuestra Misión: Conectar Mercados con Integridad</h1>
          <p className="text-lg md:text-xl max-w-3xl mt-4">Somos más que un intermediario; somos su socio estratégico, comprometido con la transparencia, la calidad y la creación de valor a largo plazo.</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#3D4A2B] mb-6">La Historia de Health Link</h2>
              <div className="prose prose-lg text-[#707070] max-w-none space-y-4">
                <p>Health Link nació de una simple observación: la desconexión entre los excepcionales productores de España y la creciente y sofisticada demanda de los mercados asiáticos. Vimos a productores con productos de clase mundial luchando por navegar la complejidad de la exportación, y a compradores en Asia frustrados por la falta de transparencia y fiabilidad de los intermediarios tradicionales.</p>
                <p>Fundamos la empresa con un propósito claro: construir un puente basado en la confianza y la eficiencia. No queríamos ser un simple trader, sino un socio integral que aportara valor en cada eslabón de la cadena. Desde el principio, invertimos en un equipo con doble perspectiva, capaz de entender las sutilezas culturales y de negocio tanto en origen como en destino.</p>
                <p>Hoy, esa visión se traduce en un modelo de negocio que prioriza el control de calidad, el cumplimiento normativo y una comunicación abierta. Creemos que el mejor negocio es aquel que beneficia a todas las partes, creando relaciones sostenibles que van más allá de una simple transacción.</p>
              </div>
            </div>
            <div className="lg:w-1/2">
                <img src="https://picsum.photos/800/600?image=119" alt="Equipo de Health Link en una reunión" className="rounded-lg shadow-xl w-full h-auto object-cover"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3D4A2B]">Nuestro Modelo de Negocio: Transparencia Total</h2>
            <p className="mt-4 text-[#707070]">Hemos diseñado un modelo operativo que nos diferencia de los brokers tradicionales. Nuestro objetivo es alinear nuestros intereses con los suyos, ya sea productor o comprador.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-4 bg-[#FDFBF7] text-lg font-semibold text-[#3D4A2B] border-b-2 border-[#A8B595]">Característica</th>
                  <th className="p-4 bg-[#FDFBF7] text-lg font-semibold text-[#3D4A2B] border-b-2 border-[#A8B595] text-center">Intermediario Tradicional</th>
                  <th className="p-4 bg-gradient-to-r from-[#5A6C3E] to-[#3D4A2B] text-lg font-semibold text-white border-b-2 border-[#5A6C3E] text-center rounded-t-lg">Modelo Health Link</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="p-4 font-medium text-[#2C2C2C]">{item.feature}</td>
                    <td className="p-4 text-center">{item.traditional ? <CrossIcon /> : <CheckIcon />}</td>
                    <td className="p-4 text-center bg-green-50">{item.healthlink ? <CheckIcon /> : <CrossIcon />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
           <p className="text-center max-w-3xl mx-auto mt-8 text-sm text-[#707070]">Operamos con honorarios claros y preacordados, ya sea una comisión sobre venta/compra (trading fee) o una tarifa fija por servicios de consultoría y gestión (retainer), asegurando que usted siempre conozca la estructura de costes completa.</p>
        </div>
      </section>

      <section className="bg-[#A8B595]">
        <div className="container mx-auto px-4 py-16 lg:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3D4A2B]">Trabajemos Juntos</h2>
          <p className="max-w-3xl mx-auto text-[#2C2C2C] mb-8">Si valora la transparencia, la eficiencia y un socio que realmente entiende su negocio, contacte con nosotros. Analizaremos sus necesidades y le presentaremos una propuesta comercial a medida.</p>
          <Link to="/contacto" className="inline-block px-10 py-4 bg-[#D4AF37] text-[#3D4A2B] font-bold rounded-lg hover:bg-[#B8942A] transition-colors duration-300 text-lg">
            Solicitar Propuesta Comercial
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SobreNosotrosPage;
