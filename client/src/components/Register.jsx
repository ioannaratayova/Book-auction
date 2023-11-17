import { useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/AuthContext.js'
import { useForm } from '../hooks/useForm.js'
import { Link } from 'react-router-dom'
import './Register.css'



export const Register = () => {
    const { onRegisterSubmit, errorRegister, setErrorRegister } = useContext(AuthContext)
    const { values, changeHandler, onSubmit } = useForm({
        username: '',
        email: '',
        password: '',
        repassword: ''
    }, onRegisterSubmit)

    useEffect(() => {
        setErrorRegister('')
    }, [])

    return (

        <div className='container-wrapper'>
            <div className='wrapper'>
                <link
                    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
                    rel="stylesheet"
                />
                <form method='POST' onSubmit={onSubmit}>
                    <h1 className="">Register</h1>

                    <div className='input-box'>
                        <input type="username" name='username'
                            placeholder="Username" value={values.username}
                            onChange={changeHandler} />
                        <i className='bx bxs-user'></i>
                    </div>

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

                    <div className='input-box'>
                        <input type="password" name='repassword'
                            placeholder="Repeat Password" value={values.repassword}
                            onChange={changeHandler} />
                        <i className='bx bxs-lock-alt'></i>
                    </div>

                    <button className='btn-register'>Register</button>
                    <p style={{ color: 'red', fontSize: '16px', textAlign: 'center', paddingTop: '10px' }}>{errorRegister ? errorRegister : '\u00A0'}</p>

                    <div className='login-link'>
                        <p>Already have an account?&nbsp;
                            <Link to={'/login'}>Login</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
};