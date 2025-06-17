import { motion } from 'framer-motion';
import { FaBullseye } from 'react-icons/fa'; // ✅ Updated icon

const skills = [
  { category: 'Frontend', list: ['HTML5', 'CSS', 'JavaScript', 'React JS'] },
  {
    category: 'Project & Training',
    list: ['Mentorship', 'Team Management', 'Internship Coordination'],
  },
  { category: 'Tools & Platforms', list: ['GitHub', 'LinkedIn', 'NCS Portal', 'Git'] },
  { category: 'Backend & Development', list: ['Node.js'] },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      role="region"
      aria-labelledby="skills-heading"
      className="relative py-24 px-6 md:px-12 font-poppins text-gray-100 max-w-7xl mx-auto"
    >
      {/* Floating Gradient Glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px] animate-pulse-slower" />
      </div>

      {/* Content Box */}
      <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-12">
        <h2
          id="skills-heading"
          className="text-4xl sm:text-5xl font-bold text-white mb-14 text-center tracking-wide drop-shadow-lg flex justify-center items-center gap-4"
        >
          <FaBullseye className="text-purple-300 drop-shadow-md animate-pulse" />
          <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-200 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-14 text-gray-200">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-purple-200 mb-4 tracking-wide border-b border-purple-400 pb-1">
                {skillGroup.category}
              </h3>

              <ul className="flex flex-wrap gap-3">
                {skillGroup.list.map((skill) => (
                  <motion.li
                    key={skill}
                    whileHover={{
                      scale: 1.08,
                      rotate: 2,
                      backgroundColor: 'rgba(167,139,250,0.3)',
                      boxShadow: '0 0 12px rgba(139,92,246,0.6)',
                    }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="bg-gradient-to-br from-purple-700/30 to-purple-900/30 text-purple-100 px-4 py-1 rounded-full text-sm font-medium cursor-default select-none shadow-sm list-none backdrop-blur-md"
                    title={skill}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
