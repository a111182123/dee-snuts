import { motion } from "motion/react";
import { educationData, languages } from "../data";
import { GraduationCap, Languages } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="col-span-1 md:col-span-8 row-span-2 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col md:flex-row gap-8">
      {/* Education */}
      <motion.div
        className="flex-1 space-y-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold uppercase text-xs tracking-[0.2em] text-zinc-500">Education</h3>
        </div>
        <div className="space-y-4">
          {educationData.map((edu, idx) => (
            <div key={idx} className="p-5 rounded-2xl border border-zinc-800 bg-zinc-950 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
              <div className="text-[10px] font-mono text-indigo-400 mb-1 tracking-widest">{edu.period}</div>
              <h3 className="text-base font-bold text-white mb-0.5">{edu.school}</h3>
              <div className="text-xs text-zinc-400">{edu.department}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Languages */}
      <motion.div
        className="flex-1 space-y-4"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold uppercase text-xs tracking-[0.2em] text-zinc-500">Languages</h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {languages.map((lang, idx) => (
            <div key={idx} className="p-4 rounded-2xl border border-zinc-800 flex flex-col items-center justify-center text-center gap-1.5 hover:bg-zinc-800 hover:border-zinc-700 transition-colors bg-zinc-950">
              <span className="text-lg font-bold text-white">{lang.name}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 bg-indigo-500/10 text-indigo-400 rounded-sm border border-indigo-500/20">
                {lang.level}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
