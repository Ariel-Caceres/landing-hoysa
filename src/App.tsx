
import './App.css'
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Products } from './pages/Products';
import { useEffect } from 'react';

function App() {
    const location = useLocation();

    useEffect(() => {
        window.getSelection()?.removeAllRanges();
    }, [location.pathname]);

    return (
        <div className="bg-blanco xl:h-auto min-h-screen">

            <Router >
                <Routes >
                    <Route path='/' element={<Home />}>

                    </Route>
                    <Route path='/contacto' element={<Contact />}>
                    </Route>
                    <Route path='/productos' element={<Products />}>
                    </Route>

                </Routes >
            </Router >

        </div>
    )
}

export default App
