
import React from 'react';
import { Link } from 'react-router-dom';
import CaseStudyCard from '../components/CaseStudyCard';

const caseStudies = [
  {
    client: "Cooperativa Olivarera Andaluza",
    category: "Exportación de Aceite de Oliva a Japón",
    imageUrl: "https://picsum.photos/800/600?image=102",
    challenge: "Una cooperativa de aceite de oliva virgen extra de alta calidad quería entrar en el competitivo mercado japonés, pero carecía de experiencia en sus barreras regulatorias y canales de distribución.",
    solution: "Health Link diseñó una estrategia Go-To-Market completa, que incluyó la adaptación del packaging y etiquetado a la normativa japonesa, la selección de un importador/distribuidor especializado en productos gourmet y la gestión de toda la logística y documentación de exportación.",
    results: [
      "Primer pedido de 10.000 unidades cerrado en 6 meses.",
      "Reducción del 100% en incidencias aduaneras gracias al correcto cumplimiento normativo.",
      "Presencia de la marca en 50+ puntos de venta de alta gama en Tokio y Osaka en el primer año."
    ],
    testimonial: {
      text: "Su conocimiento del mercado asiático fue clave. Nos abrieron puertas que parecían imposibles y gestionaron el proceso con una profesionalidad impecable.",
      author: "Director de Exportación",
      role: "Cooperativa Olivarera"
    },
    reverse: false,
  },
  {
    client: "Importador de Ingredientes (Corea del Sur)",
    category: "Sourcing de Omega-3 de Alta Pureza",
    imageUrl: "https://picsum.photos/800/600?image=103",
    challenge: "Un fabricante líder de suplementos en Corea del Sur necesitaba un proveedor fiable de aceite de pescado Omega-3 con un ratio EPA/DHA específico y garantía de bajos niveles de oxidación (Totox).",
    solution: "Activamos nuestra red de sourcing en Europa para identificar y auditar a tres productores que cumplían los exigentes requisitos técnicos. Negociamos un acuerdo de suministro a largo plazo, implementando un protocolo de análisis por lote en origen para garantizar la calidad antes de cada embarque.",
    results: [
      "Reducción del 15% en el coste de adquisición de la materia prima.",
      "Garantía de un valor Totox por debajo de 5, superando el estándar del mercado.",
      "Cadena de suministro estable y predecible, eliminando roturas de stock."
    ],
    testimonial: {
      text: "Health Link no es solo un trader, es nuestro equipo de control de calidad en Europa. La tranquilidad que nos dan no tiene precio.",
      author: "Jefe de Compras",
      role: "Fabricante de Nutracéuticos"
    },
    reverse: true,
  },
   {
    client: "Fabricante de Conservas (España)",
    category: "Desarrollo de Marca Blanca para China",
    imageUrl: "https://picsum.photos/800/600?image=104",
    challenge: "Una empresa conservera quería vender sus productos en China a través de un gran retailer, pero necesitaba desarrollar una marca y un packaging desde cero que fuera atractivo para el consumidor local y cumpliera al 100% con la normativa GACC.",
    solution: "Gestionamos el proyecto de 'private label' de principio a fin. Coordinamos el diseño del packaging con agencias locales, registramos la marca y nos aseguramos de que todo el etiquetado y la documentación cumplieran con la estricta regulación china, evitando retrasos y sanciones.",
    results: [
      "Lanzamiento exitoso de la marca en más de 200 supermercados.",
      "Aprobación del registro GACC en tiempo récord.",
      "Volumen de ventas recurrente que representa el 20% de su facturación anual."
    ],
    testimonial: {
      text: "Exportar a China nos parecía una montaña. Con Health Link, fue un proceso estructurado, claro y, sobre todo, exitoso.",
      author: "CEO",
      role: "Empresa Conservera"
    },
    reverse: false,
  },
];

const CasosPage: React.FC = () => {
  return (
    <div className="bg-[#FDFBF7]">
      <section className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url('https://picsum.photos/1920/1080?image=1084')` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#5A6C3E]/70 to-[#3D4A2B]/90"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Resultados, no Promesas</h1>
          <p className="text-lg md:text-xl max-w-3xl mt-4">Descubra cómo hemos ayudado a empresas como la suya a superar desafíos complejos y alcanzar sus objetivos en el comercio internacional entre España y Asia.</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 space-y-16 lg:space-y-24">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
          ))}
        </div>
      </section>

       <section className="bg-[#3D4A2B] text-white">
        <div className="container mx-auto px-4 py-16 lg:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Permítanos ser su Próximo Caso de Éxito</h2>
          <p className="max-w-3xl mx-auto text-[#A8B595] mb-8">Tanto si busca expandir sus exportaciones como si necesita un socio de compras fiable en Europa, tenemos la solución. Contáctenos para una consulta sin compromiso.</p>
          <Link to="/contacto" className="inline-block px-10 py-4 bg-[#D4AF37] text-[#3D4A2B] font-bold rounded-lg hover:bg-[#B8942A] transition-colors duration-300 text-lg">
            Inicie su Proyecto
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CasosPage;
