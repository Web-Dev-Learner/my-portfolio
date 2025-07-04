export default function Resume() {
  return (
    <section className="px-6 py-20 min-h-screen bg-gray-50 text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center text-purple-700">
        My Resume
      </h2>

      <div className="text-center mb-6">
        <a
          href="/resume.pdf"
          download
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded transition"
        >
          Download Resume
        </a>
      </div>

      <div className="flex justify-center">
        <iframe
          src="/resume.pdf"
          title="Resume PDF"
          className="w-full max-w-4xl h-[80vh] border rounded shadow-lg"
        ></iframe>
      </div>
    </section>
  );
}
