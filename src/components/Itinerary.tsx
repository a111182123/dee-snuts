import { motion, AnimatePresence } from "motion/react";
import { useState, useRef } from "react";
import { nyItinerary } from "../data";
import { cn } from "../lib/utils";
import { Map, ChevronLeft, ChevronRight } from "lucide-react";

export function Itinerary() {
  const [activeDay, setActiveDay] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="itinerary" className="col-span-1 md:col-span-8 row-span-4 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-8 flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold uppercase text-xs tracking-[0.2em] text-zinc-500">NY Itinerary Plan</h3>
        <span className="text-[10px] text-indigo-400 font-mono">5 DAYS</span>
      </div>

      {/* Day Tabs */}
      <div className="flex items-center gap-2 mb-6">
        <button 
          onClick={() => scroll('left')} 
          className="p-3 bg-zinc-950 border border-zinc-800 rounded-xl text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors shrink-0 outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <ChevronLeft size={18} />
        </button>

        <div ref={scrollRef} className="flex overflow-x-auto gap-2 snap-x scrollbar-hide py-1 flex-1">
          {nyItinerary.map((dayPlan, idx) => (
            <button
              key={dayPlan.day}
              onClick={() => setActiveDay(idx)}
              className={cn(
                "snap-start shrink-0 px-5 py-3 rounded-xl text-left transition-all relative overflow-hidden",
                activeDay === idx
                  ? "bg-indigo-600 text-white"
                  : "bg-zinc-950 text-zinc-400 hover:bg-zinc-800 border border-zinc-800"
              )}
            >
              <div className="font-bold text-sm tracking-wide">{dayPlan.day}</div>
              <div className={cn(
                "text-[10px] mt-1 max-w-[100px] truncate uppercase tracking-widest",
                activeDay === idx ? "text-indigo-200" : "text-zinc-600"
              )}>
                {dayPlan.title.split(' ')[0]}
              </div>
              {activeDay === idx && (
                <motion.div
                  layoutId="active-day-bg"
                  className="absolute inset-0 bg-indigo-500 -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        <button 
          onClick={() => scroll('right')} 
          className="p-3 bg-zinc-950 border border-zinc-800 rounded-xl text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors shrink-0 outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Content Area */}
      <div className="bg-zinc-950 rounded-2xl p-6 md:p-8 flex-1 border border-zinc-800 overflow-y-auto max-h-[600px] custom-scrollbar relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-zinc-800">
              <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 border border-indigo-500/20">
                <Map size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{nyItinerary[activeDay].title}</h3>
                <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mt-1">{nyItinerary[activeDay].activities.length} STOPS</p>
              </div>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[1.125rem] md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
              {nyItinerary[activeDay].activities.map((act, idx) => {
                const Icon = act.icon;
                return (
                  <div key={idx} className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-zinc-900 border-4 border-zinc-950 text-zinc-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:border-indigo-500/30 group-hover:text-indigo-400 transition-colors z-10 mt-2">
                      <Icon size={14} />
                    </div>
                    <div className="w-[calc(100%-3.5rem)] md:w-[calc(50%-2rem)] p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-indigo-300 bg-indigo-500/20 rounded border border-indigo-500/20">
                            {act.type}
                          </span>
                          <span className="font-bold text-white text-sm">{act.name}</span>
                        </div>
                        <time className="font-mono text-xs text-indigo-400/80">{act.time}</time>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {act.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
