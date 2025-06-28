import ExperienceTimeline from "../components/ExperienceTimeline.jsx";
import EducationTimeline from "../components/EducationTimeline.jsx";

function About() {
    return (
        <section
            id="about"
            className="min-h-screen bg-gray-100 text-gray-900 p-8 scroll-mt-15">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12 relative">
                    <h2 className="text-4xl font-bold text-center">
                        About Me
                    </h2>

                    <div className="mt-10 p-6 bg-white rounded-lg shadow-md border-l-4 border-blue-500">
                        <p className="text-lg leading-relaxed text-gray-700">
                            I am a <span className="font-semibold text-blue-600">Software Engineer</span> interested mostly in Backend and DevOps-related topics.
                        </p>
                        <p className="mt-4 text-lg leading-relaxed text-gray-700">
                            Currently I work as a Software Engineer in a <span className="italic">Platform Engineering</span> team at Sabre, helping to build and improve tools and systems that support our teams.
                        </p>
                        <p className="mt-4 text-lg leading-relaxed text-gray-700">
                            In my free time I like to play with new technologies and learn new things by creating projects like this page.
                        </p>
                    </div>
                </div>

                <div className="space-y-16">
                    <ExperienceTimeline/>
                    <EducationTimeline/>
                </div>
            </div>
        </section>
    );
}

export default About;