
import React from 'react';

interface SectorItemProps {
  imageUrl: string;
  title: string;
  children: React.ReactNode;
  reverse?: boolean;
}

const SectorItem: React.FC<SectorItemProps> = ({ imageUrl, title, children, reverse = false }) => {
  return (
    <div className="container mx-auto px-4">
        <div className={`flex flex-col md:flex-row items-center gap-8 lg:gap-16 ${reverse ? 'md:flex-row-reverse' : ''}`}>
          <div className="md:w-1/2">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg">
                <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold text-[#3D4A2B] mb-4">{title}</h3>
            <div className="prose prose-lg text-[#707070] max-w-none">
              {children}
            </div>
          </div>
        </div>
    </div>
  );
};

export default SectorItem;