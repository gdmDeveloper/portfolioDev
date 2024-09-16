import React from 'react'

type Technology = {
  name: string
  logo: string
}

const technologies: Technology[] = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "Angular",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  }
]

export default function Technologies() {
  return (
    <>
      <div className="h-80"></div>
      <div className="bg-gray-900 text-emerald-400 p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-center uppercase tracking-tight">TECNOLOGÍAS</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-gray-800 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50">
              <img
                src={tech.logo}
                alt={`${tech.name} logo`}
                className="w-20 h-20 mb-4 object-contain"
              />
              <span className="text-lg font-semibold text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}