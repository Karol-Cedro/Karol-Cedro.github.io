function ExperienceTimeline() {
    const experiences = [
        {
            company: "Sabre",
            position: "Software Engineer IV",
            date: "09/2024 - Present",
            location: "Remote (Kraków)",
            description: [
                "Developing a Java application based on Quarkus framework.",
                "Creating a CI/CD workflows based on GitHub Actions.",
                "Creating a GCP deployments mostly on GKE"
            ],
        },
        {
            company: "Sabre",
            position: "Software Engineer III",
            date: "02/2022 - 09/2024",
            location: "Remote (Cracow)",
            description: [
                "Helping other team implementing Apigee in our organization.",
                "Maintaining Jenkins based CI/CD pipelines for our products.",
                "Continue working on mentioned applications."
            ],
        },
        {
            company: "Sabre",
            position: "Software Engineer I",
            date: "09/2021 - 02/2022",
            location: "Remote (Cracow)",
            description: [
                "Migrating CI/CD from TeamCity to self hosted Jenkins.",
                "Creating a performance tests for our applications.",
                "Continue working on mentioned applications."
            ],
        },
        {
            company: "Sabre",
            position: "Software Engineer Intern",
            date: "07/2021 – 09/2021",
            location: "Remote (Cracow)",
            description: [
                "Maintaining and developing two Java EE application. Tech Stack: Java, Spring, Maven, Tomcat, IBM MQ"
            ],
        },
    ];

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">💻 Professional Experience</h2>

            <div className="mt-4 relative pl-8 border-l-2 border-blue-500">
                {experiences.map((exp, index) => (
                    <div key={index} className="mb-10 relative -top-[4px] ">
                        {/* Blue dot aligned with the line */}
                        <span
                            className="absolute -left-[41px] top-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow"/>

                        {/* Experience content */}
                        <h3 className="text-lg font-semibold text-gray-800">{exp.position}</h3>
                        <div className="text-sm text-gray-600">
                            {exp.company} • {exp.date}
                        </div>
                        <div className="text-sm text-gray-500">{exp.location}</div>

                        {/* Bullet point list in description */}
                        <ul className="mt-2 text-gray-700 list-disc pl-5">
                            {exp.description.map((bullet, i) => (
                                <li key={i} className="mb-1">{bullet}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExperienceTimeline;