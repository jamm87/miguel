
import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import FAQItem from '../components/FAQItem';
import { TradingIcon, PurchasingCenterIcon, QAIcon, LogisticsIcon } from '../components/icons/ServiceIcons';

const ServiciosAsiaPage: React.FC = () => {
  const services = [
    {
      icon: <TradingIcon />,
      title: 'Trading y Procurement Estratégico',
      description: 'Actuamos como su equipo de compras en España. Identificamos, negociamos y aseguramos los productos que mejor se adaptan a las especificaciones y exigencias de su mercado.',
    },
    {
      icon: <PurchasingCenterIcon />,
      title: 'Central de Compras y Consolidación',
      description: 'Optimice su logística y reduzca costes consolidando pedidos de múltiples proveedores en un solo envío. Gestionamos toda la operativa para una máxima eficiencia.',
    },
    {
      icon: <QAIcon />,
      title: 'Control de Calidad (QA/QC) en Origen',
      description: 'Garantizamos que cada lote cumple con los más altos estándares antes de salir de España. Realizamos inspecciones, análisis de laboratorio y auditorías de proveedores.',
    },
    {
      icon: <LogisticsIcon />,
      title: 'Logística y Gestión de Importación',
      description: 'Coordinamos el transporte marítimo, gestionamos la documentación de aduanas y aseguramos una entrega puntual y sin contratiempos hasta su puerto de destino.',
    },
  ];

  return (
    <div className="bg-[#FDFBF7]">
      <section className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url('https://picsum.photos/1920/1080?image=1062')` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#5A6C3E]/70 to-[#3D4A2B]/90"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Su Central de Compras de Confianza en Europa</h1>
          <p className="text-lg md:text-xl max-w-3xl mt-4">Acceda a los mejores productos de alimentación y nutracéuticos de España con un servicio de procurement integral, transparente y eficiente.</p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3D4A2B]">Optimizamos su Cadena de Suministro</h2>
            <p className="mt-4 text-[#707070]">Health Link es más que un proveedor; somos su socio estratégico en España. Le ofrecemos acceso directo a productores de primer nivel, asegurando calidad, trazabilidad y precios competitivos. Simplifique sus importaciones y gane en seguridad y eficiencia.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map(s => <ServiceCard key={s.title} {...s} />)}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#FDFBF7]">
        <div className="container mx-auto px-4">
           <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3D4A2B]">Preguntas Frecuentes para Compradores</h2>
            <p className="mt-4 text-[#707070]">Respuestas a las dudas más comunes de nuestros clientes en Asia.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <FAQItem question="¿Cómo garantizan la calidad de los productos?">
                <p>Implementamos un riguroso protocolo de QA/QC que incluye: auditoría y homologación de productores, inspecciones en fábrica, análisis físico-químicos y organolépticos por lote en laboratorios acreditados, y control documental completo. No se embarca ningún producto sin su Certificado de Análisis (CoA) y nuestra aprobación final.</p>
            </FAQItem>
            <FAQItem question="¿Cuál es la cantidad mínima de pedido (MOQ)?">
                <p>El MOQ varía según el producto. Para aceite de oliva, suele ser de un pallet. Sin embargo, nuestro servicio de consolidación permite combinar diferentes productos de varios proveedores en un mismo contenedor (LCL o FCL), lo que flexibiliza enormemente los MOQs por referencia y optimiza los costes de transporte.</p>
            </FAQItem>
            <FAQItem question="¿Qué Incoterms utilizan?">
                <p>Somos flexibles y trabajamos con los Incoterms que mejor se adapten a sus necesidades, siendo los más comunes EXW (Ex Works), FOB (Free On Board), CIF (Cost, Insurance and Freight) y DDP (Delivered Duty Paid) para ciertos mercados. Le asesoramos para elegir la opción más eficiente.</p>
            </FAQItem>
             <FAQItem question="¿Cómo gestionan la documentación para la importación en mi país?">
                <p>Nuestro equipo de operaciones es experto en la normativa de exportación e importación de los principales mercados asiáticos (China, Japón, Corea del Sur, Singapur, etc.). Preparamos y gestionamos toda la documentación necesaria: factura comercial, packing list, Bill of Lading, certificados sanitarios, certificados de origen y cualquier otro documento específico requerido por las autoridades de su país.</p>
            </FAQItem>
            <FAQItem question="¿Pueden buscar un producto específico que no está en su catálogo?">
                <p>Absolutamente. Una de nuestras fortalezas es el sourcing a medida. Gracias a nuestra extensa red de contactos en el sector agroalimentario español, podemos localizar y evaluar productores para casi cualquier producto de alimentación o ingrediente nutracéutico que necesite.</p>
            </FAQItem>
             <FAQItem question="¿Cuál es su modelo de negocio? ¿Cómo se calculan sus honorarios?">
                <p>Trabajamos con un modelo transparente. Nuestros honorarios se basan en una comisión sobre el valor de la compra (trading fee) o a través de un retainer mensual para servicios de representación y compra continuada. Todos los costes se desglosan claramente en nuestras propuestas comerciales para que no haya sorpresas.</p>
            </FAQItem>
          </div>
        </div>
      </section>

      <section className="bg-[#3D4A2B] text-white">
        <div className="container mx-auto px-4 py-16 lg:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para Importar con Confianza?</h2>
          <p className="max-w-3xl mx-auto text-[#A8B595] mb-8">Envíenos sus requerimientos de producto y nuestro equipo se pondrá en contacto para presentarle una propuesta detallada y competitiva.</p>
          <Link to="/contacto" className="inline-block px-10 py-4 bg-[#D4AF37] text-[#3D4A2B] font-bold rounded-lg hover:bg-[#B8942A] transition-colors duration-300 text-lg">
            Solicitar Cotización
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiciosAsiaPage;
