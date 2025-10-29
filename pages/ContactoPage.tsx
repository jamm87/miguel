
import React, { useState, FormEvent } from 'react';
import { MailIcon, CalendarIcon, LocationIcon } from '../components/icons/ContactIcons';
import { CheckIcon } from '../components/icons/CheckIcon';

const ContactoPage: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    console.log('Form data submitted:', formData);

    // Simulating a network request
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <div className="bg-[#FDFBF7]">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#3D4A2B]">Contacte con Nosotros</h1>
          <p className="mt-4 text-lg text-[#707070]">
            Estamos listos para escuchar sobre su proyecto. Complete el formulario o utilice uno de nuestros canales de contacto directo y nuestro equipo de especialistas se pondrá en contacto con usted a la brevedad.
          </p>
        </div>

        <div className="mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="bg-white p-8 lg:p-12 rounded-lg shadow-lg border-t-4 border-[#D4AF37]">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="inline-block bg-green-100 p-4 rounded-full">
                   <CheckIcon className="w-12 h-12 text-[#5A6C3E]" />
                </div>
                <h2 className="text-2xl font-bold text-[#3D4A2B] mt-6">¡Mensaje Enviado!</h2>
                <p className="text-[#707070] mt-2">Gracias por contactar con Health Link. Hemos recibido su consulta y le responderemos en un plazo de 24-48 horas hábiles.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#3D4A2B]">Nombre completo</label>
                  <input type="text" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]"/>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#3D4A2B]">Email</label>
                  <input type="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]"/>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[#3D4A2B]">Empresa</label>
                  <input type="text" id="company" value={formData.company} onChange={handleChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]"/>
                </div>
                 <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#3D4A2B]">Asunto</label>
                  <input type="text" id="subject" value={formData.subject} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]"/>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#3D4A2B]">Mensaje</label>
                  <textarea id="message" rows={5} value={formData.message} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]"></textarea>
                </div>
                <div>
                  <button type="submit" disabled={status === 'sending'} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-[#5A6C3E] hover:bg-[#3D4A2B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5A6C3E] transition-colors disabled:bg-gray-400">
                    {status === 'sending' ? 'Enviando...' : 'Enviar Consulta'}
                  </button>
                </div>
              </form>
            )}
          </div>
          <div className="space-y-8">
            <div className="flex items-start">
                <MailIcon />
                <div>
                    <h3 className="text-xl font-semibold text-[#3D4A2B]">Email Directo</h3>
                    <p className="text-[#707070] mt-1">Para consultas generales o para adjuntar documentación, puede escribirnos directamente.</p>
                    <a href="mailto:info@health-link.dev" className="text-[#5A6C3E] font-bold hover:text-[#C97B4E] transition-colors mt-2 inline-block">info@health-link.dev</a>
                </div>
            </div>
             <div className="flex items-start">
                <CalendarIcon />
                <div>
                    <h3 className="text-xl font-semibold text-[#3D4A2B]">Agendar una Llamada</h3>
                    <p className="text-[#707070] mt-1">La mejor forma de analizar su proyecto es con una conversación. Agende una videollamada con nuestro equipo.</p>
                    <a href="#" className="text-[#5A6C3E] font-bold hover:text-[#C97B4E] transition-colors mt-2 inline-block">Seleccionar fecha y hora &rarr;</a>
                </div>
            </div>
             <div className="flex items-start">
                <LocationIcon />
                <div>
                    <h3 className="text-xl font-semibold text-[#3D4A2B]">Oficina Central</h3>
                    <p className="text-[#707070] mt-1">Nuestra sede operativa se encuentra en el corazón logístico del Mediterráneo.</p>
                    <p className="text-[#2C2C2C] font-medium mt-2">Valencia, España</p>
                </div>
            </div>
            <div className="mt-8">
              <img src="https://picsum.photos/800/500?image=996" alt="Mapa de oficinas" className="rounded-lg shadow-md w-full object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactoPage;
