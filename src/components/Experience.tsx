import { motion } from "motion/react";
import { workExperience } from "../data";

export function Experience() {
  return (
    <section id="experience" className="col-span-1 md:col-span-4 row-span-4 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <h3 className="font-bold uppercase text-xs tracking-[0.2em] text-zinc-500">Work Experience</h3>
        <span className="text-[10px] text-indigo-400 font-mono">1 RECORD</span>
      </div>

      <div className="space-y-6 flex-1">
        {workExperience.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col gap-2 p-5 bg-white/5 rounded-2xl border border-white/5 group hover:bg-white/10 transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-mono text-indigo-400">{exp.period}</span>
            </div>
            <div>
              <div className="text-base font-semibold text-white mb-1 group-hover:text-indigo-300 transition-colors">{exp.role}</div>
              <div className="text-xs text-zinc-500 flex items-center gap-1.5 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 block" />
                {exp.location}
              </div>
              <p className="text-zinc-400 leading-relaxed text-sm">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
