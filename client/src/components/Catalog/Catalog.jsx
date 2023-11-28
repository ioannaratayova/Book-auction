import { useEffect } from 'react'
import { CatalogItem } from './CatalogItem/CatalogItem.jsx'
import './Catalog.css'




export const Catalog = ({books, triggerGetAll, setTriggerGetAll}) => {
    useEffect(() => {
        setTriggerGetAll(!triggerGetAll)
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