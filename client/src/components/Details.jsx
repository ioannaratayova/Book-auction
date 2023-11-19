import { useContext, useEffect, useState } from 'react';
import './Details.css';
import { AuthContext } from '../contexts/AuthContext.js';
import { useNavigate, useParams, Link } from 'react-router-dom';
import * as bookService from '../services/bookService';
import { useForm } from '../hooks/useForm'


export const Details = ({ onDeleteBook }) => {
    const { auth, onBetSubmit, errorBet, setErrorBet } = useContext(AuthContext);
    const { bookId } = useParams();
    const [book, setBook] = useState({});
    const navigate = useNavigate();
    const [forceUpdate, setForceUpdate] = useState(false);
    const [timeLeft, setTimeLeft] = useState();
    const [comment, setComment] = useState();


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

    const onCommentSubmit = async (e) => {
        e.preventDefault();
        const bookCommentEmail = auth.email
        const result = await bookService.addComment(bookId, { bookCommentEmail, comment})
        setBook(state => ({ ...state, comments: { ...state.comments, [result._id]: result } }))
        setComment('')
    }

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

                        {auth.accessToken && (
                            <div className="social-btn">
                                {auth.email === book.owner && !book.lastBetBy && (
                                    <div>
                                        <button className='del-btn'>
                                        <Link to={`/catalog/${book._id}/edit`} >Edit</Link>
                                        </button>
                                        <button className="del-btn" onClick={() => onDeleteBook(book)}>Delete</button>
                                    </div>
                                )}
                                {auth.email === book.owner && book.lastBetBy && (
                                    <div>Oops! You are the owner of the book, but someone has already bet on this book so 
                                        you can't edit or delete it!
                                    </div>
                                )}
                                {!auth.email === book.owner && (
                                    <div className='bid-price'>
                                        <input type="number" name='currentPrice' min="0" step="0.01" pattern="^\d+(\.\d{1,2})?$"
                                            value={values.currentPrice} onChange={changeHandler} />
                                        <button className="bid-btn" onClick={(e) => { onSubmit(e); setForceUpdate(true) }}>Bet</button>
                                    <p style={{ color: 'red', fontSize: '16px', textAlign: 'center', paddingTop: '10px' }}>{errorBet ? errorBet : '\u00A0'}</p>
                                </div>
                                )}
                            </div>
                        )}
                        
                    </div>
                </div>
                <div className="card_right">
                    <img src={book.image} alt="book_picture" />
                </div>
            </div>


            <div className="comment-info">
                <div className="card_left">
                    
                    {auth.email && (
                        <article className="create-comment">
                            <label>Add new comment:</label>
                            <form className="form" onSubmit={onCommentSubmit}>
                                <textarea name="comment" placeholder="Comment......" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                                <input className="btn submit" type="submit" value="Add Comment" />
                            </form>
                        </article>
                    )}
                    
                    <div className="details-comments">
                        <h2>Comments:</h2>
                        <ul>
                            {book.comments && Object.values(book.comments).reverse().map(x => (
                                <li key={x._id} className="comment">
                                    <p>{x.bookCommentEmail}: {x.comment}</p>
                                </li>
                            ))}
                        </ul>

                        {!book.comments && (
                            <p className="no-comment">No comments.</p>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}