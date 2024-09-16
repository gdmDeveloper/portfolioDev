import { CheckCircle2 } from 'lucide-react'

type Job = {
  years: string
  company: string
  position: string
  description: string
  current?: boolean
}

const jobs: Job[] = [
  {
    years: "2023",
    company: "TechFuture Inc.",
    position: "Senior Full Stack Developer",
    description: "Liderando el desarrollo de aplicaciones web innovadoras utilizando las últimas tecnologías. Implementación de arquitecturas escalables y optimización de rendimiento.",
    current: true
  },
  {
    years: "2021 - 2023",
    company: "WebSolutions Co.",
    position: "Full Stack Developer",
    description: "Desarrollo de soluciones web personalizadas para clientes de diversos sectores. Colaboración en equipos ágiles y mejora continua de procesos de desarrollo.",
  },
  {
    years: "2020 - 2021",
    company: "StartupX",
    position: "Junior Developer",
    description: "Contribución al desarrollo de una plataforma SaaS en crecimiento. Aprendizaje rápido y adaptación a un entorno de startup dinámico.",
  }
]

export default function WorkExperience() {
  return (
    <div className="bg-gray-900 text-emerald-400 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6">EXPERIENCIA LABORAL</h2>
      <ul className="space-y-8">
        {jobs.map((job, index) => (
          <li key={index} className="flex">
            <div className="w-1/4 pr-4 text-right">
              <span className="font-semibold">{job.years}</span>
              {job.current && (
                <div className="flex justify-end items-center mt-1">
                  <span className="text-sm mr-2">Actual</span>
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                </div>
              )}
            </div>
            <div className="w-3/4 border-l-2 border-emerald-500 pl-4">
              <h3 className="text-xl font-bold">{job.company}</h3>
              <h4 className="text-lg text-emerald-300 mb-2">{job.position}</h4>
              <p className="text-gray-300">{job.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}