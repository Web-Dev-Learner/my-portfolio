import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer"; // ✅ Import Footer


function App() {
  return (
    <Router>
      {/* Ensure full height and column layout */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        {/* Make main grow to push footer down when content is short */}
        <main className="flex-grow pt-20 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>

        <Footer /> {/* ✅ Sticky footer */}
      </div>
    </Router>
  );
}

export default App;
