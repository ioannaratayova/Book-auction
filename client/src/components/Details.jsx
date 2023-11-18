import { useContext, useEffect, useState } from 'react';
import './Details.css';
import { AuthContext } from '../contexts/AuthContext.js';
import { useNavigate, useParams } from 'react-router-dom';
import * as bookService from '../services/bookService';
import { useForm } from '../hooks/useForm'


export const Details = ({ onDeleteBook }) => {
    const { auth, onBetSubmit, errorBet, setErrorBet } = useContext(AuthContext);
    const { bookId } = useParams();
    const [book, setBook] = useState({});
    const navigate = useNavigate();
    const [forceUpdate, setForceUpdate] = useState(false);
    const [timeLeft, setTimeLeft] = useState();


    const { values, changeHandler, onSubmit, changeValues } = useForm({
        _id: '',
        title: '',
        genre: '',
        description: '',
        startingPrice: '',
        currentPrice: '',
        endDateTime: '',
        image: '',
        lastBetBy: '',
        owner: ''
    }, onBetSubmit)

    useEffect(() => {
        setErrorBet('')
    }, []);

    const calculateTimeLeft = (targetDate) => {
        bookService.getOne(bookId)
            .then(result => {
                if (result.currentPrice !== book.currentPrice){
                    setBook(result)
                }
        })
        const now = new Date().getTime();
        const endDate = new Date(targetDate).getTime();
        const timeDifference = endDate - now;

        if (timeDifference <= 0) {
            return 'Auction is over.';
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return `${days}:${hours}:${minutes}:${seconds}`;
    };

    useEffect(() => {
        bookService.getOne(bookId)
            .then(result => {
                setBook(result)
                setTimeLeft(calculateTimeLeft(result.endDateTime))
                changeValues(result)
                setForceUpdate(false)
            })
    }, [bookId, forceUpdate])

    useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft(book.endDateTime));
        }, 1000);
        return () => clearInterval(timer)
      }, [book.endDateTime]);

    const isOwner = book.owner === auth.email


    return (
        <div>
            <div className="main_card">
                <div className="card_left">
                    <div className="card_datails">
                        <div className="card_character">
                            <p>Name: {book.title}</p>
                            <p>Starting price: {book.startingPrice}</p>
                            <p className="genre">Genre: {book.genre}</p>

                            <p className="remaining-time">Remaining time: <span className="timer">{timeLeft}</span> </p>
                            <p className='current price'>Current price: {book.currentPrice}</p>
                            <p className='last bet'>Last bet by: {book.lastBetBy}</p>
                            <p className="disc">Description: {book.description}</p>
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
                                {/* <input type="text" data-price_field="yes" maxLength="12"
                                    step="0.01" max="10" className="bid-price"
                                    placeholder="Minimum 15.00&nbsp;лв."></input> */}
                                <input type="number" name='currentPrice' min="0" step="0.01" pattern="^\d+(\.\d{1,2})?$"
                                    value={values.currentPrice} onChange={changeHandler} />
                                <button className="bid-btn" onClick={(e) => { onSubmit(e); setForceUpdate(true) }}>Bet</button>
                                <p style={{ color: 'red', fontSize: '16px', textAlign: 'center', paddingTop: '10px' }}>{errorBet ? errorBet : '\u00A0'}</p>

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