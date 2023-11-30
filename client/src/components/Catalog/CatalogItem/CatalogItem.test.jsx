import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CatalogItem } from './CatalogItem.jsx';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';


describe('Catalog Item', () => {
    test('Show props', () => {
        const title = 'Test title';
        const image = 'http://localhost/Test%20image';
        const genre = 'Test genre';
        render(
            <BrowserRouter>
                <CatalogItem title={title} image={image} genre={genre} />
            </BrowserRouter>
        );
        expect(screen.queryByText(`Title: ${title}`)).toBeInTheDocument();
        const imgElement = screen.queryByAltText('Product Image');
        expect(imgElement.src).toBe(image);
        expect(screen.queryByText(`Category: ${genre}`)).toBeInTheDocument();
    });
    test('Click on details', () => {
        const itemId = 'id';
        
        const { container } = render(
            <BrowserRouter>
                <CatalogItem _id={itemId} />
            </BrowserRouter>
        );

        const detailsLink = container.querySelector('.details');
        fireEvent.click(detailsLink);

        expect(window.location.pathname).toContain(`/catalog/${itemId}`);
    });
});
