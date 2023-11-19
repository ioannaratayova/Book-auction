import { Link } from 'react-router-dom'


export const CatalogItem = ({ _id, title, image, genre }) => {
    return (
        <div className="flip flip-vertical">
            <div className="front">
            </div>
            <div className="back">
                <img src={image} alt="Product Image" className="product-image" />
                <h1>Title: {title}</h1>
                <p>Category: {genre}</p>
                <Link to={`/catalog/${_id}`} className='details'>Details</Link>
            </div>
        </div>
    )
}