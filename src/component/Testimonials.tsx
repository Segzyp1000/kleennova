import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    review:
      "KleenNova transformed my home completely. Their attention to detail is exceptional, and my house has never looked this spotless.",
  },
  {
    name: "Michael Adeyemi",
    role: "Business Owner",
    review:
      "We've outsourced our office cleaning to KleenNova for over a year now. Professional team, reliable service, and zero headaches.",
  },
  {
    name: "Chioma Okafor",
    role: "Property Manager",
    review:
      "Their post-construction cleaning service exceeded expectations. The property was move-in ready within hours.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonial"
      className="relative bg-[#f8fafc] py-28 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200/30 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/30 blur-[140px] rounded-full" />

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
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">
            Trusted By Homes & Businesses
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            See what our clients say about our commitment to quality,
            professionalism, and exceptional cleaning services.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group bg-white border border-gray-200 rounded-3xl p-8 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-100 transition-all duration-500"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-cyan-500 text-cyan-500"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 leading-relaxed text-lg">
                "{testimonial.review}"
              </p>

              {/* User */}
              <div className="mt-8 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>

                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24"
        >
          {[
            { number: "500+", label: "Happy Clients" },
            { number: "1,200+", label: "Projects Completed" },
            { number: "98%", label: "Client Retention" },
            { number: "5★", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <h3 className="text-4xl font-extrabold text-cyan-600">
                {stat.number}
              </h3>
              <p className="mt-2 text-gray-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
