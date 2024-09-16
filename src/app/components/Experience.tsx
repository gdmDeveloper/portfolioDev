export default function ExperienceSection() {
    const experiences = [
      {
        year: "2021 - Presente",
        company: "TechCorp",
        position: "Web Developer",
        description: "Desarrollo de aplicaciones web utilizando React y Node.js. Implementación de diseños responsivos y optimización de rendimiento.",
        technologies: ["React", "Node.js", "TypeScript", "GraphQL"]
      },
      {
        year: "2019 - 2021",
        company: "InnoSoft",
        position: "Frontend Developer",
        description: "Creación de interfaces de usuario interactivas y mantenimiento de aplicaciones web existentes.",
        technologies: ["Vue.js", "JavaScript", "SASS", "Webpack"]
      },
      {
        year: "2018 - 2019",
        company: "CodeCrafters",
        position: "Junior Developer",
        description: "Colaboración en proyectos de desarrollo web y aprendizaje de mejores prácticas de programación.",
        technologies: ["HTML", "CSS", "JavaScript", "jQuery"]
      },
    ]

    return (
      <section id="experience" className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-10 text-[#569cd6] text-center">Experiencia</h2>
        <div className="space-y-12 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start">
              <div className="w-full md:w-1/4 text-[#ce9178] mb-2 md:mb-0">{exp.year}</div>
              <div className="w-full md:w-3/4">
                <h3 className="text-2xl font-semibold text-[#4ec9b0] mb-2">{exp.company}</h3>
                <p className="text-[#dcdcaa] text-lg mb-2">{exp.position}</p>
                <p className="text-[#d4d4d4] mb-3">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-[#264f78] text-[#d4d4d4] px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* VS Code-style comment */}
        <div className="mt-12 text-[#608b4e] opacity-50 max-w-4xl mx-auto">
          {`// Experiencia profesional en desarrollo web`}
        </div>
      </section>
    )
  }