interface ProjectProps {
    title: string
    description: string
    date: string
    tech: string[]
  }
  
  export function Project({ title, description, date, tech }: ProjectProps) {
    return (
      <div className="border border-gray-800 rounded-lg p-4">
        <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
        <p className="text-gray-500 text-xs sm:text-sm mt-1">{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <p className="mt-2 text-sm sm:text-base">{description}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {tech.map((t, index) => (
            <span key={index} className="bg-gray-800 text-xs sm:text-sm rounded-full px-2 py-1">{t}</span>
          ))}
        </div>
      </div>
    )
  }
  
  