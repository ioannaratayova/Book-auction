import { useContext, useEffect } from 'react'
import { Context } from '../../contexts/Context.js'
import { useForm } from '../../hooks/useForm.js'
import { Link } from 'react-router-dom'
import './Login.css'



export const Login = () => {
    const { onLoginSubmit, errorLogin, setErrorLogin } = useContext(Context)
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
    }, onLoginSubmit)

    useEffect(() => {
        setErrorLogin('')
    }, [])

    return (

        <div className='container-wrapper'>
            <div className='wrapper'>
                <link
                    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
                    rel="stylesheet"
                />
                
                <form onSubmit={onSubmit}>
                    <h1 className="">Login</h1>

                    <div className='input-box'>
                        <input type="email" name='email'
                            placeholder="Email" value={values.email}
                            onChange={changeHandler} />
                        <i className='bx bxs-envelope'></i>
                    </div>

                    <div className='input-box'>
                        <input type="password" name='password'
                            placeholder="Password" value={values.password}
                            onChange={changeHandler} />
                        <i className='bx bxs-lock-alt'></i>
                    </div>

                    <button className='btn-login'>Login</button>
                    
                    <p style={{ color: 'red', fontSize: '16px', textAlign: 'center', paddingTop: '10px' }}>{errorLogin ? errorLogin : '\u00A0'}</p>
                    
                    <div className='register-link'>
                        <p>Don't have an account?&nbsp;
                            <Link to={'/register'}>Register</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
};