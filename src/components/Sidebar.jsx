import { useState, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";
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
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsOpen(!mobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const handleNavClick = () => {
    if (isMobile) {
      if (navigator.vibrate) navigator.vibrate(10);
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Hamburger for Mobile */}
      {isMobile && (
        <button
          className="fixed top-4 left-4 z-[1001] p-2 rounded-full bg-white/10 backdrop-blur-md shadow-md text-white hover:bg-white/20"
          onClick={() => setIsOpen(true)}
        >
          <FaBars className="text-xl" />
        </button>
      )}

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-[1000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 70 }}
            className="fixed top-1/4 left-0 h-1/2 w-16 md:w-16 z-[1001]
              bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl 
              rounded-r-3xl rounded-b-3xl flex flex-col items-center justify-center space-y-3"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={handleNavClick}
                title={item.label}
                className={`group relative text-white flex flex-col items-center text-xs transition-all duration-300 
                ${activeId === item.id ? "text-yellow-300" : "hover:text-pink-400"}`}
              >
                <div
                  className={`text-base p-2 rounded-full transition-transform duration-300 
                    ${
                      activeId === item.id
                        ? "bg-gradient-to-br from-pink-500 to-yellow-400 text-white shadow-xl animate-pulse"
                        : "bg-white/10 hover:bg-white/20 group-hover:scale-110"
                    }`}
                >
                  {item.icon}
                </div>

                {/* Tooltip (desktop only) */}
                <motion.span
                  className="absolute left-14 bg-black text-white text-[10px] font-medium py-1 px-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hidden md:block"
                >
                  {item.label}
                </motion.span>

                {/* Label under icon (mobile or hover) */}
                <span
                  className={`mt-1 text-[9px] opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 
                    ${activeId === item.id ? "opacity-100" : ""}`}
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
