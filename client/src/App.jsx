import { Routes, Route, useNavigate } from 'react-router-dom';
import { Home } from './components/Home'
import { Nav } from './components/Nav'
import { Login } from './components/Login'
import { Logout } from './components/Logout'
import { AuthContext } from './contexts/AuthContext.js';
import { useState } from 'react';
import { Register } from './components/Register.jsx';
import { Create } from "./components/Create.jsx";
import { Catalog } from './components/Catalog.jsx';
import * as authService from './services/authService'
import * as bookService from './services/bookService'


function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({})
    const [errorLogin, setErrorLogin] = useState('')
    const [errorRegister, setErrorRegister] = useState('')
    const [books, setBooks] = useState([])

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data)
            if (result.accessToken) {
                setAuth(result)
                navigate('/catalog')
            }
            else {
                throw new Error('Invalid login')
            }
        }
        catch (error) {
            setErrorLogin('Invalid email or password')
        }

    }

    const onRegisterSubmit = async (data) => {
        const { repassword, ...registerData } = data
        // validate data ??
        if (repassword != registerData.password) {
            setErrorRegister('Passwords don\'t match!')
            return
        }

        try {
            const result = await authService.register(registerData);
            const { password, ...authData } = result
            setAuth(authData)
            navigate('/catalog')
        }
        catch (error) {
            setErrorRegister('Error')
        }
    }

    const onLogout = async () => {
        // to do 
        // await authService.logout();
        setAuth({})
    }

    const onCreateBookSubmit = async (data) => {
        const newBook = await bookService.create(data)
        setBooks(state => [...state, newBook])
        navigate('/catalog')
    }

    return (
        <AuthContext.Provider value={{ auth, errorLogin, errorRegister, onLoginSubmit, onRegisterSubmit, onCreateBookSubmit, onLogout }}>
            <div>
                <Nav />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/catalog' element={<h1><Catalog /></h1>} />
                    <Route path='/catalog/:itemId' element={<h1>catalog s id</h1>} />
                    <Route path='/create' element={<Create />} />
                    <Route path='/myitems' element={<h1>My items</h1>} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/logout' element={<Logout />} />
                </Routes>
            </div>
        </AuthContext.Provider>
    )
}

export default App
