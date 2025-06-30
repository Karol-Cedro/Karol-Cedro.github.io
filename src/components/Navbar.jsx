function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
            <div className="container mx-auto px-4 relative flex items-center">
                {/* Logo on the far left */}
                <div className="absolute left-4">
                    <img src="logo/code-svgrepo-com.svg" alt="Logo" className="h-12 w-auto" />
                </div>

                {/* Navigation elements centered */}
                <div className="w-full flex gap-8 p-4 justify-center">
                    <a href="#home" className="text-blue-600 font-semibold hover:underline">Home</a>
                    <a href="#about" className="text-blue-600 font-semibold hover:underline">About</a>
                    <a href="#skills" className="text-blue-600 font-semibold hover:underline">Skills</a>
                    <a href="#contact" className="text-blue-600 font-semibold hover:underline">Contact</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;