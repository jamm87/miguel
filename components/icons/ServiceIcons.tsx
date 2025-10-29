
import React from 'react';

const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5">
        {children}
    </svg>
);

export const ExportOfficeIcon: React.FC = () => (
    <IconWrapper>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6M9 11.25h6m-6 4.5h6M6.75 21v-2.25a2.25 2.25 0 012.25-2.25h6a2.25 2.25 0 012.25 2.25V21" />
    </IconWrapper>
);

export const BrokerageIcon: React.FC = () => (
    <IconWrapper>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18" />
    </IconWrapper>
);

export const GoToMarketIcon: React.FC = () => (
    <IconWrapper>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 2.25c-5.508 0-10.72 2.268-14.18 5.82A14.97 14.97 0 001.34 18M15.59 14.37h5.84m-5.84 0a14.927 14.927 0 01-1.28 2.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12m-3 0a3 3 0 116 0 3 3 0 01-6 0z" />
    </IconWrapper>
);

export const BrandDevelopmentIcon: React.FC = () => (
    <IconWrapper>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4-2.245 4.5 4.5 0 118.9-2.255a2.25 2.25 0 012.4 2.245 3 3 0 10-5.78-1.128zM15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </IconWrapper>
);

export const TradingIcon: React.FC = () => (
    <IconWrapper>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </IconWrapper>
);

export const PurchasingCenterIcon: React.FC = () => (
    <IconWrapper>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .962-.328 1.09-.832l1.9-7.125a1.5 1.5 0 00-1.09-1.928H9.375a1.5 1.5 0 00-1.433 1.433L6.38 10.625m2.125 3.625a3 3 0 11-6 0 3 3 0 016 0z" />
    </IconWrapper>
);

export const QAIcon: React.FC = () => (
    <IconWrapper>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
    </IconWrapper>
);

export const LogisticsIcon: React.FC = () => (
    <IconWrapper>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 013.375-3.375h9.75a3.375 3.375 0 013.375 3.375v1.875" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12h-9m9 0a3.375 3.375 0 00-3.375-3.375H10.5a3.375 3.375 0 00-3.375 3.375m9 0v1.875" />
    </IconWrapper>
);
