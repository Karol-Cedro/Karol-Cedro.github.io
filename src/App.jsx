import { useState } from 'react'
import './App.css'

function App() {
    const [activeTab, setActiveTab] = useState('about')

    // Portfolio data - replace with your information
    const portfolio = {
        name: "Karol Cedro",
        title: "Software Engineer",
        about: "I'm a passionate software developer with expertise in React, JavaScript, and modern web technologies.",

        skills: [
            "React", "JavaScript", "HTML/CSS", "Node.js", "TailwindCSS", "Git"
        ],

        projects: [
            {
                id: 1,
                title: "Project One",
                description: "A web application built with React and Node.js that allows users to...",
                technologies: ["React", "Node.js", "MongoDB"],
                githubUrl: "https://github.com/yourusername/project-one",
                liveUrl: "https://project-one.example.com"
            },
            {
                id: 2,
                title: "Project Two",
                description: "A responsive website built with React and TailwindCSS...",
                technologies: ["React", "TailwindCSS", "Firebase"],
                githubUrl: "https://github.com/yourusername/project-two",
                liveUrl: "https://project-two.example.com"
            },
        ],

        contact: {
            email: "your.email@example.com",
            github: "https://github.com/yourusername",
            linkedin: "https://linkedin.com/in/yourusername",
            twitter: "https://twitter.com/yourusername"
        }
    }

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-gray-800 text-white shadow-md">
                <div className="container mx-auto py-6 px-4">
                    <h1 className="text-3xl font-bold">{portfolio.name}</h1>
                    <p className="text-xl text-gray-300">{portfolio.title}</p>
                </div>
            </header>

            {/* Navigation */}
            <nav className="bg-gray-700 text-white">
                <div className="container mx-auto px-4">
                    <ul className="flex space-x-4 py-3">
                        <li>
                            <button
                                className={`py-2 px-4 rounded ${activeTab === 'about' ? 'bg-blue-600' : 'hover:bg-gray-600'}`}
                                onClick={() => setActiveTab('about')}
                            >
                                About
                            </button>
                        </li>
                        <li>
                            <button
                                className={`py-2 px-4 rounded ${activeTab === 'projects' ? 'bg-blue-600' : 'hover:bg-gray-600'}`}
                                onClick={() => setActiveTab('projects')}
                            >
                                Projects
                            </button>
                        </li>
                        <li>
                            <button
                                className={`py-2 px-4 rounded ${activeTab === 'contact' ? 'bg-blue-600' : 'hover:bg-gray-600'}`}
                                onClick={() => setActiveTab('contact')}
                            >
                                Contact
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto py-8 px-4">
                {activeTab === 'about' && (
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">About Me</h2>
                        <p className="text-lg mb-6">{portfolio.about}</p>

                        <h3 className="text-xl font-bold mb-2">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {portfolio.skills.map((skill, index) => (
                                <span key={index} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'projects' && (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold mb-4">My Projects</h2>

                        {portfolio.projects.map(project => (
                            <div key={project.id} className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold">{project.title}</h3>
                                <p className="my-2">{project.description}</p>

                                <div className="flex flex-wrap gap-2 my-2">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                                    ))}
                                </div>

                                <div className="mt-4 flex space-x-4">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                    >
                                        GitHub Repository
                                    </a>
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'contact' && (
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
                        <p className="mb-4">Feel free to reach out to me through any of these platforms:</p>

                        <ul className="space-y-2">
                            <li>
                                <strong>Email:</strong> <a href={`mailto:${portfolio.contact.email}`} className="text-blue-600 hover:underline">{portfolio.contact.email}</a>
                            </li>
                            <li>
                                <strong>GitHub:</strong> <a href={portfolio.contact.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{portfolio.contact.github}</a>
                            </li>
                            <li>
                                <strong>LinkedIn:</strong> <a href={portfolio.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{portfolio.contact.linkedin}</a>
                            </li>
                            <li>
                                <strong>Twitter:</strong> <a href={portfolio.contact.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{portfolio.contact.twitter}</a>
                            </li>
                        </ul>
                    </div>
                )}
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-6">
                <div className="container mx-auto px-4 text-center">
                    <p>© {new Date().getFullYear()} {portfolio.name}. All rights reserved.</p>
                    <p className="mt-2 text-gray-400">Built with React and TailwindCSS</p>
                </div>
            </footer>
        </div>
    )
}

export default App