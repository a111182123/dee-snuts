import { motion } from "motion/react";
import { profileData } from "../data";

export function About() {
  return (
    <section id="about" className="col-span-1 md:col-span-4 row-span-2 bg-indigo-600 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors pointer-events-none" />
      <div className="relative z-10">
        <div className="text-indigo-200 mb-4 opacity-50">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-base leading-relaxed font-medium text-white italic">
            "{profileData.about}"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
