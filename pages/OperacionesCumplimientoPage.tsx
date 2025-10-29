
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon } from '../components/icons/CheckIcon';

const OperacionesCumplimientoPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('China');

  const processSteps = [
    { title: 'Análisis de Requisitos', description: 'Estudio exhaustivo de las necesidades del cliente y las normativas del mercado de destino. Definimos especificaciones técnicas y regulatorias.' },
    { title: 'Selección y Auditoría de Proveedores', description: 'Identificamos y auditamos a los productores españoles que mejor se adaptan al proyecto, verificando sus certificaciones y capacidad productiva.' },
    { title: 'Control de Calidad (QA/QC)', description: 'Realizamos inspecciones y análisis por lote en origen para garantizar que cada producto cumple con las especificaciones acordadas antes del embarque.' },
    { title: 'Gestión Documental', description: 'Preparamos y tramitamos toda la documentación de exportación e importación: facturas, certificados sanitarios, de origen, GACC, etc.' },
    { title: 'Logística y Transporte', description: 'Coordinamos la recogida, el transporte terrestre, el despacho de aduanas en origen y el flete marítimo o aéreo hasta el puerto de destino.' },
    { title: 'Despacho en Destino', description: 'Colaboramos con agentes de aduanas locales en Asia para asegurar un proceso de importación fluido y sin contratiempos.' },
    { title: 'Entrega y Seguimiento', description: 'Gestionamos la entrega final en el almacén del cliente y realizamos un seguimiento post-venta para garantizar la máxima satisfacción.' },
  ];
  
  const complianceData: { [key: string]: string[] } = {
    'China': [
      'Registro GACC del establecimiento exportador.',
      'Etiquetado conforme a normativas GB.',
      'Certificado Sanitario y de Origen específicos.',
      'Declaración de importador y exportador registrada.'
    ],
    'Corea del Sur': [
        'Registro del importador ante la MFDS.',
        'Análisis de pesticidas y metales pesados según listado local.',
        'Certificado de Libre Venta (FSC).',
        'Etiquetado en coreano adherido o impreso.'
    ],
    'Japón': [
        'Cumplimiento de la "Food Sanitation Act".',
        'Límites Máximos de Residuos (LMR) de pesticidas muy estrictos.',
        'Notificación de importación previa requerida.',
        'Análisis específicos según producto (ej. aflatoxinas).'
    ],
    'Singapur': [
        'Licencia de importación de la SFA.',
        'Cumplimiento del "Sale of Food Act".',
        'Etiquetado con información nutricional según formato local.',
        'Requisitos flexibles, pero con inspecciones aleatorias rigurosas.'
    ],
  };

  return (
    <div className="bg-[#FDFBF7]">
      <section className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url('https://picsum.photos/1920/1080?image=835')` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#5A6C3E]/70 to-[#3D4A2B]/90"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Operaciones y Cumplimiento</h1>
          <p className="text-lg md:text-xl max-w-3xl mt-4">Garantizamos una ejecución impecable y el estricto cumplimiento normativo en cada paso de la cadena de suministro.</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3D4A2B]">Nuestro Proceso Estándar de Operaciones (SOP)</h2>
            <p className="mt-4 text-[#707070]">Hemos perfeccionado un proceso en 7 etapas que asegura la eficiencia, la transparencia y la mitigación de riesgos desde el origen hasta el destino final.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#D4AF37]">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#5A6C3E] text-white font-bold text-xl">
                    {index + 1}
                  </div>
                  <h3 className="ml-4 text-xl font-bold text-[#3D4A2B]">{step.title}</h3>
                </div>
                <p className="text-[#707070]">{step.description}</p>
              </div>
            ))}
             <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#C97B4E] lg:col-span-3 flex items-center justify-center text-center">
                <p className="text-lg font-semibold text-[#3D4A2B]">Este riguroso proceso nos permite ofrecer un servicio consistente y fiable, adaptado a la complejidad de cada operación de comercio exterior.</p>
             </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3D4A2B] mb-6">Compliance por Destino: Navegando la Complejidad Regulatoria</h2>
              <p className="text-lg text-[#707070] mb-8">Cada mercado asiático tiene sus propias normativas de importación. Nuestro equipo especializado se mantiene constantemente actualizado para garantizar que sus productos cumplan con todos los requisitos locales, evitando costosos retrasos o rechazos en aduanas.</p>
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-6" aria-label="Tabs">
                  {Object.keys(complianceData).map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`${
                        activeTab === tab
                          ? 'border-[#5A6C3E] text-[#3D4A2B]'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg`}
                    >
                      {tab}
                    </button>
                  ))}
                </nav>
              </div>
              <div className="mt-8">
                <ul className="space-y-4">
                  {complianceData[activeTab].map((item, index) => (
                    <li key={index} className="flex items-start">
                       <CheckIcon className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0"/>
                       <span className="text-gray-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-[#FDFBF7] p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-[#3D4A2B] mb-4">Checklist Esencial de Exportación</h3>
                <p className="text-[#707070] mb-6">Antes de iniciar cualquier exportación, verificamos estos puntos críticos con nuestros productores asociados:</p>
                <ul className="space-y-3">
                   {['Certificaciones de calidad vigentes (ISO, BRC, IFS...)', 'Capacidad productiva para cumplir el pedido', 'Análisis de laboratorio del lote a exportar', 'Etiquetado y embalaje adaptado al destino', 'Plan de carga y logística interna definidos'].map(item => (
                     <li key={item} className="flex items-center">
                        <CheckIcon className="w-5 h-5 text-green-600 mr-2"/>
                        <span className="text-gray-800">{item}</span>
                    </li>
                   ))}
                </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OperacionesCumplimientoPage;
