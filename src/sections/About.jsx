import { motion } from 'framer-motion';
import profileImg from '../assets/Profile.jpg'; // Ensure the path is correct

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative py-24 px-6 md:px-12 overflow-hidden font-poppins text-white bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]"
    >
      {/* Background Grid Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:18px_18px] opacity-20 z-0 pointer-events-none animate-pulse" />

      {/* Floating Blobs */}
      <div className="absolute top-0 -left-32 w-96 h-96 bg-purple-700 rounded-full mix-blend-color-dodge blur-3xl opacity-30 animate-blob" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-indigo-700 rounded-full mix-blend-color-dodge blur-3xl opacity-30 animate-blob animation-delay-4000" />

      {/* Glass Effect Box */}
      <div className="relative z-10 max-w-6xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] p-10 md:p-16 hover:shadow-[0_12px_40px_rgba(128,90,213,0.25)] transition-all duration-500">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image with Glow Ring */}
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 blur opacity-70 group-hover:scale-105 transition-transform duration-300"></div>
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src={profileImg}
                alt="Yogesh Maske"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-5xl font-extrabold text-white drop-shadow-md leading-tight mb-4">
              About Me
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl tracking-wide">
              Hi! I’m <span className="font-bold text-purple-300">Yogesh Maske</span>, founder & innovator behind <strong className="text-indigo-300">Technical One</strong>. 
              As an entrepreneur and e-learning influencer, I specialize in shaping future-ready talent through tech education, mentorship, and strategic job placement. 
              I've led and mentored <span className="text-pink-300 font-semibold">100+ interns</span>, worked alongside top institutions like MIT ADT, and actively seek 
              impactful collaborations. With a strong foundation in web development, team coordination, and career strategy, I'm dedicated to driving innovation 
              and empowering others to succeed.
            </p>
          </div>
        </div>

        {/* Info Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-100">
          <motion.div
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gradient-to-br from-[#5f72be]/70 to-[#9921e8]/70 border border-white/20 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-purple-400/30 transition-shadow"
          >
            <h4 className="text-xl font-bold text-white mb-2">Core Competencies</h4>
            <ul className="list-disc list-inside space-y-2 text-white/90">
              <li>Entrepreneurship & Innovation</li>
              <li>Team Leadership & Mentorship</li>
              <li>Frontend Dev (React, JS, HTML5, CSS)</li>
              <li>Strategic Job Search Coaching</li>
              <li>Project & Internship Management</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gradient-to-br from-[#1a2980]/70 to-[#26d0ce]/70 border border-white/20 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-indigo-400/30 transition-shadow"
          >
            <h4 className="text-xl font-bold text-white mb-2">Quick Facts</h4>
            <ul className="list-disc list-inside space-y-2 text-white/90">
              <li>🎓 BCA from Dr. BAMU, Tulsi College</li>
              <li>🤝 Partnered with MIT ADT & Cait Pvt Ltd</li>
              <li>🌐 Actively seeking new collaborations</li>
              <li>🧠 E-learning Influencer & Career Guide</li>
              <li>🗣️ Fluent in Marathi, Hindi & English</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
