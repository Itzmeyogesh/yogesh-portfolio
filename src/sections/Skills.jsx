import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    { category: 'Frontend', list: ['HTML5', 'CSS', 'JavaScript', 'React JS'] },
    { category: 'Project & Training', list: ['Mentorship', 'Team Management', 'Internship Coordination'] },
    { category: 'Tools & Platforms', list: ['GitHub', 'LinkedIn', 'NCS Portal', 'Git'] },
    { category: 'Backend & Development', list: ['Node.js'] },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-indigo-100 p-10 rounded-3xl shadow-2xl max-w-4xl mx-auto"
    >
      <div className="absolute top-0 right-10 w-40 h-40 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-10 -left-10 w-52 h-52 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-ping"></div>

      <h2 className="text-4xl font-extrabold text-purple-800 mb-6 drop-shadow">Skills & Expertise</h2>

      <div className="grid md:grid-cols-2 gap-8 text-gray-800">
        {skills.map((skillGroup, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.list.map((skill) => (
                <span
                  key={skill}
                  className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow-md hover:bg-purple-200 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
