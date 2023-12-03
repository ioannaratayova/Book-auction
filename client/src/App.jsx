import { Routes, Route, useNavigate } from 'react-router-dom';
import { Home } from './components/Home/Home.jsx'
import { Nav } from './components/Nav/Nav.jsx'
import { Login } from './components/Login/Login.jsx'
import { Logout } from './components/Logout/Logout.jsx'
import { Context } from './contexts/Context.js';
import { useEffect, useState } from 'react';
import { Register } from './components/Register/Register.jsx';
import { Create } from "./components/Create/Create.jsx";
import { Catalog } from './components/Catalog/Catalog.jsx';
import { Details } from './components/Details/Details.jsx';
import { Edit } from './components/Edit/Edit.jsx';
import { MyBooks } from './components/MyBooks/MyBooks.jsx';
import { ContactUs } from './components/ContactUs/ContactUs.jsx';
import { Footer } from './components/Footer/Footer.jsx'

import * as authService from './services/authService'
import * as bookService from './services/bookService'


function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({})
    const [errorLogin, setErrorLogin] = useState('')
    const [errorRegister, setErrorRegister] = useState('')
    const [errorCreate, setErrorCreate] = useState('')
    const [errorBet, setErrorBet] = useState('')
    const [books, setBooks] = useState([])
    const [triggerGetAll, setTriggerGetAll] = useState(false)

    useEffect(() => {
        bookService.getAll()
            .then(result => {
                if (!result) {
                    setBooks([])
                }
                else {
                    const arrayOfBooks = Object.values(result);
                    setBooks(arrayOfBooks);
                }
            })
    }, [triggerGetAll]);

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

        if (!data.username || !data.email || !data.password || !data.repassword) {
            setErrorRegister('All fields are required!')
            return
        }

        const { repassword, ...registerData } = data;

        if (repassword != registerData.password) {
            setErrorRegister('Passwords don\'t match!')
            return
        }

        try {
            const result = await authService.register(registerData);
            if (result.code && result.code !== 200) {
                setErrorRegister(result.message);
                return;
            }
            const { password, ...authData } = result;
            setAuth(authData)
            navigate('/catalog')
        }
        catch (error) {
            setErrorRegister('Error')
        }
    }

    const onLogout = async () => {
        await authService.logout(auth.accessToken);
        setAuth({})
    }

    const onCreateBookSubmit = async (data) => {
        if (!data.title || !data.genre || !data.description || !data.startingPrice || !data.endDateTime || !data.image) {
            setErrorCreate('All fields are required!')
            return
        }

        if (Number(data.startingPrice) <= 0) {
            setErrorCreate('Price should be positive number!')
            return
        }

        const inputDateTime = new Date(data.endDateTime);
        const currentDateTime = new Date();
        
        if (inputDateTime.getTime() <= currentDateTime.getTime()) {
            setErrorCreate('Date and time should be later than current date and time!')
            return
        }

        const newBook = { ...data, startingPrice: Number(data.startingPrice).toFixed(2), owner: auth.email }
        const result = await bookService.create(newBook, auth.accessToken)
        setBooks(state => [...state, result])
        navigate('/catalog')
    }

    const onDeleteBook = async (book) => {
        await bookService.deleteBook(book._id, auth.accessToken);
        setBooks(state => state.filter(x => x._id !== book._id));
        navigate('/catalog');
    }

    const onBetSubmit = async (data) => {
        const oldBook = await bookService.getOne(data._id)
        if (oldBook.currentPrice) {
            if (Number(data.currentPrice) <= Number(oldBook.currentPrice)) {
                setErrorBet('New price should be higher than current price!')
                return
            }
        }
        else {
            if (Number(data.currentPrice) <= Number(oldBook.startingPrice)) {
                setErrorBet('New price should be higher than starting price!')
                return
            }
        }
        const newBook = { ...data, currentPrice: Number(data.currentPrice).toFixed(2), lastBetBy: auth.email }
        const result = await bookService.edit(newBook._id, newBook, auth.accessToken)
        setErrorBet('')
    }

    const onBookEditSubmit = async (data) => {
        if (!data.title || !data.genre || !data.description || !data.startingPrice || !data.endDateTime || !data.image) {
            setErrorCreate('All fields are required!')
            return
        }
        if (Number(data.startingPrice) <= 0) {
            setErrorCreate('Price should be positive number!')
            return
        }
        const inputDateTime = new Date(data.endDateTime)
        const currentDateTime = new Date()
        if (inputDateTime.getTime() <= currentDateTime.getTime()) {
            setErrorCreate('Date and time should be later than current date and time!')
            return
        }

        const newBook = { ...data, startingPrice: Number(data.startingPrice).toFixed(2), owner: auth.email }
        const result = await bookService.edit(data._id, newBook)
        setBooks(state => state.map(x => x._id === data._id ? result : x))
        navigate(`/catalog/${data._id}`)
    }

    return (
        <Context.Provider value={{
            auth, errorLogin, setErrorLogin, errorRegister, setErrorRegister, errorCreate, setErrorCreate, errorBet, setErrorBet,
            onLoginSubmit, onRegisterSubmit, onCreateBookSubmit, onLogout, onBetSubmit
        }}>
            <div>
                <Nav />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/catalog' element={<Catalog books={books} triggerGetAll={triggerGetAll} setTriggerGetAll={setTriggerGetAll} />} />
                    <Route path='/catalog/:bookId' element={< Details onDeleteBook={onDeleteBook} />} />
                    <Route path='/catalog/:bookId/edit' element={< Edit onBookEditSubmit={onBookEditSubmit} />} />
                    <Route path='/create' element={<Create />} />
                    <Route path='/mybooks' element={<MyBooks books={books} triggerGetAll={triggerGetAll} setTriggerGetAll={setTriggerGetAll} />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='/contact' element={<ContactUs />} />
                </Routes>
                <Footer />
            </div>
        </Context.Provider>
    )
}

export default App
