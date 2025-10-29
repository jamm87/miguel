
import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import FAQItem from '../components/FAQItem';
import { ExportOfficeIcon, BrokerageIcon, GoToMarketIcon, BrandDevelopmentIcon } from '../components/icons/ServiceIcons';

const ServiciosEmpresasEsPage: React.FC = () => {
  const services = [
    {
      icon: <ExportOfficeIcon />,
      title: 'Oficina de Exportación Externalizada',
      description: 'Actuamos como su departamento de exportación, gestionando todo el ciclo de venta internacional, desde la prospección de clientes hasta el cobro final.',
    },
    {
      icon: <BrokerageIcon />,
      title: 'Brokerage y Prospección de Mercados',
      description: 'Conectamos su oferta con nuestra cartera de compradores verificados en Asia, identificando oportunidades de negocio reales y de alto valor para sus productos.',
    },
    {
      icon: <GoToMarketIcon />,
      title: 'Go-To-Market & Estrategia de Canal',
      description: 'Diseñamos y ejecutamos su plan de entrada a mercados complejos como China, Japón o Corea, adaptando su producto y estrategia al canal adecuado (retail, HORECA, industrial).',
    },
    {
      icon: <BrandDevelopmentIcon />,
      title: 'Desarrollo de Marca y Producto',
      description: 'Le ayudamos a desarrollar su marca propia o de distribuidor (OEM/Private Label) para el mercado asiático, asegurando el cumplimiento normativo del etiquetado y packaging.',
    },
  ];

  return (
    <div className="bg-[#FDFBF7]">
      <section className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url('https://picsum.photos/1920/1080?image=25')` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#5A6C3E]/70 to-[#3D4A2B]/90"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Su Socio Estratégico para la Exportación a Asia</h1>
          <p className="text-lg md:text-xl max-w-3xl mt-4">Abrimos las puertas del mercado asiático para su producción de aceite, conservas e ingredientes de alta calidad.</p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3D4A2B]">Conectamos su Producto con el Mundo</h2>
            <p className="mt-4 text-[#707070]">En Health Link entendemos los desafíos de la internacionalización. Ofrecemos un servicio integral que le permite acceder a los mercados asiáticos de forma segura y rentable, minimizando riesgos y optimizando recursos. Conviértanos en el motor de su crecimiento internacional.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map(s => <ServiceCard key={s.title} {...s} />)}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#FDFBF7]">
        <div className="container mx-auto px-4">
           <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3D4A2B]">Preguntas Frecuentes para Productores</h2>
            <p className="mt-4 text-[#707070]">Resolvemos las dudas más habituales de nuestros socios productores en España.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <FAQItem question="No tengo experiencia exportando a Asia, ¿pueden ayudarme?">
                <p>Por supuesto. Nuestro servicio de "Oficina de Exportación Externalizada" está diseñado precisamente para empresas como la suya. Nos encargamos de todo: adaptación de producto, búsqueda de importadores, negociación, gestión documental, logística y seguimiento post-venta. Le guiaremos en cada paso del proceso.</p>
            </FAQItem>
            <FAQItem question="¿Qué costes tiene trabajar con Health Link?">
                <p>Nuestro modelo es flexible. Generalmente trabajamos con una comisión sobre ventas cerradas, por lo que nuestro éxito está directamente ligado al suyo. Para proyectos de consultoría o desarrollo de marca, acordamos unos honorarios fijos (retainer). Siempre presentamos una propuesta clara y sin costes ocultos.</p>
            </FAQItem>
            <FAQItem question="¿Cómo seleccionan a los compradores en Asia?">
                <p>Contamos con una red de contactos propia y realizamos un exhaustivo proceso de due diligence de cada potencial comprador. Verificamos su solvencia, su capacidad de distribución, su reputación en el mercado y su alineamiento con la calidad de su producto. Solo le presentamos oportunidades de negocio serias y contrastadas.</p>
            </FAQItem>
             <FAQItem question="Mi producto necesita certificaciones específicas para exportar. ¿Gestionan esto?">
                <p>Sí. Parte de nuestro trabajo es asegurar el cumplimiento normativo (compliance). Le asesoramos sobre las certificaciones necesarias para cada mercado (ej. ISO, BRC, IFS) y le ayudamos en el proceso de obtención o renovación, así como en el registro de su establecimiento ante las autoridades del país de destino (ej. GACC para China).</p>
            </FAQItem>
            <FAQItem question="¿Pueden ayudarme a crear una marca para el mercado asiático?">
                <p>Sí. Ofrecemos servicios de desarrollo de marca blanca o 'private label'. Esto incluye desde la consultoría en naming y diseño de packaging adaptado culturalmente, hasta la gestión de la producción con su marca y la garantía de que el etiquetado cumple al 100% con la legislación local, evitando costosos problemas en aduanas.</p>
            </FAQItem>
          </div>
        </div>
      </section>

      <section className="bg-[#3D4A2B] text-white">
        <div className="container mx-auto px-4 py-16 lg:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Hablamos de su Proyecto de Exportación?</h2>
          <p className="max-w-3xl mx-auto text-[#A8B595] mb-8">Póngase en contacto con nosotros para una evaluación gratuita de su potencial de exportación. Sin compromiso.</p>
          <Link to="/contacto" className="inline-block px-10 py-4 bg-[#D4AF37] text-[#3D4A2B] font-bold rounded-lg hover:bg-[#B8942A] transition-colors duration-300 text-lg">
            Contactar Ahora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiciosEmpresasEsPage;
