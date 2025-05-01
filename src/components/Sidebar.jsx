import { FaHome, FaUser, FaBriefcase, FaCode, FaEnvelope } from "react-icons/fa";
import { useState, useEffect } from "react";

const navItems = [
  { id: "home", label: "Home", icon: <FaHome /> },
  { id: "about", label: "About", icon: <FaUser /> },
  { id: "experience", label: "Experience", icon: <FaBriefcase /> },
  { id: "skills", label: "Skills", icon: <FaCode /> },
  { id: "contact", label: "Contact", icon: <FaEnvelope /> },
];

export default function Sidebar() {
  const [activeId, setActiveId] = useState("");

  // Scroll handler to highlight the active section
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

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <aside className="fixed top-0 left-0 h-screen w-20 flex flex-col items-center py-8 shadow-2xl z-50 rounded-lg bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-600 bg-opacity-80 backdrop-blur-md transition-all">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`group my-4 text-white flex flex-col items-center text-sm transition-all duration-300 transform hover:scale-110 ${
            activeId === item.id
              ? "text-yellow-400 bg-purple-700 rounded-lg py-2 shadow-2xl"
              : "hover:text-yellow-400"
          }`}
        >
          <div
            className={`text-2xl transition-all duration-300 ${
              activeId === item.id ? "text-yellow-300 glow-effect" : "group-hover:scale-125"
            }`}
          >
            {item.icon}
          </div>
          <span
            className={`opacity-0 group-hover:opacity-100 text-xs transition-all duration-300 ${
              activeId === item.id ? "opacity-100" : ""
            }`}
          >
            {item.label}
          </span>
        </a>
      ))}
    </aside>
  );
}
