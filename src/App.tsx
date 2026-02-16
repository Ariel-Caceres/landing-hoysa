
import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from './pages/Home';

function App() {


    return (
        <div className="bg-blanco ">

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
