function EducationTimeline() {
    const education = [
        {
            institution: "Warsaw University of Technology",
            degree: "Master of Science in Computer Science",
            date: "10/2022 - 06/2024",
            location: "Warsaw, Poland",
        },
        {
            institution: "AGH University of Science and Technology",
            degree: "Bachelor of Science in Computer Science",
            date: "10/2018 - 03/2022",
            location: "Cracow, Poland",
        },
    ];

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🎓 Education</h2>

            <div className="mt-4 relative pl-8 border-l-2 border-blue-500">
                {education.map((edu, index) => (
                    <div key={index} className="mb-10 relative -top-[4px] ">
                        {/* Blue dot aligned with the line */}
                        <span
                            className="absolute -left-[41px] top-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow"/>

                        {/* Education content */}
                        <h3 className="text-lg font-semibold text-gray-800">{edu.degree}</h3>
                        <div className="text-sm text-gray-600">
                            {edu.institution} • {edu.date}
                        </div>
                        <div className="text-sm text-gray-500">{edu.location}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EducationTimeline;