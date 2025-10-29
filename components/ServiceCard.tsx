
import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col p-8 bg-[#FDFBF7] rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-200 h-full">
      <div className="flex-shrink-0 text-[#C97B4E] mb-4">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-bold text-[#3D4A2B]">{title}</h3>
      <p className="text-[#707070] flex-grow">{description}</p>
    </div>
  );
};

export default ServiceCard;
