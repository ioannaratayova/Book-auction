import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext.js'
import { useForm } from '../hooks/useForm.js'
import './Create.css'



export const Create = () => {
    const { onCreateBookSubmit } = useContext(AuthContext)
    const { values, changeHandler, onSubmit } = useForm({
        name: '',
        description: '',
        image: '',
        category: '',
    }, onCreateBookSubmit)

    return (

        <div className='container-wrapper'>
            <div className='wrapper'>
                <form onSubmit={onSubmit}>
                    <h1 className="">Create auction</h1>

                    <div className='input-box'>
                        <input type="name" name='name'
                            placeholder="Name" value={values.name}
                            onChange={changeHandler} />
                    </div>

                    <div className='input-box'>
                        <input type="description" name='description'
                            placeholder="Description" value={values.description}
                            onChange={changeHandler} />
                    </div>

                    <div className='input-box'>
                        <input type="img" name='image'
                            placeholder="Image" value={values.image}
                            onChange={changeHandler} />
                    </div>

                    <div className='input-box'>
                        <input type="category" name='category'
                            placeholder="Category" value={values.category}
                            onChange={changeHandler} />
                    </div>

                    <button className='btn-create'>Create</button>

                </form>
            </div>
        </div>
    )
};