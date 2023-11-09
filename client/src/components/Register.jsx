import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext.js'
import { useForm } from '../hooks/useForm.js'
import { Link } from 'react-router-dom'
import './Register.css'



export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext)
    const { values, changeHandler, onSubmit } = useForm({
        username: '',
        email: '',
        password: '',
        repassword: ''
    }, onRegisterSubmit)

    return (

        <div className='container-wrapper'>
            <div className='wrapper'>
                <link
                    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
                    rel="stylesheet"
                />
                <form onSubmit={onSubmit}>
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
                        <input type="repassword" name='repassword'
                            placeholder="Repeat Password" value={values.repassword}
                            onChange={changeHandler} />
                        <i className='bx bxs-lock-alt'></i>
                    </div>

                    <button className='btn-register'>Register</button>

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