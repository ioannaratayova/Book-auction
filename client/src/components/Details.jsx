import './Details.css';

export const Details = () => {


    return (
        <div>
            <div className="main_card">
                <div className="card_left">
                    <div className="card_datails">
                        <h1>Name:</h1>
                        <h3>Starting price:</h3>
                        <div className="card_character">
                            <p className="genre">Genre:</p>
                            
                        </div>
                        <p className="remaining-time">Remaining time: <span className="timer">22:36:45</span> </p>
                        <p className='current price'>Current price:</p>
                        <p className="disc">Description:</p>
                        {/* If there is no registered user, do not display buttons*/}
                        <div className="social-btn">
                            {/* Only for registered user and author of the post */}
                            <a href="#" className="edit-btn">
                                Edit
                            </a>
                            <a href="#" className="del-btn">
                                Delete
                            </a>
                            {/* logged in users, who have not yet comment*/}
                            <a href="#" className="comment-up">
                                Comment
                            </a>
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