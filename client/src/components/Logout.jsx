import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext.js'


export const Logout = () => {
    const { onLogout } = useContext(AuthContext)
    onLogout()
    return <Navigate to='/' />
}
