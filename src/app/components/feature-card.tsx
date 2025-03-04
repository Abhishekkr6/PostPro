import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-gray-900 to-black border border-gray-800 p-1 h-full transition-all duration-300 hover:scale-[1.02]">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-500/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative h-full bg-black rounded-lg p-6 flex flex-col">
        <div className="mb-5">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-purple-600/10 via-blue-500/10 to-cyan-400/10 rounded-xl border border-gray-800 text-cyan-400">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{description}</p>
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 group-hover:w-full transition-all duration-500"></div>
      </div>
    </div>
  )
}

