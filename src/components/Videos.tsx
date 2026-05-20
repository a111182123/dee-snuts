import { motion, AnimatePresence } from "motion/react";
import { Play, ChevronDown } from "lucide-react";
import { useState } from "react";

export function Videos() {
  const [isExpanded, setIsExpanded] = useState(false);

  const videos = [
    { id: 1, src: "https://lh3.googleusercontent.com/d/10IzoAhMNJ-5nI3To0v3Q9tT8ANVOKalj", label: "Day 1", type: "video" },
    { id: 2, src: "https://drive.google.com/file/d/12fcJUD56rgFCFs-viRfYIdipj_qV0lDM/view?usp=drive_link", label: "Day 2", type: "video" },
    { id: 3, src: "https://drive.google.com/file/d/1Ysk5ZGxfh-1s_zT9s6quUQoUBUw1o8BX/view?usp=drive_link", label: "Day 3", type: "video" },
    { id: 4, src: "https://drive.google.com/file/d/1cAx6ong11E5p-RZxFbE_sO1M3lCwZJbL/view?usp=drive_link", label: "Day 4", type: "video" },
    { id: 5, src: "https://drive.google.com/file/d/1k4LIjOwf6JTBgWT3zAmd6-crfFHlELbX/view?usp=drive_link", label: "Day 5", type: "video" },
  ];

  const isGoogleDrive = (url: string) => {
    return url.includes("drive.google.com") || url.includes("googleusercontent.com");
  };

  const getGoogleDriveEmbedUrl = (url: string) => {
    if (url.includes("/preview")) return url;
    
    if (url.includes("googleusercontent.com/d/")) {
      const parts = url.split("/d/");
      if (parts[1]) {
        const id = parts[1].split(/[?#/]/)[0];
        return `https://drive.google.com/file/d/${id}/preview`;
      }
    }
    
    if (url.includes("/file/d/")) {
      const parts = url.split("/file/d/");
      if (parts[1]) {
        const id = parts[1].split(/[?#/]/)[0];
        return `https://drive.google.com/file/d/${id}/preview`;
      }
    }

    const idMatch = url.match(/[?&]id=([^&?#]+)/);
    if (idMatch && idMatch[1]) {
      return `https://drive.google.com/file/d/${idMatch[1]}/preview`;
    }

    return url;
  };

  return (
    <section id="videos" className="col-span-1 md:col-span-12 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-8 flex flex-col">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex justify-between items-center w-full focus:outline-none group"
      >
        <div className="flex items-center gap-3">
          <h3 className="font-bold uppercase text-xs tracking-[0.2em] text-zinc-500 group-hover:text-zinc-300 transition-colors">Travel Videos</h3>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 font-mono">5 HIGHLIGHTS</span>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="p-1.5 rounded-full bg-zinc-800/50 text-zinc-400 group-hover:bg-zinc-800 group-hover:text-zinc-300 transition-colors"
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                  <div key={video.id} className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 px-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">{video.label}</span>
                    </div>
                    <div className="group relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 aspect-video flex-1 shadow-md">
                      {isGoogleDrive(video.src) ? (
                        <iframe
                          src={getGoogleDriveEmbedUrl(video.src)}
                          className="absolute inset-0 w-full h-full border-0 bg-zinc-950"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                          title={video.label}
                        />
                      ) : (
                        <video 
                          className="w-full h-full object-cover bg-zinc-950" 
                          controls 
                          preload="metadata"
                        >
                          <source src={video.src} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
