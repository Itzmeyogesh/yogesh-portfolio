import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="w-full flex justify-center items-center px-4 py-16 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">
      <div className="w-full max-w-4xl bg-white text-gray-800 rounded-xl shadow-2xl p-8 md:p-12">
        <h2 className="text-4xl font-extrabold text-center text-purple-700 mb-10">Contact Me</h2>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="flex items-center gap-4">
            <FaPhone className="text-xl text-purple-600" />
            <span className="text-lg font-medium">+91 9518568806</span>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-xl text-purple-600" />
            <span className="text-lg font-medium">maskeyogeish@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaLinkedin className="text-xl text-purple-600" />
            <a
              href="https://linkedin.com/in/Yogeshmaske95"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-purple-700 hover:underline"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FaGithub className="text-xl text-purple-600" />
            <a
              href="https://github.com/Itzmeyogesh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-purple-700 hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-semibold text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-semibold text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-semibold text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message..."
              required
              className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-3 text-lg rounded-lg font-semibold hover:bg-purple-800 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
