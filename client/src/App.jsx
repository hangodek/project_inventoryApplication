import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Branch from './pages/Branch';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Index />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/branch' element={<Branch />}/>
            </Routes>
        </>
    )
}

export default App;