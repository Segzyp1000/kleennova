import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const items = [
    { name: "Testimonials", path: "testimonials" },
    { name: "How We Work", path: "how-we-work" },
    { name: "Services", path: "services" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <footer className="relative bg-[#020617] overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 blur-[140px] rounded-full" />

      <div className="max-w-5xl mx-auto px-6">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative -mt-10 bg-gradient-to-r from-cyan-600 to-cyan-500 rounded-[2rem] p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Ready For A Cleaner Space?
            </h2>

            <p className="mt-4 text-cyan-50 max-w-xl text-lg">
              Whether it's your home, office, or commercial property, we're
              ready to deliver exceptional cleaning services.
            </p>
          </div>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="group cursor-pointer px-8 py-4 bg-white text-cyan-700 rounded-full font-semibold flex items-center gap-2 hover:gap-4 transition-all duration-300"
          >
            Book A Service
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>

        {/* Main Footer */}
        <div className="grid lg:grid-cols-4 gap-12 py-24 xl:px-9 px-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer text-4xl font-bold text-white"
            >
              Kleen<span className="text-cyan-400">Nova</span>
            </Link>

            <p className="mt-6 text-gray-400 max-w-md leading-relaxed">
              Professional cleaning services for homes, offices, construction
              sites, and commercial properties. Delivering spotless results with
              reliability, professionalism, and excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {items.map((item) => (
                <li                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                key={item.name}>
                  <Link
                    to={item.path}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    activeClass="text-cyan-400"
                    className="cursor-pointer text-gray-400 hover:text-cyan-400 transition duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-cyan-400 mt-1" />
                <span className="text-gray-400">+234 800 000 0000</span>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={18} className="text-cyan-400 mt-1" />
                <span className="text-gray-400">hello@kleennova.com</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-cyan-400 mt-1" />
                <span className="text-gray-400">Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} KleenNova. All rights reserved.
          </p>

          <div className="flex gap-6">
            <button className="text-gray-500 hover:text-cyan-400 text-sm transition">
              Privacy Policy
            </button>

            <button className="text-gray-500 hover:text-cyan-400 text-sm transition">
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}