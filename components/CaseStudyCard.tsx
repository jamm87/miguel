
import React from 'react';
import { CheckIcon } from './icons/CheckIcon';

interface CaseStudyCardProps {
  client: string;
  category: string;
  imageUrl: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial: {
    text: string;
    author: string;
    role: string;
  };
  reverse?: boolean;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ client, category, imageUrl, challenge, solution, results, testimonial, reverse = false }) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch bg-white rounded-lg shadow-lg overflow-hidden`}>
      <div className="md:w-5/12">
        <img className="object-cover w-full h-64 md:h-full" src={imageUrl} alt={`Caso de éxito de ${client}`} />
      </div>
      <div className="md:w-7/12 p-8 lg:p-12 flex flex-col">
        <p className="text-sm font-semibold text-[#C97B4E] uppercase tracking-wider">{category}</p>
        <h3 className="text-3xl font-bold text-[#3D4A2B] mt-1 mb-6">{client}</h3>
        
        <div className="space-y-6 flex-grow">
          <div>
            <h4 className="font-bold text-[#5A6C3E]">El Desafío</h4>
            <p className="text-[#707070] mt-2">{challenge}</p>
          </div>
          <div>
            <h4 className="font-bold text-[#5A6C3E]">La Solución de Health Link</h4>
            <p className="text-[#707070] mt-2">{solution}</p>
          </div>
          <div>
            <h4 className="font-bold text-[#5A6C3E]">Resultados Cuantificables</h4>
            <ul className="mt-2 space-y-2">
              {results.map((result, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-[#707070]">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <blockquote className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-lg italic text-[#707070]">"{testimonial.text}"</p>
          <footer className="mt-4">
            <p className="font-semibold text-[#3D4A2B]">{testimonial.author}</p>
            <p className="text-sm text-[#A8B595]">{testimonial.role}</p>
          </footer>
        </blockquote>
      </div>
    </div>
  );
};

export default CaseStudyCard;
