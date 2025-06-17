import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const experienceList = [
  {
    title: "Founder – Technical One",
    date: "(Jun 2024 – Present)",
    color: "text-cyan-300",
    border: "border-cyan-400",
    points: [
      "Led a team of mentors, trainers, and coordinators to build a tech-forward internship platform.",
      "Published job openings on platforms like LinkedIn and NCS to attract diverse talent.",
      "Streamlined candidate management from application to certification.",
      "Conducted technical interviews and issued performance-based internship certifications.",
    ],
  },
  {
    title: "React.js Developer – Atidiv",
    date: "(Sep 2019 – Jan 2021)",
    color: "text-indigo-300",
    border: "border-indigo-500",
    points: [
      "Built responsive, reusable components using React.js and integrated APIs for data-driven UIs.",
      "Optimized customer-facing dashboards, improving performance and accessibility.",
      "Collaborated with backend engineers to align UI/UX with business objectives.",
      "Actively participated in Agile standups, sprint planning, and retrospectives.",
    ],
  },
  {
    title: "React.js Developer – IL&FS Education Ltd",
    date: "(Dec 2013 – Jun 2015)",
    color: "text-purple-300",
    border: "border-purple-500",
    points: [
      "Developed modular frontend components using React.js to deliver interactive ICT-based learning.",
      "Implemented clean UI for student assessment and practicals using HTML5, CSS3, and JS.",
      "Worked closely with educators to integrate learning content seamlessly into the platform.",
      "Conducted hands-on sessions and supported technical troubleshooting for students.",
    ],
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative py-24 px-6 md:px-12 text-white font-poppins"
      style={{
        background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
      }}
    >
      {/* Background Animation */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" aria-hidden="true">
        <defs>
          <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#1d1dff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#b794f4" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#6b46c1" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="30%" cy="25%" r="240" fill="url(#glow1)">
          <animate attributeName="cy" values="25%;30%;25%" dur="12s" repeatCount="indefinite" />
        </circle>
        <circle cx="70%" cy="75%" r="220" fill="url(#glow2)">
          <animate attributeName="cy" values="75%;70%;75%" dur="14s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* Experience Content */}
      <div className="relative z-10 max-w-6xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl p-10 md:p-16">
        <h2
          id="experience-heading"
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center tracking-wide flex justify-center items-center gap-4 animate-pulse"
        >
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            <FaBriefcase className="text-cyan-400 drop-shadow" />
          </motion.span>
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Professional Experience
          </span>
        </h2>

        <div className="space-y-12">
          {experienceList.map(({ title, date, color, border, points }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 100 }}
              className={`bg-black/60 ${border} border rounded-xl p-6 md:p-8 hover:shadow-[0_0_20px_3px_rgba(72,176,255,0.2)] transition duration-300`}
              style={{ backdropFilter: 'blur(16px)' }}
            >
              <h3 className={`text-2xl font-semibold ${color}`}>
                {title}
                <span className="block text-sm text-gray-300 font-light mt-1">{date}</span>
              </h3>
              <ul className="list-disc list-inside mt-6 space-y-3 text-gray-200 leading-relaxed pl-2">
                {points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
