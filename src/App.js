import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProjectsList from './components/ProjectsList';
import ScrollToTop from './components/ScrollToTop';

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
        </div>
    );
}

export default App;
