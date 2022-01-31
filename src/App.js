import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProjectsList from './components/ProjectsList';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Router>
                <ScrollToTop>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<ProjectsList />} />
                    </Routes>
                </ScrollToTop>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
