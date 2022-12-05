import './App.css';
import React from 'react'
import Home from './component/Home';
import Main from './component/Main';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Cart from './component/Cart';

function App() {

    return (
        <>
            <Router>
                <Home />
                <Routes>
                    <Route exact path='/' element={<Main />} />
                    
                    <Route exact path='/cart' element={<Cart />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
