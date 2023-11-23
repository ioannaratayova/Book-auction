import { NavLink } from 'react-router-dom'
import { Context } from '../../contexts/Context.js'
import { useContext } from 'react'
import './Nav.css';


export const Nav = () => {
    const { auth } = useContext(Context)
    return (
        <header className="navbar">
            <ul>
                <li><NavLink style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#000000' : '#FFFFFF' })} to={'/'}>Home</NavLink></li>
                <li><NavLink style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#000000' : '#FFFFFF' })} to={'/catalog'}>Catalog</NavLink></li>

                {auth.accessToken && (
                    <div className='navbar-div'>
                        <li><NavLink style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#000000' : '#FFFFFF' })} to={'/create'}>Create auction</NavLink></li>
                        <li><NavLink style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#000000' : '#FFFFFF' })} to={'/mybooks'}>My books</NavLink></li>
                        <li><NavLink style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#000000' : '#FFFFFF' })} to={'/logout'}>Logout</NavLink></li>
                        <li><NavLink style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#000000' : '#FFFFFF' })} to={'/contact'}>Contact us</NavLink></li>
                        <p>{auth.email}</p>
                    </div>
                )}

                {!auth.accessToken && (
                    <div className='navbar-div'>
                        <li><NavLink style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#000000' : '#FFFFFF' })} to={'/login'}>Login</NavLink></li>
                        <li><NavLink style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#000000' : '#FFFFFF' })} to={'/register'}>Register</NavLink></li>
                        <li><NavLink style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#000000' : '#FFFFFF' })} to={'/contact'}>Contact us</NavLink></li>
                    </div>
                )}





            </ul>
        </header>
    )
}