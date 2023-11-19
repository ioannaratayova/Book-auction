import './Catalog.css'
import { CatalogItem } from './CatalogItem.jsx'


export const Catalog = ({books}) => {
    
    return (
        <section className="catalog">
            <h1>All books</h1>
            {books && books.map(x => 
                <CatalogItem key={x._id} {...x} />
            )}

            {books.length === 0 && (
                <h3>No books yet!</h3>
            )}
        </section>
    )
}