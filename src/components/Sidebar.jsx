import { useState, useEffect } from "react";
import { FaHome, FaUser, FaBriefcase, FaCode, FaEnvelope, FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { id: "home", label: "Home", icon: <FaHome /> },
  { id: "about", label: "About", icon: <FaUser /> },
  { id: "experience", label: "Experience", icon: <FaBriefcase /> },
  { id: "skills", label: "Skills", icon: <FaCode /> },
  { id: "contact", label: "Contact", icon: <FaEnvelope /> },
];

export default function Sidebar() {
  const [activeId, setActiveId] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const handleScroll = () => {
    const sections = navItems.map((item) => document.getElementById(item.id));
    let activeSection = "";

    sections.forEach((section) => {
      if (section && section.getBoundingClientRect().top <= 100) {
        activeSection = section.id;
      }
    });

    setActiveId(activeSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="fixed top-4 left-4 z-[999] p-2 rounded-full bg-white/10 backdrop-blur-md shadow-md text-white hover:bg-white/20 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars className="text-xl" />
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 70 }}
            className="fixed top-0 left-0 h-screen w-20 flex flex-col items-center py-6 z-50 
            bg-white/10 backdrop-blur-lg border-r border-white/20 shadow-xl 
            md:flex md:w-20 md:rounded-none rounded-r-3xl"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`group my-3 text-white flex flex-col items-center text-sm transition-all duration-300 
                  hover:scale-110 ${activeId === item.id ? "text-yellow-300" : "hover:text-pink-400"}`}
              >
                <div
                  className={`text-2xl p-3 rounded-xl transition-all duration-300 
                    ${activeId === item.id
                      ? "bg-gradient-to-br from-pink-500 to-yellow-400 text-white shadow-xl animate-pulse"
                      : "bg-white/10 hover:bg-white/20"}`}
                >
                  {item.icon}
                </div>
                <span
                  className={`mt-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 text-[10px] transition-all duration-300 ${
                    activeId === item.id ? "opacity-100" : ""
                  }`}
                >
                  {item.label}
                </span>
              </a>
            ))}
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
