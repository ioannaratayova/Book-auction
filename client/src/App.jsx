import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home'
import { Nav } from './components/Nav'
import { Login } from './components/Login'
import { AuthContext } from './contexts/AuthContext.js';
import { useState } from 'react';
import { Register } from './components/Register.jsx';
import { Create } from "./components/Create.jsx";


function App() {
    const [auth, setAuth] = useState({})

    const onLoginSubmit = async (data) => {
        console.log(4)
        console.log(data)

    }

    const onRegisterSubmit = async (data) => {
        console.log('raboti 1');
        console.log(data);
    }

    const onCreateSubmit = async (data) => {
        console.log('Create works!');
        console.log(data);
    }

    return (
        <AuthContext.Provider value={{ auth, onLoginSubmit, onRegisterSubmit, onCreateSubmit }}>
            <div>
                <Nav />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/catalog' element={<h1>catalog</h1>} />
                    <Route path='/catalog/:itemId' element={<h1>catalog s id</h1>} />
                    <Route path='/create' element={<Create />} />
                    <Route path='/myitems' element={<h1>My items</h1>} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/logout' element={<h1>Logout</h1>} />
                </Routes>
            </div>
        </AuthContext.Provider>
    )
}

export default App
