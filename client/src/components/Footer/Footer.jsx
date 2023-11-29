import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
    const location = useLocation();


    const isDetailsPage = location.pathname.startsWith('/catalog/') ||
        location.pathname.startsWith('/mybooks') ||
        location.pathname.startsWith('/catalog');

    return (
        <div className={`footer ${isDetailsPage ? 'details-footer' : ''}`}>
            All rights reserved &copy;
        </div>
    );
};
