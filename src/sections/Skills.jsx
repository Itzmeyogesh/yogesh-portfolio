import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    { category: 'Frontend', list: ['HTML5', 'CSS', 'JavaScript', 'React JS'] },
    { category: 'Project & Training', list: ['Mentorship', 'Team Management', 'Internship Coordination'] },
    { category: 'Tools & Platforms', list: ['GitHub', 'LinkedIn', 'NCS Portal', 'Git'] },
    { category: 'Backend & Development', list: ['Node.js'] },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative py-24 px-6 md:px-12 font-poppins text-gray-100 max-w-6xl mx-auto"
      style={{
        background: 'linear-gradient(135deg, #7b5acf 0%, #5e4b8b 50%, #312f4f 100%)',
      }}
    >
      {/* Animated Background SVG */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#9f7aea" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#5a47a3" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="grad2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6b46c1" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3c366b" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="25%" cy="30%" r="200" fill="url(#grad1)">
          <animate
            attributeName="cx"
            values="20%;30%;20%"
            dur="12s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="25%;35%;25%"
            dur="10s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx="75%" cy="70%" r="180" fill="url(#grad2)">
          <animate
            attributeName="cx"
            values="70%;80%;70%"
            dur="15s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="65%;75%;65%"
            dur="13s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>

      {/* Glass Container */}
      <div
        className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-xl p-12"
        style={{ minHeight: '360px' }}
      >
        <h2 className="text-4xl font-extrabold text-white mb-12 text-center tracking-wide drop-shadow-lg">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-12 text-gray-200">
          {skills.map((skillGroup, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-purple-300 mb-4 tracking-wide">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.list.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1, boxShadow: '0 8px 15px rgba(167,139,250,0.6)' }}
                    transition={{ type: 'spring', stiffness: 150 }}
                    className="bg-purple-800 bg-opacity-40 text-purple-200 px-4 py-1 rounded-full text-sm font-medium cursor-default select-none shadow-md"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
