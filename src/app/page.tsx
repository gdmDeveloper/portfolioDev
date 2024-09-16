import Link from "next/link"
import { Code, Terminal, Globe } from "lucide-react"
import ExperienceSection from "./components/Experience"

export default function EnhancedLandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1e1e1e] text-[#d4d4d4] font-mono relative overflow-hidden">
      {/* Linux-style buttons */}
      <div className="absolute top-3 left-3 flex space-x-2 m">
        <div className="w-2 h-2 rounded-full bg-[#ff605c]"></div>
        <div className="w-2 h-2 rounded-full bg-[#ffbd44]"></div>
        <div className="w-2 h-2 rounded-full bg-[#00ca4e]"></div>
      </div>

      {/* Line numbers */}
      <div className="absolute left-0 top-7 bottom-0 w-12 flex flex-col items-end pr-2 text-[#858585] text-sm">
        {Array.from({ length: 100 }, (_, i) => (
          <div key={i} className="leading-6">{i + 1}</div>
        ))}
      </div>

      <header className="py-4 z-10">
        <nav className="container mx-auto">
          <ul className="flex justify-center space-x-8">
            <li>
              <Link href="#about" className="hover:text-[#9cdcfe] transition-colors">
                Sobre mí
              </Link>
            </li>
            <li>
              <Link href="#experience" className="hover:text-[#9cdcfe] transition-colors">
                Experiencia
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-[#9cdcfe] transition-colors">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow flex items-center justify-center z-10">
        <div className="text-right">
          <h1 className="text-5xl font-bold mb-2 text-[#569cd6]">GUILLEM ARANA</h1>
          <h2 className="text-2xl text-[#4ec9b0] mb-4">FULL STACK DEVELOPER</h2>
          <div className="flex justify-end items-center space-x-4 text-[#ce9178]">
            <Code size={24} />
            <Terminal size={24} />
            <Globe size={24} />
          </div>
          <p className="mt-4 text-[#dcdcaa] max-w-md text-right">
            Con más de 3 años de experiencia en programación web, 
            creando soluciones innovadoras y eficientes.
          </p>
        </div>
      </main>

      <div className="absolute inset-0 pointer-events-none">
        <div className="h-full w-full flex items-start justify-start p-4 pl-16 text-[#608b4e] opacity-20 overflow-hidden">
          { /* TEXT TOP LEFT */ }
          <pre className="text-xs">
            {`
import React from 'react';
import { render } from 'react-dom';
import ExperienceSection from './components/Experience';

function App() {
  return (
    <div>
      <h1>Welcome to my portfolio</h1>
      <p>I'm a Full Stack Developer</p>
    </div>
  );
}

render(<App />, document.getElementById('root'));
            `}
          </pre>
        </div>
      </div>
    </div>

    
  )
}