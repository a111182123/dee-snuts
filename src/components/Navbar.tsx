import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

const navLinks = [
  { name: "首頁", id: "hero" },
  { name: "關於我", id: "about" },
  { name: "工作經歷", id: "experience" },
  { name: "作業 (紐約行程)", id: "itinerary" },
  { name: "3D 作業", id: "models" },
  { name: "學歷與語言", id: "education" },
  { name: "與我聯絡", id: "contact" },
];

export function Navbar() {
  const [activeId, setActiveId] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active section detection
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveId(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled
          ? "bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800 shadow-xl"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#hero" 
          onClick={(e) => handleClick(e, "hero")}
          className="text-xl font-bold tracking-tighter text-white"
        >
          YU MU
        </a>
        <nav className="hidden md:flex items-center space-x-1 border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm rounded-full px-2 py-1 shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleClick(e, link.id)}
              className={cn(
                "relative px-4 py-2 text-sm font-medium rounded-full transition-colors",
                activeId === link.id
                  ? "text-white"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800"
              )}
            >
              {activeId === link.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-indigo-600 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
