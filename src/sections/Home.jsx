import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function Home() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      role="region"
      aria-labelledby="home-heading"
      className="relative min-h-screen w-full flex items-start sm:items-center justify-start sm:justify-center px-4 sm:px-6 md:px-12 py-12 sm:py-0 overflow-hidden bg-gradient-to-br from-[#1e1e2f] via-[#2a2a40] to-[#1e1e2f]"
    >
      {/* Floating blurred blobs */}
      <div className="absolute top-0 left-0 w-56 h-56 sm:w-72 sm:h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 sm:w-72 sm:h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob delay-[2000ms]"></div>

      {/* Content Box */}
      <div className="z-10 max-w-4xl w-full backdrop-blur-md bg-white/10 p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-xl border border-white/20 text-white text-center mt-8 sm:mt-0">
        <h1
          id="home-heading"
          className="text-3xl sm:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400"
        >
          Hi, I'm Yogesh Maske
        </h1>

        <h2 className="mt-3 sm:mt-4 text-base sm:text-2xl font-semibold text-indigo-200">
          Founder • Team Leader • Business Analyst
        </h2>

        <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-gray-300 leading-relaxed">
          I'm a results-driven professional passionate about leadership, innovation, and problem solving. 
          With proven expertise in business analysis and project strategy, I love building teams that deliver 
          meaningful outcomes. Let's turn ideas into real impact together.
        </p>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            aria-label="Go to contact section"
            className="px-5 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white rounded-full text-base sm:text-lg font-semibold shadow-md transition-transform transform hover:scale-105"
          >
            Let’s Connect
          </a>

          <a
            href="Public/Yogesh_Maske_CV.pdf"
            download
            aria-label="Download Yogesh Maske's CV"
            className="px-5 py-2 sm:px-6 sm:py-3 bg-transparent text-white border-2 border-indigo-400 hover:bg-indigo-600 hover:text-white rounded-full text-base sm:text-lg font-semibold shadow-md transition-transform transform hover:scale-105"
          >
            Download CV
          </a>
        </div>

        {/* Scroll cue */}
        <div className="mt-8 sm:mt-10 text-indigo-300 animate-bounce hidden sm:block">
          <FaChevronDown size={24} />
        </div>
      </div>
    </motion.section>
  );
}
