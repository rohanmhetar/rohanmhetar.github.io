import { type LucideIcon } from 'lucide-react'

interface SkillCardProps {
  title: string
  skills: Array<{ name: string; icon: LucideIcon }>
}

export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 transition-all duration-300 hover:shadow-lg">
      <h4 className="font-semibold text-lg text-blue-700 mb-3">{title}</h4>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <skill.icon className="w-5 h-5 mr-2 text-blue-600" />
            <span className="text-gray-700">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
