import React from 'react';
import { render, screen } from '@testing-library/react';
import { CatalogItem } from './CatalogItem.jsx';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';


describe('Catalog Item', () => {
    test('Show props', () => {
        const title = 'Test title';
        render(
            <BrowserRouter>
                <CatalogItem _id={'id'} title={title} />
            </BrowserRouter>
        );
        expect(screen.queryByText(`Title: ${title}`)).toBeInTheDocument();
    });
});
