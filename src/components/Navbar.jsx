function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
            <div className="max-w-4xl mx-auto flex gap-8 p-4 justify-center">
                <a href="#home" className="text-blue-600 font-semibold hover:underline">Home</a>
                <a href="#about" className="text-blue-600 font-semibold hover:underline">About</a>
                <a href="#skills" className="text-blue-600 font-semibold hover:underline">Skills</a>
                <a href="#contact" className="text-blue-600 font-semibold hover:underline">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;
