import { motion } from "framer-motion";
import {
  Sparkles,
  Building2,
  Sofa,
  Home,
  BrushCleaning,
  SprayCan,
} from "lucide-react";
import { Element } from "react-scroll";

const services = [
  {
    title: "Home Cleaning",
    price: "₦25,000",
    icon: Home,
    description:
      "Deep cleaning for apartments, duplexes, and residential spaces.",
  },
  {
    title: "Office Cleaning",
    price: "₦45,000",
    icon: Building2,
    description:
      "Professional workspace cleaning for offices and commercial buildings.",
  },
  {
    title: "Sofa Cleaning",
    price: "₦15,000",
    icon: Sofa,
    description: "Premium fabric and leather sofa cleaning with stain removal.",
  },
  {
    title: "Post Construction",
    price: "₦80,000",
    icon: BrushCleaning,
    description:
      "Detailed cleaning after renovations and construction projects.",
  },
  {
    title: "Fumigation",
    price: "₦35,000",
    icon: SprayCan,
    description: "Safe and effective pest control and fumigation services.",
  },
  {
    title: "Deep Cleaning",
    price: "₦60,000",
    icon: Sparkles,
    description: "Complete top-to-bottom deep cleaning for maximum freshness.",
  },
];

export default function Services() {
  return (
    <Element name="services">
      <section
        id="services"
        className="relative bg-[#f8fafc] py-28 px-6 overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-200/40 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-200/40 blur-[120px] rounded-full" />

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
              Our Services
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">
              Cleaning Solutions For Every Space
            </h2>

            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              We provide professional cleaning services tailored for homes,
              offices, and commercial spaces with premium quality service.
            </p>
          </motion.div>

          {/* Service Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group relative bg-white shadow-4xl border border-gray-300 rounded-3xl p-8 overflow-hidden hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-100 transition duration-500"
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-100/40 to-blue-100/40" />

                  {/* Icon */}
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center border border-cyan-200">
                    <Icon className="text-cyan-600" size={30} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 mt-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                    </div>

                    <p className="mt-4 text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    <button className="mt-8 inline-flex items-center gap-2 text-cyan-600 font-semibold hover:gap-4 transition-all duration-300">
                      Book Service →
                    </button>
                  </div>

                  {/* Border Glow */}
                  <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-cyan-300/40 transition duration-500" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </Element>
  );
}
