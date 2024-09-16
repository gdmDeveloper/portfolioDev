"use client";

import { useState, useEffect } from 'react'
import { AboutMe } from './components/AboutMe';
import { Menu } from './components/Menu';
import WorkExperience from './components/WorkExperience';
import Technologies from './components/Technologies';

export default function Component() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-emerald-400 font-sans relative overflow-hidden flex justify-center items-center">
      {/* Efecto de fondo interactivo */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-emerald-900 to-transparent opacity-50"
        style={{
          backgroundPosition: `${mousePosition.x / 5}px ${mousePosition.y / 5}px`,
        }}
      />

      {/* Líneas de cuadrícula */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-30" />

      <div className="max-w-6xl w-full mx-auto px-4">
        <Menu />
        <AboutMe />
        <WorkExperience />
        <Technologies />
      </div>

      <style jsx>{`
        .glitch {
          position: relative;
          animation: glitch 1s infinite;
        }
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .glitch::before {
          left: 2px;
          text-shadow: -2px 0 #10b981;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim 5s infinite linear alternate-reverse;
        }
        .glitch::after {
          left: -2px;
          text-shadow: -2px 0 #059669, 2px 2px #10b981;
          animation: glitch-anim2 1s infinite linear alternate-reverse;
        }
        @keyframes glitch {
          2%, 64% {
            transform: translate(2px,0) skew(0deg);
          }
          4%, 60% {
            transform: translate(-2px,0) skew(0deg);
          }
          62% {
            transform: translate(0,0) skew(5deg); 
          }
        }
        @keyframes glitch-anim {
          0% {
            clip: rect(76px, 9999px, 87px, 0);
          }
          20% {
            clip: rect(5px, 9999px, 95px, 0);
          }
          40% {
            clip: rect(89px, 9999px, 36px, 0);
          }
          60% {
            clip: rect(100px, 9999px, 96px, 0);
          }
          80% {
            clip: rect(54px, 9999px, 77px, 0);
          }
          100% {
            clip: rect(86px, 9999px, 38px, 0);
          }
        }
        @keyframes glitch-anim2 {
          0% {
            clip: rect(36px, 9999px, 2px, 0);
          }
          20% {
            clip: rect(65px, 9999px, 92px, 0);
          }
          40% {
            clip: rect(90px, 9999px, 51px, 0);
          }
          60% {
            clip: rect(23px, 9999px, 75px, 0);
          }
          80% {
            clip: rect(82px, 9999px, 15px, 0);
          }
          100% {
            clip: rect(4px, 9999px, 91px, 0);
          }
        }
      `}</style>
    </div>
  )
}