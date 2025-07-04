import { Mail, MapPin, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-12 px-6 bg-white text-gray-800">
      
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-lg mb-6">Feel free to reach out for collaborations, internships, or just a tech chat!</p>

        <div className="space-y-3 mb-6">
          <p className="flex items-center justify-center gap-2 text-lg">
            <Mail className="w-5 h-5" />
            <a href="mailto:shrinedhi@example.com" className="hover:underline text-blue-600">
              shrinedhi@example.com
            </a>
          </p>
          <p className="flex items-center justify-center gap-2 text-lg">
            <MapPin className="w-5 h-5" />
            Chennai, India
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-700"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/Shrinedhi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>

        {/* Optional: Contact form */}
        {/* <form className="space-y-4 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded px-4 py-2"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded"
          >
            Send Message
          </button>
        </form> */}
      </div>
    </section>
  );
}
