import { useParams } from 'react-router-dom'
import './Edit.css'
import { useForm } from '../../hooks/useForm.js'
import { useEffect, useContext } from 'react';
import { Context } from '../../contexts/Context.js';
import * as bookService from '../../services/bookService.js'
import { formattedDateTime } from '../../utils/formattedDateTime.js';


export const Edit = ({onBookEditSubmit}) => {

    const {errorCreate, setErrorCreate} = useContext(Context)
    const {bookId} = useParams()
    const { values, changeHandler, onSubmit, changeValues } = useForm({
        title: '',
        genre: '',
        description: '',
        startingPrice: '',
        currentPrice: '',
        endDateTime: formattedDateTime(),
        image: '',
        lastBetBy: '',
        owner: ''
    }, onBookEditSubmit)

    useEffect(() => {
        setErrorCreate('')
    }, [])

    useEffect(() => {
        bookService.getOne(bookId)
            .then(result => {
                changeValues(result)
            })
    }, [bookId])

    return (
        <div className='container-wrapper'>
            <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
            <div className='wrapper'>
                <form onSubmit={onSubmit}>
                    <h1 className="">Edit auction</h1>

                    <div className='input-box'>
                        <label>Name</label>
                        <input type="name" name='title'
                            placeholder="Name" value={values.title}
                            onChange={changeHandler} />
                    </div>

                    <div className='input-box'>
                        <label>Genre</label>
                        <input type="genre" name='genre'
                            placeholder="Genre" value={values.genre}
                            onChange={changeHandler} />
                    </div>

                    <div className='input-box'>
                        <label>Description</label>
                        <input type="description" name='description'
                            placeholder="Description" value={values.description}
                            onChange={changeHandler} />
                    </div>

                    <div className='input-box'>
                        <label>Starting price</label>
                        <input type="number" name='startingPrice' min="0" step="0.01" pattern="^\d+(\.\d{1,2})?$"
                            placeholder="Starting Price" value={values.startingPrice}
                            onChange={changeHandler} />
                    </div>

                    <div className='input-box'>
                        <label>Duration</label>
                        <input type="datetime-local" name='endDateTime' id="datetime"
                            placeholder="Duration" value={values.endDateTime}
                            onChange={changeHandler} />
                    </div>

                    <div className='input-box'>
                        <label>Image</label>
                        <input type="img" name='image'
                            placeholder="Image URL" value={values.image}
                            onChange={changeHandler} />
                    </div>

                    <button className='btn-edit'>Edit</button>
                    <p style={{ color: 'red', fontSize: '16px', textAlign: 'center', paddingTop: '10px' }}>{errorCreate ? errorCreate : '\u00A0'}</p>

                </form>
            </div>
        </div>
    )
}