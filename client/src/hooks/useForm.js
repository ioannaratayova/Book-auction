import { useState } from 'react'


export const useForm = (initialValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialValues);
    console.log(1)
    const changeHandler = (e) => {
        console.log(2)
        setValues(state => ({...state, [e.target.name]: e.target.value}))
    }

    const onSubmit = (e) => {
        console.log(3)
        e.preventDefault()
        onSubmitHandler(values)
    }

    return {
        values,
        changeHandler,
        onSubmit
    }
}