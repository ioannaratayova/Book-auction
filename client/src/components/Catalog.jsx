import { useContext } from 'react'
import './Catalog.css'
import { useForm } from '../hooks/useForm.js'



export const Catalog = () => {
    
    return (

        <section id="catalog">
            <h1>All posts</h1>
            <div className="band">
                <div className="flip flip-vertical">
                    <div className="front">

                    </div>
                    <div className="back">
                        <h1>Name</h1>
                        <h2>Species:</h2>
                        <p>Description: </p>
                        <a href="#" className="details">Details</a>
                    </div>

                    
                </div>
                
            </div>
        </section>
    )
}