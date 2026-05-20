import { motion } from "motion/react";
import { profileData } from "../data";
import { Mail, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="col-span-1 md:col-span-4 row-span-2 bg-indigo-600 border border-indigo-500 rounded-3xl p-8 relative overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Decorative background blocks */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-black/20 rounded-full blur-3xl" />

      <div className="relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-300 mb-2">Let's Connect</div>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-white">與我聯絡</h2>
          <p className="text-indigo-100 text-sm mb-6 max-w-sm mx-auto opacity-80 leading-relaxed">
            期待有機會能為貴團隊貢獻一份心力。
          </p>

          <div className="flex flex-col gap-3 mb-8">
            <a 
              href={`mailto:${profileData.email}`}
              className="flex items-center gap-3 bg-white text-black hover:bg-zinc-100 transition-colors px-6 py-3 rounded-xl font-bold text-sm w-full justify-center shadow-lg"
            >
              <Mail size={16} />
              Email Me
            </a>
            
            <a 
              href="tel:0800000123"
              className="flex items-center gap-3 bg-indigo-700/50 hover:bg-indigo-700 transition-colors px-6 py-3 rounded-xl font-bold text-sm border border-indigo-500/30 w-full justify-center text-white"
            >
              <Phone size={16} />
              0800-000-123
            </a>
          </div>

          <div className="flex items-center justify-center gap-4">
            {profileData.socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 hover:text-white rounded-xl flex items-center justify-center hover:bg-indigo-500/40 transition-colors"
                  aria-label={social.name}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
