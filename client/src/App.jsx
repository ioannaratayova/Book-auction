import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home'
import { Nav } from './components/Nav'
import { AuthContext } from './contexts/AuthContext.js';
import { useState } from 'react';


function App() {
    const [auth, setAuth] = useState({})

    const onLoginSubmit = async (e) => {
        e.preventDefault()
        
    }
    return (
        <AuthContext.Provider value={{auth, onLoginSubmit}}>
            <div>
                <Nav/>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/catalog' element={<h1>catalog</h1>} />
                        <Route path='/catalog/:itemId' element={<h1>catalog s id</h1>} />
                        <Route path='/myitems' element={<h1>My items</h1>} />
                        <Route path='/login' element={<h1>Login</h1>} />
                        <Route path='/register' element={<h1>Register</h1>} />
                        <Route path='/logout' element={<h1>Logout</h1>} />
                    </Routes>   
            </div>
        </AuthContext.Provider>
    )
}

export default App
