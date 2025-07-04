function Contact() {
    return (
        <section id="contact" className="bg-gray-100 py-16 px-8 scroll-mt-15">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>

                <div className="bg-white rounded-lg shadow-md p-8 max-w-lg mx-auto">
                    <p className="text-center text-gray-600 mb-8">
                        Feel free to reach out through any of these channels:
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-medium text-gray-800">Email</h3>
                                <a href="mailto:karol@example.com" className="text-blue-600 hover:underline">
                                    karolcedro230@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-medium text-gray-800">LinkedIn</h3>
                                <a
                                    href="https://www.linkedin.com/in/karolcedro/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    linkedin.com/in/karolcedro
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;