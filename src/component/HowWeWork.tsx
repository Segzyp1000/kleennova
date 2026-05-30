import { motion } from "framer-motion";
import {
  Building2,
  Home,
  Sparkles,
  Sofa,
  Hammer,
  ShieldCheck,
} from "lucide-react";

const workSteps = [
  {
    title: "Corporate Cleaning Staff Recruitment",
    icon: Building2,
    description:
      "We recruit and manage professionally trained cleaners for offices, companies, and commercial spaces while providing all cleaning materials needed.",
  },
  {
    title: "Monthly Home Cleaning Subscription",
    icon: Home,
    description:
      "A stress-free monthly cleaning package for busy individuals and families who want their homes consistently neat and fresh.",
  },
  {
    title: "Deep Kitchen & Toilet Cleaning",
    icon: Sparkles,
    description:
      "We remove stubborn stains, grease, dirt, and germs from kitchens and bathrooms, leaving them sparkling clean and sanitized.",
  },
  {
    title: "Sofa Rejuvenation",
    icon: Sofa,
    description:
      "Professional sofa cleaning service that restores freshness, comfort, and beauty to old or stained sofas.",
  },
  {
    title: "Post-Construction Cleaning",
    icon: Hammer,
    description:
      "We transform dusty construction sites into spotless, livable, and welcoming spaces ready for occupancy.",
  },
  {
    title: "Fumigation Services",
    icon: ShieldCheck,
    description:
      "Safe and effective fumigation solutions that eliminate pests, rodents, insects, and cockroaches from homes and workplaces.",
  },
];

export default function HowWeWork() {
  return (
    <section
      id="how"
      className="relative bg-[#f8fafc] py-28 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-200/40 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/40 blur-[140px] rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-cyan-600 uppercase tracking-[4px] text-sm font-semibold">
            How We Work
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">
            Professional Cleaning Solutions Tailored For You
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            We provide reliable, professional, and high-quality cleaning
            services designed for homes, offices, businesses, and commercial
            spaces across Lagos.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 w-[2px] h-full bg-gray-200 -translate-x-1/2" />

          <div className="space-y-16">
            {workSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div className="w-full md:w-1/2">
                    <div className="group relative bg-white border border-gray-200 rounded-3xl p-8 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-100 transition duration-500 overflow-hidden">
                      {/* Hover Glow */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-100/40 to-blue-100/40" />

                      <div className="relative z-10">
                        {/* Icon */}
                        <div className="w-16 h-16 rounded-2xl bg-cyan-100 border border-cyan-200 flex items-center justify-center">
                          <Icon className="text-cyan-600" size={30} />
                        </div>

                        {/* Title */}
                        <h3 className="mt-6 text-2xl font-bold text-gray-900">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-4 text-gray-600 leading-relaxed text-lg">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-cyan-500 border-4 border-[#f8fafc] shadow-[0_0_20px_rgba(34,211,238,0.4)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
