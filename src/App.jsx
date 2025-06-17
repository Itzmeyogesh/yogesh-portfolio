import { motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Home from './sections/Home';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden bg-gradient-to-tr from-black to-purple-900 text-white">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main
        className="flex-1 w-full h-screen overflow-y-auto p-4 sm:p-6 lg:p-10 
        scroll-smooth scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-black bg-black text-white 
        space-y-10 sm:space-y-12 lg:space-y-16"
      >
        {/* Home */}
        <motion.section
          id="home"
          className="py-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Home />
        </motion.section>

        {/* About */}
        <motion.section
          id="about"
          className="py-16"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <About />
        </motion.section>

        {/* Experience */}
        <motion.section
          id="experience"
          className="py-16"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Experience />
        </motion.section>

        {/* Skills */}
        <motion.section
          id="skills"
          className="py-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Skills />
        </motion.section>

        {/* Contact */}
        <motion.section
          id="contact"
          className="py-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Contact />
        </motion.section>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
