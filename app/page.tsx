import Image from "next/image"
import Section from "@/components/section"
import ExperienceCard from "@/components/experience-card"
import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Section id="hero" title="">
        <div className="text-center">
          <div className="mb-6 relative w-48 h-48 mx-auto rounded-full overflow-hidden">
            <Image
              src="/placeholder.svg?height=192&width=192"
              alt="Rohan Mhetar"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">Rohan Mhetar</h1>
          <p className="text-xl mb-6">Software Engineer and Machine Learning Researcher</p>
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
              <h3 className="text-xl font-semibold">The University of Texas at Austin</h3>
              <p className="text-gray-600">B.S. Computer Science, B.S. in Mathematics, Minor in Business</p>
              <p className="text-gray-500">2021 - 2025</p>
            </div>
          </div>
          <p className="mt-2">GPA: 3.85/4</p>
          <h4 className="font-semibold mt-4">Relevant Coursework:</h4>
          <p>Data Structures and Algorithms, Complexity Analysis, Distributed Systems, Discrete Mathematics, System Development, Linear Algebra, Compilers, Software Engineering, Computer Networks</p>
          <h4 className="font-semibold mt-4">Activities:</h4>
          <ul className="list-disc list-inside">
            <li>Texas Undergraduate Computational Finance (Analyst)</li>
            <li>Texas Convergent (Technical Program Manager)</li>
            <li>Programmers with Disabilities (Co-Founder and Outreach Chair)</li>
            <li>EcoCar EV Challenge (CAV Engineer)</li>
          </ul>
          <h4 className="font-semibold mt-4">Awards:</h4>
          <ul className="list-disc list-inside">
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
        <ExperienceCard
          logo="/placeholder.svg?height=64&width=64"
          title="Software Engineer Intern"
          company="ZipRecruiter"
          location="Santa Monica, CA"
          date="May 2024 - August"
          description={[
            "Developed a full-stack job search optimization pipeline with custom query tagger (SpaCy, BERT) and industry-specific taxonomies to improve recall relevance; integrated XGBoost-based ranking RESTful API, enhancing backend-to-frontend processing boosting relevance by 10%.",
            "Built a job description parser for precise sectioning with real-time filtering and Redis caching; improved scalability using Docker, CI/CD, AWS CloudWatch monitoring."
          ]}
        />
        <ExperienceCard
          logo="/placeholder.svg?height=64&width=64"
          title="Lead Software Engineer"
          company="Meals on Wheels"
          location="Austin, TX"
          date="January 2023 - 2024"
          description={[
            "Directed the development of a full-stack web application using Flask, Salesforce CRM, and Maps API to optimize volunteer coordination, delivery logistics, wellness checks for elderly care across Central Texas, increasing scheduling efficiency by 40% reducing times 25%.",
            "Led backend and frontend integration for real-time updates, enhancing operational efficiency user experience, resulting in a 30% increase volunteer engagement enabling support over 500 new deliveries monthly."
          ]}
        />
        <ExperienceCard
          logo="/placeholder.svg?height=64&width=64"
          title="Software Engineer Intern"
          company="Amazon"
          location="Austin, TX"
          date="May 2023 - August"
          description={[
            "Engineered a high-performance C++ and RtAudio caching system for pre-fetching audio data, improving stream transition smoothness reducing processing latency by 70%, significantly enhancing responsiveness.",
            "Developed a comprehensive automated logging and monitoring solution with C++, Python, AWS CloudWatch, Lambda, enabling real-time tracking, alerts, advanced analytics for audio processing; reduced issue resolution time by 45%, saving over 100 engineering hours monthly through rapid detection of performance bottlenecks."
          ]}
        />
        <ExperienceCard
          logo="/placeholder.svg?height=64&width=64"
          title="Machine Learning Researcher"
          company="Computational Media Lab"
          location="Austin, TX"
          date="January 2022 - 2023"
          description={[
            "Leveraged BERTopic, Python, and TACC's high-performance infrastructure to analyze large Twitter datasets, efficiently preprocessing training the model on raw data.",
            "Categorized tweets by sentiment and visualized trends using Matplotlib Seaborn, providing insights into public reactions."
          ]}
        />
        <ExperienceCard
          logo="/placeholder.svg?height=64&width=64"
          title="Software Engineer Intern"
          company="State Street Corporation"
          location="Austin, TX"
          date="May 2022 - August"
          description={[
            "Developed an Auto-ML pipeline using PySpark for real-time fraud detection, enhancing accuracy by 20% through feature engineering and hyperparameter tuning in Random Forest XGBoost algorithms.",
            "Created a full-stack analytical dashboard using Flask, React, and D3.js to identify anomalies in transaction data (volatility, trading volume, moving averages), supporting Anti Money Laundering monitoring across 5 million entries."
          ]}
        />
        <ExperienceCard
          logo="/placeholder.svg?height=64&width=64"
          title="Software Engineer Intern"
          company="NASA"
          location="Houston, TX"
          date="May 2020 - August"
          description={[
            "Designed an Android application that logs user interactions to assess COVID-19 exposure risk, integrating a Flask REST API backend with Firebase for real-time data storage, geolocation tracking, and analytics.",
            "Built COVID-19 Web Simulator, a full-stack application simulating city-level spread dynamics, using React for the frontend, Node.js and Express backend, D3.js interactive transmission visualizations."
          ]}
        />
      </Section>

      <Section id="projects" title="Projects">
        <ProjectCard
          title="ARM Emulator in Rust"
          description="Developed a partial Gameboy Advance emulator in Rust, fully emulating the ARM7 ISA."
          link="https://github.com/rohanmhetar/arm-emulator"
        />
        <ProjectCard
          title="Automated Trading System"
          description="Developed and maintained a high-frequency trading platform using Python C++. Implemented real-time data acquisition with NumPy, backtesting Backtrader, multi-threaded order execution asyncio. Utilized TensorFlow for predictive modeling integrated FIX protocol exchange connectivity."
          link="https://github.com/rohanmhetar/trading-system"
        />
      </Section>

      <Section id="skills" title="Skills">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold">Programming Languages:</h4>
              <p>Python, JavaScript, TypeScript, Java, C++, Go, C#, C, R, CUDA</p>
            </div>
            <div>
              <h4 className="font-semibold">Web Development & Frameworks:</h4>
              <p>React, Next.js, Node.js, Angular, Vue.js, Flask, Django, HTML/CSS, jQuery</p>
            </div>
            <div>
              <h4 className="font-semibold">Cloud & DevOps:</h4>
              <p>AWS, Docker, Kubernetes, CI/CD, GCP, Azure, Heroku</p>
            </div>
            <div>
              <h4 className="font-semibold">Databases & APIs:</h4>
              <p>SQL (PostgreSQL, MySQL), MongoDB, GraphQL, RESTful APIs</p>
            </div>
            <div>
              <h4 className="font-semibold">Machine Learning & Data Science:</h4>
              <p>TensorFlow, PyTorch, Scikit-Learn, Neural Networks, OpenCV, Pandas, NumPy</p>
            </div>
          </div>
          <h3 className="text-xl font-semibold mt-6 mb-4">Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold">Leadership & Management:</h4>
              <p>Project Management, Team Leadership, Strategic Planning</p>
            </div>
            <div>
              <h4 className="font-semibold">Communication:</h4>
              <p>Technical Writing, Public Speaking, Cross-functional Collaboration</p>
            </div>
            <div>
              <h4 className="font-semibold">Problem Solving:</h4>
              <p>Analytical Thinking, Critical Reasoning, Creative Solution Design</p>
            </div>
            <div>
              <h4 className="font-semibold">Adaptability:</h4>
              <p>Quick Learning, Flexibility, Handling Ambiguity</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

