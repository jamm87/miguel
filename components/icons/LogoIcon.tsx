
import React from 'react';

export const LogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#5A6C3E" />
        <stop offset="100%" stopColor="#3D4A2B" />
      </linearGradient>
    </defs>
    <path
      d="M50,10 C70,10 80,30 80,50 C80,70 70,90 50,90 C30,90 20,70 20,50 C20,30 30,10 50,10 Z M50,15 C35,15 25,35 25,50 C25,65 35,85 50,85"
      fill="none"
      stroke="url(#logoGradient)"
      strokeWidth="8"
      strokeLinecap="round"
      transform="rotate(45 50 50)"
    />
    <circle cx="35" cy="35" r="8" fill="#D4AF37" />
  </svg>
);
