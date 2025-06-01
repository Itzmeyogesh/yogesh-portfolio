import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
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
        className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-xl p-12 max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-extrabold text-white mb-12 text-center tracking-wide drop-shadow-lg">
          Contact Me
        </h2>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 text-purple-300">
          <div className="flex items-center gap-4">
            <FaPhone className="text-2xl text-purple-400" />
            <span className="text-lg font-medium">+91 9518568806</span>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-2xl text-purple-400" />
            <span className="text-lg font-medium">maskeyogeish@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaLinkedin className="text-2xl text-purple-400" />
            <a
              href="https://linkedin.com/in/Yogeshmaske95"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-purple-300 hover:text-purple-100 hover:underline transition"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FaGithub className="text-2xl text-purple-400" />
            <a
              href="https://github.com/Itzmeyogesh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-purple-300 hover:text-purple-100 hover:underline transition"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-semibold text-purple-200">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              className="mt-2 w-full px-4 py-3 rounded-lg border border-purple-600 bg-white/10 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-semibold text-purple-200">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="mt-2 w-full px-4 py-3 rounded-lg border border-purple-600 bg-white/10 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-semibold text-purple-200">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message..."
              required
              className="mt-2 w-full px-4 py-3 rounded-lg border border-purple-600 bg-white/10 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-700 bg-opacity-90 text-white py-3 text-lg rounded-lg font-semibold hover:bg-purple-800 transition-all duration-300 shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
}
