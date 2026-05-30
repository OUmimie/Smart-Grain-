import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "../data/navigation";
import { useScrollPosition } from "../hooks/useScrollPosition";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 50;
  const isOnHero = activeSection === "accueil" && !isScrolled;

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass shadow-lg shadow-industrial-500/5 py-3"
          : isOnHero
            ? "bg-black/25 backdrop-blur-sm py-5"
            : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a
          href="#accueil"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#accueil");
          }}
          className="flex items-center gap-3 group"
        >
          <Logo className="w-10 h-10 group-hover:scale-105 transition-transform" />
          <div className="hidden sm:block">
            <span
              className={`font-display font-semibold text-sm leading-tight block transition-colors ${
                isOnHero ? "text-white" : "text-industrial-700"
              }`}
            >
              SmartGrain
            </span>
            <span
              className={`text-xs transition-colors ${
                isOnHero ? "text-sand-200/80" : "text-industrial-400"
              }`}
            >
              Sable → Verre
            </span>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeSection === link.href.replace("#", "")
                    ? isOnHero
                      ? "bg-white/20 text-white ring-1 ring-white/30"
                      : "bg-industrial-600 text-white"
                    : isOnHero
                      ? "text-white/90 hover:text-white hover:bg-white/10"
                      : "text-industrial-500 hover:text-industrial-700 hover:bg-white/50"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#contact");
          }}
          className="hidden lg:inline-flex btn-primary text-sm !py-2.5 !px-5"
        >
          Nous contacter
        </a>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
            isOnHero
              ? "bg-white/10 text-white hover:bg-white/20"
              : "glass text-industrial-600"
          }`}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-white/40 mt-2 mx-4 rounded-2xl overflow-hidden"
          >
            <ul className="py-4 px-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="block px-4 py-3 rounded-xl text-industrial-600 font-medium hover:bg-white/60 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="px-4 pt-2">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#contact");
                  }}
                  className="btn-primary w-full text-center"
                >
                  Nous contacter
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
