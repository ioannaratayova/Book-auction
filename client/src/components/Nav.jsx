import { NavLink } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext.js'
import { useContext } from 'react'
import './Nav.css';



export const Nav = () => {
    const { auth } = useContext(AuthContext)
    return (
        <div className="navbar">
            <ul>
                <li><NavLink style={({isActive}) => ({textDecoration: 'none', color: isActive ? '#000000' : '#FFFFFF'})} to={'/'}>Home</NavLink></li>
                <li><NavLink style={({isActive}) => ({textDecoration: 'none', color: isActive ? '#000000' : '#FFFFFF'})} to={'/catalog'}>Catalog</NavLink></li>
                <li><NavLink style={({isActive}) => ({textDecoration: 'none', color: isActive ? '#000000' : '#FFFFFF'})} to={'/myitems'}>Myitems</NavLink></li>
                <li><NavLink style={({isActive}) => ({textDecoration: 'none', color: isActive ? '#000000' : '#FFFFFF'})} to={'/login'}>Login</NavLink></li>
                <li><NavLink style={({isActive}) => ({textDecoration: 'none', color: isActive ? '#000000' : '#FFFFFF'})} to={'/register'}>Register</NavLink></li>
                <li><NavLink style={({isActive}) => ({textDecoration: 'none', color: isActive ? '#000000' : '#FFFFFF'})} to={'/logout'}>Logout</NavLink></li>
            </ul>
        </div>
    )
}