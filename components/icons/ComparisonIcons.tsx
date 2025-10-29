
import React from 'react';

export const CheckIcon: React.FC = () => (
  <svg className="w-8 h-8 text-green-600 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export const CrossIcon: React.FC = () => (
    <svg className="w-8 h-8 text-red-500 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);
