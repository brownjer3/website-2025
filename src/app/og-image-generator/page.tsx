'use client'

export default function OGImageGenerator() {
  return (
    <div 
      className="w-[1200px] h-[630px] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-16"
      style={{ width: '1200px', height: '630px' }}
    >
      <div className="text-white text-center space-y-6">
        <h1 className="text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Jerry Safter Brown
        </h1>
        <p className="text-3xl text-gray-200">
          Full Stack Software Engineer
        </p>
        <div className="flex items-center justify-center space-x-8 mt-8">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">💻</span>
            <span className="text-xl text-gray-300">10+ Years Experience</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🚀</span>
            <span className="text-xl text-gray-300">Product-Minded Engineer</span>
          </div>
        </div>
        <div className="mt-12 text-lg text-gray-400">
          jerrysafterbrown.com
        </div>
      </div>
    </div>
  )
}