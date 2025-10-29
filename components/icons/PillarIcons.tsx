
import React from 'react';

const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        {children}
    </svg>
);

export const FocusIcon: React.FC = () => (
    <IconWrapper>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21a9 9 0 100-18 9 9 0 000 18z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v2m0 14v2M3 12h2m14 0h2M6.343 6.343l1.414 1.414m8.486 8.486l1.414 1.414M6.343 17.657l1.414-1.414m8.486-8.486l1.414-1.414"></path>
        <circle cx="12" cy="12" r="3" strokeWidth="1.5"></circle>
    </IconWrapper>
);

export const NutritionIcon: React.FC = () => (
    <IconWrapper>
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 12c-3 0-5 2-5 4s2 4 5 4 5-2 5-4-2-4-5-4z" transform="scale(0.5) translate(12, 12)"></path>
    </IconWrapper>
);

export const ComplianceIcon: React.FC = () => (
    <IconWrapper>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </IconWrapper>
);

export const OperationsIcon: React.FC = () => (
    <IconWrapper>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
    </IconWrapper>
);
