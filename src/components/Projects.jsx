import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Bank Cheque Extraction System",
    description:
      "A system that extracts key cheque details from scanned PDFs/images using OCR, then organizes the data into dashboards with visual analytics and downloadable reports.",
    image: "/images/img1.jpg",
    github: "https://github.com/shrinedhi/cheque-extraction",
    demo: "https://cheque-dashboard.streamlit.app/",
  },
  {
    title: "Gatherly – Event Manager",
    description:
      "A web app to create, manage, and RSVP to events, with built-in email invites and auto-generated video call links, offering calendar views and dashboard overviews.",
    image: "/images/img1.jpg",
    github: "https://github.com/Web-Dev-Learner/gatherly-event",
    demo: "https://gatherly-event.vercel.app/",
  },
  {
    title: "Chatty - Real-time Chat App",
    description:
      "A modern messaging app supporting real-time chat, media sharing, user status, authentication, and profile customization, designed for smooth performance and enhanced user engagement.",
    image: "/images/img1.jpg",
    github: "https://github.com/shrinedhi/realtime-chat",
    demo: "https://realtime-chatapp.vercel.app/",
  },
  {
    title: "Joyful Mart - E Commerce App",
    description:
      "An online shopping web app with product browsing, detailed views, and a cart system, offering a smooth user experience with responsive design and real-time notifications.",
    image: "/images/img1.jpg",
    github: "https://github.com/shrinedhi/joyful-mart",
    demo: "https://joyful-mart.vercel.app/",
  },
  {
    title: "Admin Dashboard",
    description:
      "An interactive admin panel with sections like sales, users, analytics, and product management, providing live insights, chart visualizations, and full settings control in a responsive interface.",
    image: "/images/img1.jpg",
    github: "https://github.com/shrinedhi/admin-dashboard",
    demo: "https://admin-dashboard-react.vercel.app/",
  },
  {
    title: "Python Chat App",
    description:
      "A real-time browser-based chat platform assigning random usernames and avatars, enabling users to send live messages, customize names, and see join/leave alerts instantly.",
    image: "/images/img1.jpg",
    github: "https://github.com/Web-Dev-Learner/python-chat",
    demo: "https://gatherly-event.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 px-6 bg-gray-100 text-gray-800">
      <h2 className="text-3xl font-bold mb-10 text-center text-purple-700">PROJECTS</h2>

      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md border border-gray-200 p-5 text-center w-full max-w-lg mx-auto
            min-h-[520px] transition-all duration-300 transform hover:scale-[1.03] hover:shadow-xl"
          >
            {/* Enlarged image section */}
            <div className="bg-black rounded-lg overflow-hidden mb-3">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-60 object-cover" // Increased from h-48
              />
            </div>

            <h3 className="text-lg font-bold mb-1 text-gray-900">{proj.title}</h3>
            <p className="text-sm mb-3 text-gray-700">{proj.description}</p>

            <div className="flex justify-center gap-4 mt-auto">
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded text-sm"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href={proj.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm"
              >
                <ExternalLink size={16} />
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
