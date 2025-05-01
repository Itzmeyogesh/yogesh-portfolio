import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-100 p-10 rounded-3xl shadow-2xl max-w-4xl mx-auto"
    >
      <div className="absolute top-10 right-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-ping"></div>

      <h2 className="text-4xl font-extrabold text-indigo-800 mb-8 drop-shadow">Professional Experience</h2>

      <div className="space-y-8 text-gray-800">
        <div>
          <h3 className="text-xl font-semibold text-purple-700">Founder – Technical One <span className="text-sm text-gray-500">(Jun 2024 – Present)</span></h3>
          <ul className="list-disc list-inside mt-2 ml-2">
            <li>Led a team of mentors, trainers, and coordinators.</li>
            <li>Posted job openings on LinkedIn and NCS portals.</li>
            <li>Managed end-to-end candidate tracking and alignment.</li>
            <li>Conducted interviews and provided internship certifications.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-purple-700">Business Analyst – Atidiv <span className="text-sm text-gray-500">(Sep 2019 – Jan 2021)</span></h3>
          <ul className="list-disc list-inside mt-2 ml-2">
            <li>Handled customer queries and support tickets.</li>
            <li>Maintained client satisfaction through proactive communication.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-purple-700">Computer Instructor – IL&FS Education Ltd <span className="text-sm text-gray-500">(Dec 2013 – Jun 2015)</span></h3>
          <ul className="list-disc list-inside mt-2 ml-2">
            <li>Delivered ICT training programs to school and college students.</li>
            <li>Coordinated practical sessions and curriculum delivery.</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
