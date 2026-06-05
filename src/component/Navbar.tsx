import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Testimonials", path: "testimonials" },
    { name: "How We Work", path: "how-we-work" },
    { name: "Services", path: "services" },
    { name: "Contact", path: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#020617]/95 backdrop-blur-xl border-b border-white/10 shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link
                to="hero"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer text-xl font-bold tracking-wide text-white"
              >
                Kleen<span className="text-cyan-400">Nova</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    activeClass="text-cyan-400"
                    className="group relative cursor-pointer text-white font-medium text-sm uppercase tracking-wider transition-colors duration-300"
                  >
                    {link.name}

                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="hidden lg:block cursor-pointer px-5 py-2.5 rounded-full bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition-all duration-300"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden text-white"
            >
              <Menu size={30} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 24,
                stiffness: 250,
              }}
              className="fixed top-0 right-0 h-screen w-[80%] max-w-sm bg-[#020617] border-l border-white/10 z-50 p-8"
            >
              <div className="flex items-center justify-between mb-16">
                <h2 className="text-2xl font-bold text-white">
                  Kleen<span className="text-cyan-400">Nova</span>
                </h2>

                <button onClick={() => setIsOpen(false)}>
                  <X className="text-white" size={28} />
                </button>
              </div>

              <div className="flex flex-col gap-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      activeClass="text-cyan-400"
                      onClick={() => setIsOpen(false)}
                      className="cursor-pointer text-lg text-gray-300 hover:text-cyan-400 transition duration-300"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div whileTap={{ scale: 0.95 }}>
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setIsOpen(false)}
                    className="mt-6 w-full flex items-center justify-center py-3 rounded-full bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition cursor-pointer"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
