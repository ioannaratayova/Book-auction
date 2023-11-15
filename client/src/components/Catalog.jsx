import { useContext } from 'react'
import './Catalog.css'
import { useForm } from '../hooks/useForm.js'

import bookImage from '../static/book-photo-home.png';



export const Catalog = () => {

    return (

        <section className="catalog">
            <h1>All posts</h1>
            <div className="band">
                <div className="flip flip-vertical">
                    <div className="front">

                    </div>
                    <div className="back">

                    <img src={bookImage} alt="Product Image" className="product-image" />

                        <h1>Name</h1>

                        <p>Description: </p>

                        <a href="#" className="details">Details</a>
                    </div>


                </div>

            </div>
        </section>
    )
}