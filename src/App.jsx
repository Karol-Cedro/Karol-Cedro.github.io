import Navbar from './components/Navbar';
import Home from './sections/Home.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Contact from './sections/Contact.jsx';

function App() {
    return (
        <div className="scroll-smooth">
            <Navbar/>
            <main className="pt-20"> {/* Padding to avoid overlap with fixed navbar */}
                <Home/>
                <About/>
                <Skills/>
                <Contact/>
            </main>
        </div>
    );
}

export default App;
