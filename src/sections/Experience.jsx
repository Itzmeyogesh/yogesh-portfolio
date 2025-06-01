import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative py-24 px-6 md:px-12 font-poppins text-gray-900"
      style={{
        background: 'linear-gradient(135deg, #7b5acf 0%, #5e4b8b 50%, #312f4f 100%)',
      }}
    >
      {/* Dynamic Animated SVG Background */}
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

      {/* Container */}
      <div className="relative z-10 max-w-6xl mx-auto bg-white bg-opacity-10 backdrop-blur-md border border-white/20 rounded-3xl shadow-xl p-10 md:p-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12 text-center tracking-wide drop-shadow-lg font-poppins">
          Professional Experience
        </h2>

        <div className="space-y-12">
          {[{
            title: "Founder – Technical One",
            date: "(Jun 2024 – Present)",
            color: "text-purple-300",
            border: "border-purple-400",
            points: [
              "Led a team of mentors, trainers, and coordinators.",
              "Posted job openings on LinkedIn and NCS portals.",
              "Managed end-to-end candidate tracking and alignment.",
              "Conducted interviews and provided internship certifications.",
            ],
          },{
            title: "Business Analyst – Atidiv",
            date: "(Sep 2019 – Jan 2021)",
            color: "text-indigo-300",
            border: "border-indigo-400",
            points: [
              "Handled customer queries and support tickets.",
              "Maintained client satisfaction through proactive communication.",
            ],
          },{
            title: "Computer Instructor – IL&FS Education Ltd",
            date: "(Dec 2013 – Jun 2015)",
            color: "text-purple-300",
            border: "border-purple-400",
            points: [
              "Delivered ICT training programs to school and college students.",
              "Coordinated practical sessions and curriculum delivery.",
            ],
          }].map(({ title, date, color, border, points }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(255,255,255,0.2)' }}
              transition={{ type: 'spring', stiffness: 120 }}
              className={`bg-white/10 ${border} border rounded-3xl p-8 cursor-pointer`}
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <h3 className={`text-2xl font-semibold ${color} tracking-wide`}>
                {title}
                <span className="block text-sm text-gray-300 font-light mt-1">{date}</span>
              </h3>
              <ul className="list-disc list-inside mt-6 space-y-3 text-gray-300 leading-relaxed">
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
