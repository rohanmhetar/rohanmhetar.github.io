import Image from 'next/image'

interface ExperienceCardProps {
  logo: string;
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
  emoji: string;
}

export default function ExperienceCard({ 
  logo, 
  title, 
  company, 
  location, 
  date, 
  description,
  emoji 
}: ExperienceCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <div className="flex items-center mb-4">
        <div className="mr-4 relative w-16 h-16">
          <Image
            src={logo}
            alt={`${company} image`}
            width={64}
            height={64}
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-800">{title} {emoji}</h3>
          <p className="text-gray-700">{company} | {location}</p>
          <p className="text-gray-600">{date}</p>
        </div>
      </div>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        {description.map((item, index) => (
          <li key={index} className="mb-2">{item}</li>
        ))}
      </ul>
    </div>
  )
}