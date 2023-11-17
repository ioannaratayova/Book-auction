import { useContext, useEffect, useState } from 'react';
import './Details.css';
import { AuthContext } from '../contexts/AuthContext.js';
import { useNavigate, useParams } from 'react-router-dom';
import * as bookService from '../services/bookService';


export const Details = ({ onDeleteBook }) => {
    const { auth } = useContext(AuthContext)
    const { bookId } = useParams()
    const [book, setBook] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        bookService.getOne(bookId)
            .then(result => {
                setBook(result)
            })
    }, [bookId])

    const isOwner = book._ownerId === auth._id



    return (
        <div>
            <div className="main_card">
                <div className="card_left">
                    <div className="card_datails">
                        <div className="card_character">
                            <p>Name:</p>
                            <p>Starting price:</p>
                            <p className="genre">Genre:</p>

                            <p className="remaining-time">Remaining time: <span className="timer">22:36:45</span> </p>
                            <p className='current price'>Current price:</p>
                            <p className="disc">Description:</p>
                        </div>

                        {/* If there is no registered user, do not display buttons*/}
                        <div className="social-btn">
                            {/* Only for registered user and author of the post */}
                            <button className="edit-btn">
                                Edit
                            </button>
                            <button className="del-btn" onClick={() => onDeleteBook(book)}>Delete</button>
                            {/* logged in users, who have not yet comment*/}
                            <button className="comment-up">
                                Comment
                            </button>
                            {/* logged in user who has already comment*/}

                            <div className='bid-price'>
                                <input type="text" data-price_field="yes" maxLength="12"
                                    step="0.01" max="10" className="bid-price"
                                    placeholder="Минимум 15.00&nbsp;лв."></input>
                                <button className="bid-btn">Наддавам</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="card_right">
                    <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1620324329i/50659467.jpg" alt="name" />
                </div>
            </div>


            <div className="comment-info">
                <div className="card_left">
                    <div className="card_datails">
                        <h1>Comments</h1>
                        <div className="card_comment">
                            {/* Show the rating of votes, if there are no votes yet, the number must be 0. */}
                            <p className="PV">Total rating of comments: </p>
                        </div>
                        {/* If there are already people who have cast their vote for the post, separate their emails with a comma and a space ", " */}
                        <p className="disc">People who commented for the post - </p>
                        {/* If not display: */}
                        <p className="disc">
                            People who commented for the post - No one has commented yet.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}