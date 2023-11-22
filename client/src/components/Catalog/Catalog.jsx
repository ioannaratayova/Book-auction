import { useEffect } from 'react'
import './Catalog.css'
import { CatalogItem } from './CatalogItem/CatalogItem.jsx'



export const Catalog = ({books, setTriggerGetAll}) => {
    useEffect(() => {
        setTriggerGetAll(true)
    }, [])
    return (
        <section className="catalog">
            <h1>All books</h1>
            {books && books.map(x => 
                <CatalogItem key={x._id} {...x} />
            )}

            {books.length === 0 && (
                <h3 className='no-books'>No books yet!</h3>
            )}
        </section>
    )
}