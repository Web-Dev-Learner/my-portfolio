import { Code, Wrench, Layers } from "lucide-react";
import GitHubCalendar from "react-github-calendar";

export default function About() {
  return (
    <section id="about" className="bg-white text-black px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-600">
          About Me
        </h2>

        <p className="mb-4 text-gray-800">
          I'm <strong className="text-black">Shrinedhi M.R.</strong> (She/Her), a Software Developer with a passion for clean UI/UX, efficient full-stack development, and automation with Python.
          I’ve contributed to open source via <strong className="text-black">GirlScript Summer of Code 2024 - Extended</strong> and completed internships at <strong className="text-black">Infosys Springboard</strong> and <strong className="text-black">Microsoft AICTE</strong>.
        </p>

        <p className="mb-1 text-purple-600">
          💡 <strong>What I Do:</strong>
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-800">
          <li>Develop responsive UIs using React, Tailwind CSS, Zustand, and JavaScript</li>
          <li>Build scalable APIs using Node.js, Express, and MongoDB Atlas</li>
          <li>Automate tasks and data pipelines using Python</li>
          <li>Solve coding challenges – 250+ problems on LeetCode and GFG</li>
          <li>Explore DevOps with GitHub Actions, Docker, and CI/CD pipelines</li>
        </ul>

        {/* Education */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4 text-purple-600">Education</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="text-lg font-semibold text-black">Meenakshi College Of Engineering</h4>
              <p className="text-sm text-gray-700">B.Tech in Information Technology (2021 – 2025) – Chennai, India</p>
              <p className="text-sm text-gray-600">CGPA: 8.9 / 10</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="text-lg font-semibold text-black">All Angels Matriculation Higher Secondary School</h4>
              <p className="text-sm text-gray-700">Bio-Maths (2019 – 2021) – Chennai, India</p>
              <p className="text-sm text-gray-600">Percentage: 86.87%</p>
            </div>
          </div>
        </div>

        {/* Skills Sections */}
        <div className="mt-10">
          <SkillSection icon={<Code className="w-6 h-6 mr-2 text-purple-600" />} title="Languages">
            <TechRow items={[
              ["JavaScript", "javascript/javascript-original"],
              ["Python", "python/python-original"],
              ["HTML5", "html5/html5-original"],
              ["CSS3", "css3/css3-original"]
            ]} />
          </SkillSection>

          <SkillSection icon={<Layers className="w-6 h-6 mr-2 text-purple-600" />} title="Frameworks & Libraries">
            <TechRow items={[
              ["React", "react/react-original"],
              ["Tailwind CSS", "tailwind-css/tailwind-css-plain"],
              ["Express", "express/express-original"],
              ["Django", "django/django-plain"],
              ["Node.js", "nodejs/nodejs-original"]
            ]} />
          </SkillSection>

          <SkillSection icon={<Wrench className="w-6 h-6 mr-2 text-purple-600" />} title="Developer Tools & Platforms">
            <TechRow items={[
              ["Git", "git/git-original"],
              ["GitHub", "github/github-original"],
              ["VS Code", "vscode/vscode-original"],
              ["Vite", "vite/vite-original"]
            ]} />
          </SkillSection>

          <SkillSection icon={<Wrench className="w-6 h-6 mr-2 text-purple-600" />} title="Databases">
            <TechRow items={[
              ["MongoDB", "mongodb/mongodb-original"],
              ["PostgreSQL", "postgresql/postgresql-original"],
              ["MySQL", "mysql/mysql-original"]
            ]} />
          </SkillSection>

          <SkillSection icon={<Wrench className="w-6 h-6 mr-2 text-purple-600" />} title="CSS Tools & Libraries">
            <TechRow items={[
              ["SASS", "sass/sass-original"],
              ["Bootstrap", "bootstrap/bootstrap-original"]
            ]} />
          </SkillSection>

          <SkillSection icon={<Wrench className="w-6 h-6 mr-2 text-purple-600" />} title="DevOps & Deployment">
            <TechRow items={[
              ["Docker", "docker/docker-original"],
              ["CI/CD", "gitlab/gitlab-original"],
              ["Azure", "azure/azure-original"]
            ]} />
          </SkillSection>
        </div>

        {/* Competitive Coding */}
        <h3 className="text-2xl font-semibold mb-6 text-purple-600 mt-10">Competitive Coding</h3>
        <div className="flex flex-col items-center gap-6">
          <a href="https://leetcode.com/Shrinedhi/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://leetcard.jacoblin.cool/Shrinedhi?theme=light&font=Karma&ext=heatmap"
              alt="LeetCode Stats"
              className="w-[360px] sm:w-[420px]"
            />
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/shrinedhi_m_r/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium px-5 py-2 rounded shadow"
          >
            View My GeeksforGeeks Profile
          </a>
        </div>

        {/* GitHub Calendar */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-purple-600">Days I Code</h3>
          <div className="flex justify-center">
            <GitHubCalendar
              username="Web-Dev-Learner"
              blockSize={15}
              blockMargin={5}
              fontSize={16}
              theme={{
                light: ['#f3e8ff', '#d8b4fe', '#c084fc', '#a855f7', '#7e22ce'],
                dark: ['#f3e8ff', '#d8b4fe', '#c084fc', '#a855f7', '#7e22ce']
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable layout for each skill category
function SkillSection({ icon, title, children }) {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold flex items-center mb-4 text-purple-600">
        {icon} {title}
      </h3>
      {children}
    </div>
  );
}


// Tech stack display
function TechRow({ items }) {
  return (
    <div className="flex flex-wrap gap-4 text-center">
      {items.map(([name, path]) => (
        <TechIcon
          key={name}
          name={name}
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}.svg`}
        />
      ))}
    </div>
  );
}

// Tech icon card
function TechIcon({ name, src }) {
  return (
    <div className="flex flex-col items-center w-24 h-24 bg-white text-black shadow rounded-lg p-2">
      <img src={src} alt={name} className="w-10 h-10 object-contain" />
      <span className="text-xs mt-2 font-medium text-center">{name}</span>
    </div>
  );
}
