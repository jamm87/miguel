
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PlaceholderPage from './pages/PlaceholderPage';
import ServiciosEmpresasEsPage from './pages/ServiciosEmpresasEsPage';
import ServiciosAsiaPage from './pages/ServiciosAsiaPage';
import SectoresAlimentacionPage from './pages/SectoresAlimentacionPage';
import SectoresNutraceuticosPage from './pages/SectoresNutraceuticosPage';
import OperacionesCumplimientoPage from './pages/OperacionesCumplimientoPage';
import CasosPage from './pages/CasosPage';
import SobreNosotrosPage from './pages/SobreNosotrosPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-[#2C2C2C] bg-[#FDFBF7]">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicios/empresas-es" element={<ServiciosEmpresasEsPage />} />
            <Route path="/servicios/asia" element={<ServiciosAsiaPage />} />
            <Route path="/sectores/alimentacion" element={<SectoresAlimentacionPage />} />
            <Route path="/sectores/nutraceuticos" element={<SectoresNutraceuticosPage />} />
            <Route path="/operaciones-cumplimiento" element={<OperacionesCumplimientoPage />} />
            <Route path="/casos" element={<CasosPage />} />
            <Route path="/sobre-nosotros" element={<SobreNosotrosPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contacto" element={<PlaceholderPage title="Contacto" />} />
            <Route path="/faq" element={<PlaceholderPage title="Preguntas Frecuentes (FAQ)" />} />
            <Route path="/legal" element={<PlaceholderPage title="Aviso Legal" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;