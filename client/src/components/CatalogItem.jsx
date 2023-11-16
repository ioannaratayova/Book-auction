import { Link } from 'react-router-dom'


export const CatalogItem = ({ _id, title, image, category }) => {
    return (
        <div className="flip flip-vertical">
            <div className="front">
            </div>
            <div className="back">
                <img src={image} alt="Product Image" className="product-image" />
                <h1>{title}</h1>
                <p>Category: {category}</p>
                <Link to={`/catalog/${_id}`} className='details'>Details</Link>
            </div>
        </div>
    )
}