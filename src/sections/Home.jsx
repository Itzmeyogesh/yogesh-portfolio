import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="h-screen flex flex-col justify-center items-start text-left bg-gradient-to-br from-purple-100 via-white to-indigo-100 px-6 md:px-24"
    >
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-500 drop-shadow-lg">
          Yogesh Maske
        </h1>

        <h2 className="mt-4 text-xl md:text-2xl font-semibold text-gray-800">
          Founder | Team Leader | Business Analyst
        </h2>

        <p className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed">
          I’m an experienced professional driven by results and growth. My passion lies in mentoring, managing teams,
          and transforming opportunities into achievements. I believe in empowering others while delivering value.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-full text-lg font-medium shadow-lg transition-transform transform hover:scale-105"
          >
            Let’s Connect
          </a>

          <a
            href="Public/Yogesh_Maske_CV.pdf"
            download
            className="px-6 py-3 bg-white text-purple-700 hover:text-white hover:bg-purple-700 border-2 border-purple-700 rounded-full text-lg font-medium shadow-lg transition-transform transform hover:scale-105"
          >
            Download CV
          </a>
        </div>
      </div>
    </motion.div>
  );
}
