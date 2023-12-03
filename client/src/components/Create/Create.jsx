import { useContext, useEffect } from 'react'
import { Context } from '../../contexts/Context.js'
import { useForm } from '../../hooks/useForm.js'
import { formattedDateTime } from '../../utils/formattedDateTime.js'
import './Create.css'
import React from 'react'


export const Create = () => {

    const { onCreateBookSubmit, errorCreate, setErrorCreate } = useContext(Context)
    const { values, changeHandler, onSubmit } = useForm({
        title: '',
        genre: '',
        description: '',
        startingPrice: '',
        currentPrice: '',
        endDateTime: formattedDateTime(),
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
                        <input type="number" name='startingPrice' min="0" step="0.01" 
                            placeholder="Starting Price" value={values.startingPrice}
                            onChange={changeHandler} />
                    </div>

                    <div className='input-box'>
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
                    <p style={{ color: 'red', fontSize: '16px', textAlign: 'center', paddingTop: '10px' }}>{errorCreate ? errorCreate : '\u00A0'}</p>

                </form>
            </div>
        </div>
    )
};