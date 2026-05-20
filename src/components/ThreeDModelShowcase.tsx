import React, { useState } from "react";
import { ExternalLink, Compass, ChevronDown, ChevronUp } from "lucide-react";

export function ThreeDModelShowcase() {
  const modelUrl = "https://studio.tripo3d.ai/workspace/generate/4f11c40b-9d81-49bc-9e02-8cadbb956941";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section 
      id="models" 
      className="col-span-1 md:col-span-12 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-8 flex flex-col gap-6 relative overflow-hidden group select-none"
    >
      {/* Decorative ambient background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 opacity-70 transition-all duration-700 group-hover:scale-110 group-hover:bg-indigo-500/15" />
      
      {/* Module Title - Clickable header to toggle collapse */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center pb-4 border-b border-zinc-800 cursor-pointer hover:opacity-90 active:scale-[0.99] transition-all"
      >
        <div>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <Compass size={22} className="text-indigo-400" />
            3D 課堂作業展示
          </h2>
          <p className="text-zinc-500 text-xs mt-1 font-mono uppercase tracking-wider">
            {isOpen ? "點擊標題可以收合此區域" : "點擊標題可以展開此區域"}
          </p>
        </div>

        {/* Dynamic toggle indicator */}
        <button
          type="button"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800/80 border border-zinc-750 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-all shadow-md"
          aria-label={isOpen ? "Collapse Section" : "Expand Section"}
        >
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {/* Main Container Layout (Renders conditionally or is visual hidden via height transitions) */}
      <div 
        className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100 mt-2" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 py-6 select-text">
          <a
            href={modelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg shadow-indigo-600/10 hover:shadow-indigo-500/25 active:scale-[0.98] transition-all duration-300 group/btn"
          >
            <span>直接前往 Tripo3D 3D模型網站</span>
            <ExternalLink size={15} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>

          {/* Interactive Image Showcase next to the button */}
          <div className="flex flex-col items-center gap-2 w-full sm:w-auto">
            {/* Label indicating it is a comparison chart / contrast map */}
            <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 font-mono tracking-wider">
              對比圖
            </span>
            <a
              href="https://drive.google.com/file/d/19hBiOhx7NwXmtBVjVY2j_12rJgqgczb0/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto max-w-[420px] group/img relative rounded-2xl overflow-hidden border border-zinc-800/80 hover:border-indigo-500/50 bg-zinc-950 p-2.5 shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <img
                src="https://lh3.googleusercontent.com/d/19hBiOhx7NwXmtBVjVY2j_12rJgqgczb0"
                alt="3D Model Assignment Highlight"
                className="w-full h-auto max-h-[240px] md:max-h-[280px] object-contain rounded-xl filter brightness-95 group-hover/img:brightness-100 transition-all duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-all duration-300 backdrop-blur-xs">
                <span className="bg-indigo-600 text-white font-bold text-[12px] px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-md">
                  <span>檢視原圖與細節</span>
                  <ExternalLink size={12} />
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

