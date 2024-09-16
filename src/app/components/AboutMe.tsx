export const AboutMe = () => {
  return (
    <>
      {/* Contenido principal */}
      <div className='flex flex-col items-center justify-center min-h-screen px-8 md:px-16 relative mr-8 md:mr-16'>
        <h1 className='text-6xl md:text-7xl font-bold tracking-tighter mb-8 text-left relative w-full max-w-3xl'>
          <span className='block glitch' data-text='GUILLEM'>
            GUILLEM
          </span>
          <span className='block mt-2 glitch' data-text='ARANA'>
            ARANA
          </span>
        </h1>
        <div className='w-full max-w-3xl'>
          <p className='text-lg leading-snug bg-gray-800 bg-opacity-50 p-4 rounded-lg border border-emerald-800 shadow-lg shadow-emerald-500/50 max-w-xl'>
            Desarrollador web full-stack con +3 años de experiencia.
            Especializado en crear experiencias digitales innovadoras y
            soluciones tecnológicas de vanguardia.
          </p>
        </div>
      </div>
    </>
  )
}
