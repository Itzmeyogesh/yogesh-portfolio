import { motion } from 'framer-motion';
import { FaUserCircle } from 'react-icons/fa';
import profileImg from '../assets/Profile.jpg';

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative py-24 px-6 md:px-12 overflow-hidden font-poppins bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
    >
      {/* Background Grid Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:18px_18px] opacity-20 z-0 pointer-events-none animate-pulse" />

      {/* Floating Blobs */}
      <div className="absolute top-0 -left-32 w-96 h-96 bg-purple-600 rounded-full mix-blend-color-dodge blur-3xl opacity-30 animate-blob" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-indigo-600 rounded-full mix-blend-color-dodge blur-3xl opacity-30 animate-blob animation-delay-4000" />

      {/* Glass Card */}
      <div className="relative z-10 max-w-6xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-10 md:p-16 transition-all duration-500">
        {/* Title & Image Row */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 blur opacity-70 group-hover:scale-105 transition-transform duration-300" />
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src={profileImg}
                alt="Yogesh Maske"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Heading and Description */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5 flex items-center justify-center md:justify-start gap-3 text-white drop-shadow-xl">
              <FaUserCircle className="text-pink-300 animate-pulse" size={42} />
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed tracking-wide max-w-3xl">
              <span className="text-purple-300 font-semibold">Hi! I’m Yogesh Maske</span>, founder & innovator behind <span className="text-indigo-300 font-semibold">Technical One</span>. 
              I empower future tech talent through e-learning, career mentorship, and strategic industry placement. 
              With a strong base in <span className="text-pink-300">web development</span>, <span className="text-pink-300">team leadership</span>, and <span className="text-pink-300">internship coordination</span>, 
              I’ve mentored <strong className="text-purple-200">100+ students</strong> and collaborated with premier institutions like MIT ADT.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-100">
          {/* Core Competencies */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gradient-to-br from-purple-700/40 to-indigo-700/40 border border-white/20 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-purple-400/30 transition-shadow"
          >
            <h4 className="text-xl md:text-2xl font-semibold text-white mb-4 border-b border-white/20 pb-2">
              Core Competencies
            </h4>
            <ul className="list-disc list-inside space-y-2 text-white/90 text-base leading-relaxed">
              <li>Entrepreneurship & Innovation</li>
              <li>Team Leadership & Mentorship</li>
              <li>Frontend Dev (React, JS, HTML5, CSS)</li>
              <li>Strategic Job Search Coaching</li>
              <li>Project & Internship Management</li>
            </ul>
          </motion.div>

          {/* Quick Facts */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gradient-to-br from-blue-800/40 to-cyan-600/40 border border-white/20 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-indigo-400/30 transition-shadow"
          >
            <h4 className="text-xl md:text-2xl font-semibold text-white mb-4 border-b border-white/20 pb-2">
              Quick Facts
            </h4>
            <ul className="list-disc list-inside space-y-2 text-white/90 text-base leading-relaxed">
              <li>🎓 BCA from Dr. BAMU, Tulsi College</li>
              <li>🤝 Partnered with MIT ADT & Cait Pvt Ltd</li>
              <li>🌐 Seeking new tech collaborations</li>
              <li>🧠 E-learning Influencer & Career Guide</li>
              <li>🗣️ Fluent in Marathi, Hindi & English</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
