import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext.js'
import { useForm } from '../hooks/useForm.js'
import './Create.css'



export const Create = () => {
    const { onCreateBookSubmit } = useContext(AuthContext)
    const { values, changeHandler, onSubmit } = useForm({
        title: '',
        genre: '',
        description: '',
        startingPrice: '',
        currentPrice: '',
        endDateTime: 'YYYY-MM-DDTHH:mm',
        image: ''
    }, onCreateBookSubmit)

    return (

        <div className='container-wrapper'>
            <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
            <div className='wrapper'>
                <form onSubmit={onSubmit}>
                    <h1 className="">Create auction</h1>

                    <div className='input-box'>
                        <input type="name" name='title'
                            placeholder="Name" value={values.title}
                            onChange={changeHandler} />
                    </div>

                    <div className='input-box'>
                        <input type="genre" name='genre'
                            placeholder="Genre" value={values.genre}
                            onChange={changeHandler} />
                    </div>

                    <div className='input-box'>
                        <input type="description" name='description'
                            placeholder="Description" value={values.description}
                            onChange={changeHandler} />
                    </div>

                    <div className='input-box'>
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
                        <input type="img" name='image'
                            placeholder="Image URL" value={values.image}
                            onChange={changeHandler} />
                    </div>

                    <button className='btn-create'>Create</button>

                </form>
            </div>
        </div>
    )
};