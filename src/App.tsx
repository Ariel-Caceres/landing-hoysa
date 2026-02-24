
import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';

function App() {


    return (
        <div className="bg-blanco xl:h-auto min-h-screen">

            <Router >
                <Routes >
                    <Route path='/' element={<Home />}>

                    </Route>
                    <Route path='/contact' element={<Contact />}>
                    </Route>

                </Routes >
            </Router >

        </div>
    )
}

export default App
