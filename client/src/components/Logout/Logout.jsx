import { Navigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { Context } from '../../contexts/Context.js'


export const Logout = () => {
    const { onLogout } = useContext(Context)
    useEffect( () => {
        onLogout();
    }, [onLogout]);
    return <Navigate to='/' />
};
