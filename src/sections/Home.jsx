import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative h-screen w-full flex items-center justify-center px-6 md:px-12 overflow-hidden bg-gradient-to-br from-[#1e1e2f] via-[#2a2a40] to-[#1e1e2f]"
    >
      {/* Floating blurred blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="z-10 max-w-4xl w-full backdrop-blur-md bg-white/10 p-10 rounded-3xl shadow-xl border border-white/20 text-white">
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">
          Hi, I'm Yogesh Maske
        </h1>

        <h2 className="mt-4 text-lg sm:text-2xl font-semibold text-indigo-200">
          Founder • Team Leader • Business Analyst
        </h2>

        <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed">
          I'm a results-driven professional passionate about leadership, innovation, and problem solving. 
          With proven expertise in business analysis and project strategy, I love building teams that deliver 
          meaningful outcomes. Let's turn ideas into real impact together.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white rounded-full text-lg font-semibold shadow-md transition-transform transform hover:scale-105"
          >
            Let’s Connect
          </a>

          <a
            href="Public/Yogesh_Maske_CV.pdf"
            download
            className="px-6 py-3 bg-transparent text-white border-2 border-indigo-400 hover:bg-indigo-600 hover:text-white rounded-full text-lg font-semibold shadow-md transition-transform transform hover:scale-105"
          >
            Download CV
          </a>
        </div>
      </div>
    </motion.section>
  );
}
