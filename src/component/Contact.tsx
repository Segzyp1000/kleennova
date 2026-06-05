import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
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

  return (
    <section
      id="contact"
      className="relative bg-[#f8fafc] py-28 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-200/40 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/40 blur-[140px] rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-cyan-600 uppercase tracking-[4px] text-sm font-semibold">
            Contact Us
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">
            Let’s Talk About Your Cleaning Needs
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Send us a message and our team will respond quickly with a tailored
            cleaning solution for your home or business.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            {[
              {
                icon: Phone,
                title: "Phone",
                text: "+234 800 000 0000",
              },
              {
                icon: Mail,
                title: "Email",
                text: "support@yourcleaningbrand.com",
              },
              {
                icon: MapPin,
                title: "Location",
                text: "Lagos, Nigeria",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-5 p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="w-14 h-14 rounded-xl bg-cyan-100 flex items-center justify-center">
                    <Icon className="text-cyan-600" size={26} />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-10 lg:p-0 p-3"
          >
            {/* Name */}
            <div className="group relative">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full bg-transparent border-b border-gray-300 
    py-4 text-lg text-gray-900 outline-none transition-all duration-300
    placeholder:text-gray-400
    group-hover:border-cyan-500
    focus:border-cyan-500"
              />

              {/* Animated Line */}
              <span
                className="absolute left-0 bottom-0 h-[2px] w-0 bg-cyan-500 
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
                className="w-full bg-transparent border-b border-gray-300 
    py-4 text-lg text-gray-900 outline-none transition-all duration-300
    placeholder:text-gray-400
    group-hover:border-cyan-500
    focus:border-cyan-500"
              />

              <span
                className="absolute left-0 bottom-0 h-[2px] w-0 bg-cyan-500 
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
                placeholder="Tell us what you need..."
                className="w-full bg-transparent 
    py-4 text-lg text-gray-900 outline-none resize-none
    placeholder:text-gray-400"
              />

              {/* Base Line */}
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gray-300" />

              {/* Animated Hover/Focus Line */}
              <span
                className="absolute left-0 bottom-0 h-[2px] w-0 bg-cyan-500
    transition-all duration-300
    group-hover:w-full
    group-focus-within:w-full"
              />
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl text-gray-900 bg-cyan-400 hover:bg-cyan-200 py-5 px-7 font-semibold text-lg hover:gap-4 transition-all duration-300"
            >
              Send Message <Send size={18} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
