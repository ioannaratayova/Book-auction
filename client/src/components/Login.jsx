import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext.js'
import { useForm } from '../hooks/useForm.js'
import './Login.css'


export const Login = () => {
    const { onLoginSubmit } = useContext(AuthContext)
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
    }, onLoginSubmit)

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
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className='input-box'>
                        <input type="password" name='password'
                            placeholder="Password" value={values.password}
                            onChange={changeHandler} />
                        <i className='bx bxs-lock-alt'></i>
                    </div>
                    <button className='btn-login'>Login</button>

                    <div className='register-link'>
                        <p>Don't have an account?&nbsp;
                            <a href="#">
                                 Register
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
};