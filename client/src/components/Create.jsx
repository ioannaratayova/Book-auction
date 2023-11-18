import { useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/AuthContext.js'
import { useForm } from '../hooks/useForm.js'
import './Create.css'



export const Create = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;


    const { onCreateBookSubmit, errorCreate, setErrorCreate } = useContext(AuthContext)
    const { values, changeHandler, onSubmit } = useForm({
        title: '',
        genre: '',
        description: '',
        startingPrice: '',
        currentPrice: '',
        endDateTime: formattedDateTime,
        image: '',
        lastBetBy: '',
        owner: ''
    }, onCreateBookSubmit)

    useEffect(() => {
        setErrorCreate('')
    }, [])

    return (

        <div className='container-wrapper'>
            <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
            <div className='wrapper'>
                <form onSubmit={onSubmit}>
                    <h1 className="">Create auction</h1>

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

                    <button className='btn-create'>Create</button>
                    <p style={{ color: 'red', fontSize: '16px', textAlign: 'center', paddingTop: '10px' }}>{errorCreate ? errorCreate : '\u00A0'}</p>

                </form>
            </div>
        </div>
    )
};