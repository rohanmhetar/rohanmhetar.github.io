interface SkillCardProps {
    title: string
    skills: string[]
  }
  
  export default function SkillCard({ title, skills }: SkillCardProps) {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 transition-all duration-300 hover:shadow-lg">
        <h4 className="font-semibold text-lg text-blue-700 mb-3">{title}</h4>
        <ul className="list-disc list-inside text-gray-700">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    )
  }  