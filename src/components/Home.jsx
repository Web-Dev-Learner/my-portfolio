import { Mail, MapPin, Linkedin, Github } from "lucide-react";

export default function Home() {
  return (
    <section id="home" className="bg-white text-gray-800">
      
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-16 max-w-6xl mx-auto">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Hi, I'm Shrinedhi M R
          </h1>
          <h2 className="text-2xl text-purple-600 font-semibold mb-4">
            Software Developer | Python Problem Solver | MERN & DevOps Enthusiast
          </h2>
          <p className="text-gray-700 mb-3">
            Passionate frontend and MERN stack developer blending clean UI/UX with real-time backend functionality.
          </p>
          <p className="text-gray-600 mb-6">
            B.Tech IT (2021–2025) | Infosys Springboard Intern | GSSoC Contributor | Python AI Intern.
            Open to exciting internship or full-time roles.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
            >
              View Projects
            </a>
            <a
              href="https://github.com/Web-Dev-Learner"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-purple-600 text-purple-600 hover:bg-purple-50 font-medium px-6 py-2 rounded-lg transition"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Right Content – Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://illustrations.popsy.co/gray/laptop-reading.svg"
            alt="Reading illustration"
            className="w-80 h-auto"
          />
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-200 my-10 w-3/4 mx-auto" />

     <div id="contact" className="py-16 px-6 text-center text-gray-800">
  <h2 className="text-4xl font-bold mb-2">FIND ME ON</h2>
  <p className="text-lg mb-8">
    Feel free to <span className="text-purple-600 font-semibold">connect</span> with me
  </p>

  <div className="flex justify-center gap-6 mb-6">
    {/* GitHub */}
    <a
      href="https://github.com/Shrinedhi"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white text-black w-12 h-12 flex items-center justify-center rounded-full shadow-md hover:bg-purple-100 transition"
    >
      <Github className="w-6 h-6" />
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/your-linkedin"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white text-blue-700 w-12 h-12 flex items-center justify-center rounded-full shadow-md hover:bg-purple-100 transition"
    >
      <Linkedin className="w-6 h-6" />
    </a>

    {/* Email */}
    <a
      href="mailto:shrinedhi@example.com"
      className="bg-white text-red-500 w-12 h-12 flex items-center justify-center rounded-full shadow-md hover:bg-purple-100 transition"
    >
      <Mail className="w-6 h-6" />
    </a>
  </div>

  <p className="text-sm text-gray-600">Chennai, India</p>
</div>


      
    </section>
  );
}
