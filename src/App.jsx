import { motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Home from './sections/Home';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden bg-gradient-to-tr from-gray-50 to-purple-100">

      {/* ✅ Always render Sidebar — let it handle responsiveness */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 w-full h-screen overflow-y-auto p-6 lg:p-10 space-y-24 scroll-smooth scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-purple-200">
        
        {/* Home Section */}
        <motion.section
          id="home"
          className="min-h-screen"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Home />
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          className="min-h-screen"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <About />
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          className="min-h-screen"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Experience />
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="min-h-screen"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Skills />
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="min-h-screen"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Contact />
        </motion.section>

      </main>
    </div>
  );
}

export default App;
