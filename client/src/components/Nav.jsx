import { NavLink } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext.js'
import { useContext } from 'react'
import './Nav.css';



export const Nav = () => {
    const { auth, onLoginSubmit } = useContext(AuthContext)
    return (
        <div className="navbar">
            <ul>
                <li><NavLink style={({isActive}) => ({textDecoration: 'none', color: isActive ? '#2C9E6C' : '#03060E'})} to={'/'}>Home</NavLink></li>
                <li><NavLink style={({isActive}) => ({textDecoration: 'none', color: isActive ? '#2C9E6C' : '#03060E'})} to={'/catalog'}>Catalog</NavLink></li>
                <li><NavLink style={({isActive}) => ({textDecoration: 'none', color: isActive ? '#2C9E6C' : '#03060E'})} to={'/myitems'}>Myitems</NavLink></li>
                <li><NavLink style={({isActive}) => ({textDecoration: 'none', color: isActive ? '#2C9E6C' : '#03060E'})} to={'/login'}>Login</NavLink></li>
                <li><NavLink style={({isActive}) => ({textDecoration: 'none', color: isActive ? '#2C9E6C' : '#03060E'})} to={'/register'}>Register</NavLink></li>
                <li><NavLink style={({isActive}) => ({textDecoration: 'none', color: isActive ? '#2C9E6C' : '#03060E'})} to={'/logout'}>Logout</NavLink></li>
            </ul>
        </div>
    )
}