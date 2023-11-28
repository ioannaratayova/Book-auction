import { NavLink } from 'react-router-dom'
import './Home.css'


export const Home = () => {
    return (
        <section className="slider_section">
            <div className="slider_container">

                <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="detail-box">
                                            <h1>
                                                Welcome To Our <br />
                                                Auction
                                            </h1>
                                            <p>
                                                Here you can buy your dream book.
                                            </p>
                                            <p><NavLink to={'/contact'}>Contact us</NavLink></p>
                                        </div>
                                    </div>
                                    <div className="col-md-5 ">
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};