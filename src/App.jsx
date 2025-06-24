import Navbar from './components/Navbar';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
    return (
        <div className="scroll-smooth">
            <Navbar/>
            <main className="pt-20"> {/* Padding to avoid overlap with fixed navbar */}
                <Home/>
                <About/>
                <Projects/>
                <Contact/>
            </main>
        </div>
    );
}

export default App;
