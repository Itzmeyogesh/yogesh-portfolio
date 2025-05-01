import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-br from-white via-purple-50 to-indigo-100 p-10 rounded-3xl shadow-2xl max-w-4xl mx-auto"
    >
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-ping"></div>

      <h2 className="text-4xl font-extrabold text-purple-700 mb-6 drop-shadow">About Me</h2>

      <p className="text-lg text-gray-800 leading-relaxed">
        Hi! I’m <span className="font-semibold text-purple-800">Yogesh Maske</span>, founder of <strong>Technical One</strong>. I specialize in team management, project coordination,
        and tech training. With over a decade of experience, I’ve guided 100+ interns, collaborated with leading organizations,
        and built pathways for candidates to step confidently into the tech world.
      </p>

      <div className="mt-6 grid md:grid-cols-2 gap-6 text-gray-700">
        <div>
          <h4 className="font-semibold text-indigo-700">Core Competencies:</h4>
          <ul className="list-disc list-inside mt-2">
            <li>Team Leadership & Mentorship</li>
            <li>Frontend Web Development (React, JS, HTML5, CSS)</li>
            <li>Project Coordination & Internship Management</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-indigo-700">Quick Facts:</h4>
          <ul className="list-disc list-inside mt-2">
            <li>🎓 BCA from Dr. BAMU, Tulsi College</li>
            <li>🤝 Partnered with MIT ADT University & Cait Pvt Ltd</li>
            <li>🗣️ Languages: Marathi, Hindi, English</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
