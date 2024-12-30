import Image from 'next/image'
import Section from '@/components/section'
import ExperienceCard from '@/components/experience-card'
import ProjectCard from '@/components/project-card'
import SkillCard from '@/components/skill-card'
import Timeline from '@/components/timeline'
import { Button } from '@/components/ui/button'
import { Code, Globe, Cloud, Database, Brain, Users, MessageSquare, Lightbulb, Zap, PiIcon as Python, FileCode, Coffee, Cpu, Server, Figma, GitBranch, BarChart, Table, Network, Layers } from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-[#f8f7f3]">
      <Section id="hero" title="">
        <div className="text-center">
          <div className="mb-6 relative w-48 h-48 mx-auto rounded-full overflow-hidden">
            <Image
              src="rohan_mhetar.jpeg"
              alt="Rohan Mhetar"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-blue-800">Rohan Mhetar</h1>
          <p className="text-xl mb-6 text-blue-600">Software Engineer and Machine Learning Researcher</p>
          <div className="flex justify-center space-x-4">
            <Button asChild>
              <a href="mailto:rohanmhetar@utexas.edu">Contact Me</a>
            </Button>
            <Button asChild variant="outline">
              <a href="https://linkedin.com/in/rohanmhetar" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </Button>
            <Button asChild variant="outline">
              <a href="https://github.com/rohanmhetar" target="_blank" rel="noopener noreferrer">GitHub</a>
            </Button>
          </div>
        </div>
      </Section>

      <Section id="education" title="Education">
  <div className="bg-white shadow-md rounded-lg p-6">
    <div className="flex items-center mb-4">
      <div className="mr-4 relative w-16 h-16">
        <Image
          src="/placeholder.svg?height=64&width=64"
          alt="University of Texas at Austin logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-blue-800">The University of Texas at Austin 🤘</h3>
        <p className="text-gray-700">B.S. Computer Science, B.S. in Mathematics, Minor in Business</p>
        <p className="text-gray-600">2021 - 2025</p>
      </div>
    </div>
    <p className="mt-2 text-gray-700">GPA: 3.85/4</p>
    <h4 className="font-semibold mt-4 text-blue-700">Relevant Coursework:</h4>
    <p className="text-gray-700">Data Structures and Algorithms, Complexity Analysis, Distributed Systems, Discrete Mathematics, System Development, Linear Algebra, Compilers, Software Engineering, Computer Networks</p>
    <h4 className="font-semibold mt-4 text-blue-700">Activities:</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li>Texas Undergraduate Computational Finance (Analyst)</li>
      <li>Texas Convergent (Technical Program Manager)</li>
      <li>Programmers with Disabilities (Co-Founder and Outreach Chair)</li>
      <li>EcoCar EV Challenge (CAV Engineer)</li>
    </ul>
    <h4 className="font-semibold mt-4 text-blue-700">Awards:</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li>1st Place in Bloomberg B Puzzled (UT Austin)</li>
      <li>1st Place in Stock Simulator Competition</li>
      <li>Perfect Score on AMC 12</li>
      <li>3x AIME Qualifier</li>
      <li>USACO Gold Recipient</li>
      <li>Global Finalist in NASA Space Apps Hackathon</li>
    </ul>
  </div>
</Section>

      <Section id="experience" title="Experience">
        <Timeline>
          <Timeline.Item side="left">
            <ExperienceCard
              logo="/placeholder.svg?height=64&width=64"
              title="Software Engineer Intern"
              company="ZipRecruiter"
              location="Santa Monica, CA"
              date="May 2024 - August 2024"
              description={[
                "Developed a full-stack job search optimization pipeline with a custom query tagger (SpaCy, BERT) and industry-specific taxonomies to improve search recall and relevance; integrated XGBoost-based ranking with a RESTful API, enhancing backend-to-frontend query processing and boosting relevance by 10%.",
                "Built a job description parser for precise sectioning with real-time filtering and Redis caching; improved scalability using Docker, CI/CD, and AWS CloudWatch monitoring."
              ]}
              emoji="🔍"
            />
          </Timeline.Item>
          <Timeline.Item side="right">
            <ExperienceCard
              logo="/placeholder.svg?height=64&width=64"
              title="Lead Software Engineer"
              company="Meals on Wheels"
              location="Austin, TX"
              date="January 2023 - January 2024"
              description={[
                "Directed the development of a full-stack web application using Flask, Salesforce CRM, and Maps API to optimize volunteer coordination, delivery logistics, and wellness checks for elderly care across Central Texas, increasing volunteer scheduling efficiency by 40% and reducing delivery times by 25%.",
                "Led backend and frontend integration for real-time updates, enhancing operational efficiency and user experience, resulting in a 30% increase in volunteer engagement and enabling support for over 500 new deliveries monthly."
              ]}
              emoji="🍲"
            />
          </Timeline.Item>
          <Timeline.Item side="left">
            <ExperienceCard
              logo="/placeholder.svg?height=64&width=64"
              title="Software Engineer Intern"
              company="Amazon"
              location="Austin, TX"
              date="May 2023 - August 2023"
              description={[
                "Engineered a high-performance C++ and RtAudio caching system for pre-fetching audio data, improving stream transition smoothness and reducing processing latency by 70%, significantly enhancing system responsiveness.",
                "Developed a comprehensive automated logging and monitoring solution with C++, Python, AWS CloudWatch, and Lambda, enabling real-time tracking, automated alerts, and advanced analytics for audio processing; reduced issue resolution time by 45%, saving over 100 engineering hours monthly through rapid detection of performance bottlenecks."
              ]}
              emoji="📦"
            />
          </Timeline.Item>
          <Timeline.Item side="right">
            <ExperienceCard
              logo="/placeholder.svg?height=64&width=64"
              title="Machine Learning Researcher"
              company="Computational Media Lab"
              location="Austin, TX"
              date="January 2022 - January 2023"
              description={[
                "Leveraged BERTopic, Python, and TACC's high-performance infrastructure to analyze large Twitter datasets, efficiently preprocessing and training the model on raw data.",
                "Categorized tweets by sentiment and visualized trends using Matplotlib and Seaborn, providing insights into public reactions."
              ]}
              emoji="🧠"
            />
          </Timeline.Item>
          <Timeline.Item side="left">
            <ExperienceCard
              logo="/placeholder.svg?height=64&width=64"
              title="Software Engineer Intern"
              company="State Street Corporation"
              location="Austin, TX"
              date="May 2022 - August 2022"
              description={[
                "Developed an Auto-ML pipeline using PySpark for real-time fraud detection, enhancing accuracy by 20% through feature engineering and hyperparameter tuning in Random Forest and XGBoost algorithms.",
                "Created a full-stack analytical dashboard using Flask, React, and D3.js to identify anomalies in transaction data (volatility, trading volume, and moving averages), supporting Anti Money Laundering monitoring across 5 million entries."
              ]}
              emoji="💼"
            />
          </Timeline.Item>
          <Timeline.Item side="right">
            <ExperienceCard
              logo="/placeholder.svg?height=64&width=64"
              title="Software Engineer Intern"
              company="NASA"
              location="Houston, TX"
              date="May 2020 - August 2020"
              description={[
                "Designed an Android application that logs user interactions to assess COVID-19 exposure risk, integrating a Flask REST API backend with Firebase for real-time data storage, geolocation tracking, and analytics.",
                "Built COVID-19 Web Simulator, a full-stack application simulating city-level COVID-19 spread dynamics, using React for the frontend, Node.js and Express for the backend, and D3.js for interactive transmission visualizations."
              ]}
              emoji="🚀"
            />
          </Timeline.Item>
        </Timeline>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            title="ARM Emulator in Rust"
            description="Developed a partial Gameboy Advance emulator in Rust, fully emulating the ARM7 ISA."
            link="https://github.com/rohanmhetar/arm-emulator"
          />
          <ProjectCard
            title="Automated Trading System"
            description="Developed and maintained a high-frequency trading platform using Python and C++. Implemented real-time data acquisition with NumPy, backtesting with Backtrader, and multi-threaded order execution with asyncio. Utilized TensorFlow for predictive modeling and integrated with FIX protocol for exchange connectivity."
            link="https://github.com/rohanmhetar/trading-system"
          />
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">Hard Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SkillCard
                title="Programming Languages"
                skills={[
                  { name: "Python", icon: Python },
                  { name: "JavaScript", icon: FileCode },
                  { name: "TypeScript", icon: FileCode },
                  { name: "Java", icon: Coffee },
                  { name: "C++", icon: Cpu },
                  { name: "Go", icon: Server },
                  { name: "C#", icon: Code },
                  { name: "C", icon: Code },
                  { name: "R", icon: BarChart },
                  { name: "CUDA", icon: Layers },
                ]}
              />
              <SkillCard
                title="Web Development & Frameworks"
                skills={[
                  { name: "React", icon: Code },
                  { name: "Next.js", icon: Server },
                  { name: "Node.js", icon: Server },
                  { name: "Angular", icon: Code },
                  { name: "Vue.js", icon: Code },
                  { name: "Flask", icon: Python },
                  { name: "Django", icon: Python },
                  { name: "HTML/CSS", icon: FileCode },
                  { name: "jQuery", icon: Code },
                ]}
              />
              <SkillCard
                title="Cloud & DevOps"
                skills={[
                  { name: "AWS", icon: Cloud },
                  { name: "Docker", icon: Database },
                  { name: "Kubernetes", icon: Cloud },
                  { name: "CI/CD", icon: GitBranch },
                  { name: "GCP", icon: Cloud },
                  { name: "Azure", icon: Cloud },
                  { name: "Heroku", icon: Server },
                ]}
              />
              <SkillCard
                title="Databases & APIs"
                skills={[
                  { name: "SQL (PostgreSQL, MySQL)", icon: Database },
                  { name: "MongoDB", icon: Database },
                  { name: "GraphQL", icon: Globe },
                  { name: "RESTful APIs", icon: Network },
                ]}
              />
              <SkillCard
                title="Machine Learning & Data Science"
                skills={[
                  { name: "TensorFlow", icon: Brain },
                  { name: "PyTorch", icon: Brain },
                  { name: "Scikit-Learn", icon: Brain },
                  { name: "Neural Networks", icon: Network },
                  { name: "OpenCV", icon: Figma },
                  { name: "Pandas", icon: Table },
                  { name: "NumPy", icon: BarChart },
                ]}
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">Soft Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SkillCard
                title="Leadership & Management"
                skills={[
                  { name: "Project Management", icon: Users },
                  { name: "Team Leadership", icon: Users },
                  { name: "Strategic Planning", icon: Lightbulb },
                ]}
              />
              <SkillCard
                title="Communication"
                skills={[
                  { name: "Technical Writing", icon: FileCode },
                  { name: "Public Speaking", icon: MessageSquare },
                  { name: "Cross-functional Collaboration", icon: Users },
                ]}
              />
              <SkillCard
                title="Problem Solving"
                skills={[
                  { name: "Analytical Thinking", icon: Lightbulb },
                  { name: "Critical Reasoning", icon: Brain },
                  { name: "Creative Solution Design", icon: Zap },
                ]}
              />
              <SkillCard
                title="Adaptability"
                skills={[
                  { name: "Quick Learning", icon: Zap },
                  { name: "Flexibility", icon: Zap },
                  { name: "Handling Ambiguity", icon: Lightbulb },
                ]}
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

