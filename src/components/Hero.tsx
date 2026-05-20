import { motion } from "motion/react";
import { profileData } from "../data";
import { User } from "lucide-react";

export function Hero() {
  return (
    <section 
      id="hero" 
      className="col-span-1 md:col-span-8 row-span-4 bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden relative group p-8 md:p-12 min-h-[400px] flex items-center"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>
      <div className="relative z-20 flex flex-col md:flex-row items-center gap-12 w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-zinc-800 overflow-hidden flex items-center justify-center border-4 border-zinc-900 shadow-xl relative z-20">
            <img 
              src="https://lh3.googleusercontent.com/d/1m67fWklYpht24_-WUffdiCvUI1ddp8Qs" 
              alt="Profile" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center shadow-lg animate-pulse backdrop-blur-sm border border-indigo-500/30" />
          <div className="absolute top-2 -left-6 w-10 h-10 bg-indigo-400/20 rounded-full flex items-center justify-center shadow-md animate-bounce border border-indigo-400/30" style={{ animationDuration: '3s' }} />
        </motion.div>

        <div className="flex-1 text-center md:text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2">
              {profileData.name} <span className="font-light text-zinc-600">|</span> <span className="text-2xl md:text-3xl font-medium text-zinc-400">{profileData.nameEn}</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-2 justify-center md:justify-start"
          >
            {profileData.titles.map((title) => (
              <span key={title} className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-xs font-bold uppercase tracking-widest border border-zinc-700">
                {title}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-2 justify-center md:justify-start"
          >
            {profileData.tags.map((tag) => (
              <span key={tag} className="text-zinc-500 text-sm">
                {tag} <span className="text-zinc-700 mx-1">•</span>
              </span>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-indigo-400 font-mono text-sm"
          >
            {profileData.email}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-3 justify-center md:justify-start pt-2"
          >
            {profileData.socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-indigo-400 hover:border-indigo-500/50 hover:bg-zinc-700 transition-all group"
                  aria-label={social.name}
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
