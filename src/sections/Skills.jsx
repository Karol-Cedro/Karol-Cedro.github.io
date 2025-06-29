function SkillsSection() {
    const skills = [
        {name: "Java", logo: "/skills-logos/icons8-java.svg", title: "Icon by Icons8"},
        {name: "Spring", logo: "/skills-logos/icons8-spring-boot.svg", title: "Icon by Icons8"},
        {name: "Quarkus", logo: "/skills-logos/quarkus_icon.png", title: "Icon from Quarkus"},
        {name: "Docker", logo: "/skills-logos/icons8-docker.svg", title: "Icon by Icons8"},
        {name: "Kubernetes", logo: "/skills-logos/icons8-kubernetes.svg", title: "Icon by Icons8"},
        {name: "Terraform", logo: "/skills-logos/icons8-terraform.svg", title: "Icon by Icons8"},
        {name: "Ansible", logo: "/skills-logos/ansible-svgrepo-com.svg", title: "Icon from ansible.com"},
        {name: "JUnit5", logo: "/skills-logos/junit5-logo.png", title: "Icon from junit5.com"},
        {name: "Mockito", logo: "/skills-logos/mockito_logo.png", title: "Icon from mockito.com"},
        {name: "Jenkins", logo: "/skills-logos/icons8-jenkins.svg", title: "Icon by Icons8"},
        {name: "GitHub Actions", logo: "/skills-logos/githubactions-svgrepo-com.svg", title: "Icon from svgrepo.com"},
        {name: "Google Cloud", logo: "/skills-logos/icons8-google-cloud.svg", title: "Icon by Icons8"},
        {name: "PostgreSQL", logo: "/skills-logos/icons8-postgresql.svg", title: "Icon by Icons8"},
        {name: "Hibernate", logo: "/skills-logos/hibernate-svgrepo-com.svg", title: "Icon from svgrepo.com"},
        {name: "Maven", logo: "/skills-logos/maven-svg.svg", title: "Icon from svgrepo.com"},
        {name: "Linux", logo: "/skills-logos/linux-tux-svgrepo-com.svg", title: "Icon from svgrepo.com"},
        {name: "Bash", logo: "/skills-logos/bash-icon-svgrepo-com.svg", title: "Icon from svgrepo.com"},
        {name: "Git", logo: "/skills-logos/icons8-git.svg", title: "Icon by Icons8"},
        {name: "IBM MQ", logo: "/skills-logos/ibm-mq.png", title: "Icon from solance.com"},
    ];

    return (
        <section id="skills" className="bg-white text-gray-900 p-8 scroll-mt-15">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-4">Skills</h2>

                <div className="mb-6 text-center">
                    <h3 className="text-xl font-medium text-gray-500">Technologies I've Worked With</h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-2">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <img
                                src={skill.logo}
                                alt={skill.name}
                                title={skill.title}
                                className="w-12 h-12 object-contain mb-2"
                            />
                            <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <h3 className="text-2xl font-bold mb-4">My Projects</h3>
                    <p className="text-gray-600 mb-6">
                        Check out my projects and contributions on GitHub
                    </p>
                    <a
                        href="https://github.com/Karol-Cedro"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-gray-800 text-white font-medium rounded-lg transition-colors hover:bg-gray-700"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub Profile
                    </a>
                </div>

            </div>
        </section>
    );
}

export default SkillsSection;
