
import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Products } from './pages/Products';
import { FocusReset } from './components/FocusReset';

function App() {
    return (
        <div className="bg-blanco xl:h-auto min-h-screen">
            <Router>
                <FocusReset />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contacto" element={<Contact />} />
                    <Route path="/productos" element={<Products />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App
