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
        duration: '',
        image: ''
    }, onCreateBookSubmit)

    return (

        <div className='container-wrapper'>
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
                        <input type="number" name='startingPrice'
                            placeholder="Starting Price" value={values.startingPrice}
                            onChange={changeHandler} />
                    </div>

                    <div className='input-box'>
                        <input type="duration" name='duration'
                            placeholder="Duration" value={values.duration}
                            onChange={changeHandler} />
                    </div>

                    <div className='input-box'>
                        <input type="img" name='image'
                            placeholder="Image" value={values.image}
                            onChange={changeHandler} />
                    </div>

                    <button className='btn-create'>Create</button>

                </form>
            </div>
        </div>
    )
};