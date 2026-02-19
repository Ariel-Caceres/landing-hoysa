
import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from './pages/Home';

function App() {


    return (
        <div className="bg-blanco xl:h-auto min-h-screen">

            <Router >
                <Routes >
                    <Route path='/' element={<Home />}>

                    </Route>
                </Routes >
            </Router >

        </div>
    )
}

export default App
