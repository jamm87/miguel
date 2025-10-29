
import React from 'react';
import { Link } from 'react-router-dom';
import { FocusIcon, ComplianceIcon, NutritionIcon, OperationsIcon } from '../components/icons/PillarIcons';

interface PillarCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const PillarCard: React.FC<PillarCardProps> = ({ icon, title, description }) => (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="text-[#5A6C3E] mb-4">{icon}</div>
        <h3 className="mb-2 text-xl font-bold text-[#3D4A2B]">{title}</h3>
        <p className="text-[#707070]">{description}</p>
    </div>
);


const HomePage: React.FC = () => {

    const pillars = [
        {
            icon: <FocusIcon />,
            title: "Doble Foco: Origen y Destino",
            description: "Conectamos productores españoles con la demanda asiática, entendiendo las necesidades de ambos mercados a la perfección."
        },
        {
            icon: <NutritionIcon />,
            title: "Alimentación y Nutracéutica",
            description: "Especialistas en aceite de oliva premium, conservas y extractos de alto valor para la salud y la nutrición."
        },
        {
            icon: <ComplianceIcon />,
            title: "Cumplimiento Regulatorio",
            description: "Navegamos la complejidad de las normativas de importación en Asia para garantizar un acceso al mercado sin fricciones."
        },
        {
            icon: <OperationsIcon />,
            title: "Operativa Integral",
            description: "Gestionamos todo el proceso: desde la compra y el control de calidad hasta la logística y la entrega final."
        }
    ];

    return (
        <div className="bg-[#FDFBF7]">
            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[80vh] bg-cover bg-center" style={{ backgroundImage: `url('https://picsum.photos/1920/1080?image=1015')` }}>
                <div className="absolute inset-0 bg-gradient-to-r from-[#5A6C3E]/70 to-[#3D4A2B]/90"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4">Puente B2B entre España y Asia para Aceite de Oliva y Nutracéuticos</h1>
                    <p className="text-lg md:text-xl max-w-3xl mb-8">Facilitamos la exportación para productores españoles y optimizamos la compra para importadores asiáticos con un servicio integral y transparente.</p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <Link to="/servicios/empresas-es" className="px-8 py-3 bg-[#D4AF37] text-[#3D4A2B] font-bold rounded-lg hover:bg-[#B8942A] transition-colors duration-300">Para Productores</Link>
                        <Link to="/servicios/asia" className="px-8 py-3 bg-transparent border-2 border-[#D4AF37] text-white font-bold rounded-lg hover:bg-[#D4AF37] hover:text-[#3D4A2B] transition-colors duration-300">Para Compradores</Link>
                    </div>
                </div>
            </section>
            
            {/* Pillars Section */}
            <section className="py-16 lg:py-24 bg-[#FDFBF7]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {pillars.map(pillar => <PillarCard key={pillar.title} {...pillar} />)}
                    </div>
                </div>
            </section>

            {/* Featured Collections */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3D4A2B]">Sectores de Especialización</h2>
                    <p className="max-w-3xl mx-auto text-[#707070] mb-12">Desde el corazón del Mediterráneo hasta las mesas más exigentes, ofrecemos productos de calidad superior en dos áreas clave.</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="relative rounded-lg overflow-hidden group">
                            <img src="https://picsum.photos/800/600?image=292" alt="Aceites y conservas" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-8">
                                <h3 className="text-3xl font-bold text-white mb-4">Alimentación</h3>
                                <p className="text-white mb-6 text-center">Aceites de oliva virgen extra, conservas vegetales premium y especialidades mediterráneas.</p>
                                <Link to="/sectores/alimentacion" className="px-6 py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors duration-300">Ver más</Link>
                            </div>
                        </div>
                        <div className="relative rounded-lg overflow-hidden group">
                            <img src="https://picsum.photos/800/600?image=431" alt="Omega-3 y extractos" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                             <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-8">
                                <h3 className="text-3xl font-bold text-white mb-4">Nutracéuticos</h3>
                                <p className="text-white mb-6 text-center">Concentrados de Omega-3, extractos botánicos y ingredientes funcionales de origen natural.</p>
                                <Link to="/sectores/nutraceuticos" className="px-6 py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors duration-300">Ver más</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 lg:py-24 bg-[#FDFBF7]">
                 <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl md:text-4xl font-bold text-[#3D4A2B]">Proceso Operativo Transparente y Eficaz</h2>
                         <p className="mt-4 max-w-3xl mx-auto text-[#707070]">Garantizamos una cadena de suministro robusta y fiable en 7 pasos clave.</p>
                    </div>
                    <div className="relative">
                         <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-[#A8B595] -translate-y-1/2"></div>
                         <div className="grid grid-cols-1 md:grid-cols-7 gap-8 text-center relative">
                            {[
                                { step: 1, title: 'Análisis' },
                                { step: 2, title: 'Selección' },
                                { step: 3, title: 'QA' },
                                { step: 4, title: 'Documentación' },
                                { step: 5, title: 'Logística' },
                                { step: 6, title: 'Aduanas' },
                                { step: 7, title: 'Entrega' },
                            ].map(({step, title}) => (
                                <div key={step} className="flex flex-col items-center">
                                    <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-[#5A6C3E] text-white font-bold text-xl rounded-full border-4 border-[#FDFBF7] shadow-lg">
                                        {step}
                                    </div>
                                    <h4 className="mt-4 font-semibold text-[#3D4A2B]">{title}</h4>
                                </div>
                            ))}
                         </div>
                    </div>
                </div>
            </section>
            
            {/* CTA Final */}
            <section className="bg-white">
                <div className="container mx-auto px-4 py-16 lg:py-24 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3D4A2B]">Inicie su Expansión o Simplifique sus Compras</h2>
                    <p className="max-w-3xl mx-auto text-[#707070] mb-8">Contacte con nuestro equipo de especialistas para una propuesta personalizada y sin compromiso.</p>
                     <Link to="/contacto" className="inline-block px-10 py-4 bg-[#C97B4E] text-white font-bold rounded-lg hover:bg-[#8B6F47] transition-colors duration-300 text-lg">
                        Solicitar Propuesta
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default HomePage;
