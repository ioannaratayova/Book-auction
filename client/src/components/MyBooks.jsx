import './Catalog.css'
import { CatalogItem } from './CatalogItem.jsx'
import { AuthContext } from '../contexts/AuthContext.js';
import { useContext } from 'react';


export const MyBooks = ({books, setTriggerGetAll}) => {
    setTriggerGetAll(true)
    const { auth } = useContext(AuthContext);
    const isExpired = (book) => {
        const now = new Date().getTime();
        const bookTime = new Date(book.endDateTime).getTime();

        if (bookTime - now <= 0) {
            return true;
        }
        else {
            return false;
        }
    }
    const wonBooks = books.filter((book) => book.lastBetBy === auth.email && isExpired(book));
    
    return (
        <section className="catalog">
            <h1>My books</h1>
            {wonBooks && wonBooks.map(x => 
                <CatalogItem key={x._id} {...x} />
            )}

            {wonBooks.length === 0 && (
                <h3 className='no-books'>No books yet!</h3>
            )}
        </section>
    )
}