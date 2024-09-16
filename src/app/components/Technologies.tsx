export default function Technologies() {
  return (
    <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-blue-400">Tecnologías</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TechnologyCard
          icon="https://cdn-icons-png.flaticon.com/512/1183/1183672.png"
          title="Frontend"
          technologies={["React", "Next.js", "Tailwind CSS", "TypeScript"]}
        />
        <TechnologyCard
          icon="https://cdn-icons-png.flaticon.com/512/1183/1183669.png"
          title="Backend"
          technologies={["Node.js", "Express", "PostgreSQL", "MongoDB"]}
        />
        <TechnologyCard
          icon="https://cdn-icons-png.flaticon.com/512/1183/1183671.png"
          title="Otros"
          technologies={["Git", "Docker", "AWS", "GraphQL"]}
        />
      </div>
    </div>
  )
}

function TechnologyCard({ icon, title, technologies }) {
  return (
    <div className="bg-[#2a2a2a] p-4 rounded-md shadow">
      <div className="flex items-center mb-3">
        <img src={icon} alt={title} className="w-8 h-8 text-purple-500" />
        <h3 className="text-lg font-semibold ml-2 text-blue-300">{title}</h3>
      </div>
      <ul className="space-y-1">
        {technologies.map((tech, index) => (
          <li key={index} className="text-[#d4d4d4]">{tech}</li>
        ))}
      </ul>
    </div>
  )
}