import { CodeIcon, Briefcase, GraduationCap, Mail } from 'lucide-react'
import Link from 'next/link'

export const Menu = () => {

return (
    <nav className="fixed top-0 left-0 right-0 p-6 z-50 bg-opacity-80">
      {/* Menú superior */}
      <ul className="flex justify-center space-x-8">
        {[
            { name: 'Sobre mí', icon: CodeIcon, path: '/sobre-mi' },
            { name: 'Trabajos', icon: Briefcase, path: '/trabajos' },
            { name: 'Cursos', icon: GraduationCap, path: '/cursos' },
            { name: 'Contacto', icon: Mail, path: '/contacto' },
          ].map((item) => (
            <li key={item.name}>
              <Link href={item.path} className="flex items-center space-x-2 hover:text-emerald-300 transition-colors group">
                <item.icon className="w-5 h-5 group-hover:animate-spin" />
                <span className="relative overflow-hidden">
                  <span className="block ">
                    {item.name}
                  </span>
                  <span className="absolute ">
                    {item.name}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

)

}