interface ProjectCardProps {
  title: string
  description: string
  link: string
}

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 transition-all duration-300 hover:shadow-lg">
      <h3 className="text-xl font-semibold mb-2 text-blue-800">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold hover:underline">
        View Project
      </a>
    </div>
  )
}