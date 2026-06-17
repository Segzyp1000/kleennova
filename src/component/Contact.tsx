import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Element } from "react-scroll";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  const contactItems = [
    { icon: Phone, title: "Phone", text: "+234 800 000 0000" },
    { icon: Mail, title: "Email", text: "support@yourcleaningbrand.com" },
    { icon: MapPin, title: "Location", text: "Lagos, Nigeria" },
  ];

  return (
    <Element name="contact">
      <section className="relative bg-[#f8fafc] py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-cyan-200/40 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-blue-200/40 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <p className="text-cyan-600 uppercase tracking-[3px] sm:tracking-[4px] text-xs sm:text-sm font-semibold">
              Contact Us
            </p>

            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight px-2">
              Let's Talk About Your Cleaning Needs
            </h2>

            <p className="mt-4 sm:mt-6 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg px-2">
              Send us a message and our team will respond quickly with a
              tailored cleaning solution for your home or business.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6 md:space-y-8"
            >
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 sm:gap-5 p-4 sm:p-6 hover:shadow-md transition rounded-xl"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl bg-cyan-100 flex items-center justify-center">
                      <Icon className="text-cyan-600" size={22} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600 truncate">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-8 sm:space-y-10 p-5 sm:p-7 bg-gray-50 shadow-xl border-cyan-400 rounded-2xl border-t-[3px] border-b-[3px]"
            >
              {/* Name */}
              <div className="group relative">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full bg-transparent border-b border-gray-300
                    py-3 sm:py-4 text-base sm:text-lg text-gray-900 outline-none
                    transition-all duration-300 placeholder:text-gray-400
                    group-hover:border-cyan-500 focus:border-cyan-500"
                />
                <span
                  className="absolute left-0 bottom-0 h-0.5 w-0 bg-cyan-500
                    transition-all duration-300
                    group-hover:w-full group-focus-within:w-full"
                />
              </div>

              {/* Email */}
              <div className="group relative">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-transparent border-b border-gray-300
                    py-3 sm:py-4 text-base sm:text-lg text-gray-900 outline-none
                    transition-all duration-300 placeholder:text-gray-400
                    group-hover:border-cyan-500 focus:border-cyan-500"
                />
                <span
                  className="absolute left-0 bottom-0 h-0.5 w-0 bg-cyan-500
                    transition-all duration-300
                    group-hover:w-full group-focus-within:w-full"
                />
              </div>

              {/* Message */}
              <div className="group relative">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us what your cleaning needs......"
                  className="w-full bg-transparent
                    py-3 sm:py-4 text-base sm:text-lg text-gray-900 outline-none
                    resize-none placeholder:text-gray-400"
                />
                <span className="absolute left-0 bottom-0 w-full h-px bg-gray-300" />
                <span
                  className="absolute left-0 bottom-0 h-0.5 w-0 bg-cyan-500
                    transition-all duration-300
                    group-hover:w-full group-focus-within:w-full"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl
                  text-gray-900 bg-cyan-400 hover:bg-cyan-200
                  py-4 sm:py-5 px-6 sm:px-7
                  font-semibold text-base sm:text-lg
                  hover:gap-4 transition-all duration-300 w-full"
              >
                Send Message <Send size={18} />
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>
    </Element>
  );
}
