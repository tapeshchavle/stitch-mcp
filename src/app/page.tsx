'use client';

import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0e0e10] text-[#f9f5f8] selection:bg-[#99f7ff] selection:text-[#005f64] font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect border-b border-[#48474d]/10 h-16 flex items-center px-8 justify-between">
        <div className="flex items-center gap-2">
          <div className="data-pulse" />
          <span className="font-display font-bold text-xl tracking-tighter uppercase">NEXUS AI</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase text-[#adaaad]">
          <a href="#" className="hover:text-[#99f7ff] transition-colors">Core Engine</a>
          <a href="#" className="hover:text-[#99f7ff] transition-colors">Neural Mesh</a>
          <a href="#" className="hover:text-[#99f7ff] transition-colors">Void Docs</a>
        </div>
        <button className="px-4 py-2 bg-[#99f7ff] text-[#005f64] rounded-md font-display font-bold text-sm uppercase neural-glow hover:scale-105 transition-transform active:scale-95">
          Access Terminal
        </button>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-8 flex flex-col items-center relative overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-[#7000ff]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-[#99f7ff]/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-5xl w-full text-center z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#99f7ff]/20 bg-[#99f7ff]/5 text-[#99f7ff] text-[10px] font-display font-bold uppercase tracking-[0.2em] mb-8 animate-float">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#99f7ff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#99f7ff]"></span>
            </span>
            Neural Monolith v4.0.2 Active
          </div>
          
          <h1 className="font-display text-5xl md:text-8xl font-black tracking-tight mb-6 leading-[0.95]">
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#99f7ff] to-[#ac89ff]">SYNTHETIC</span> <br /> INTELLIGENCE ARCHETYPE.
          </h1>
          
          <p className="max-w-2xl mx-auto text-[#adaaad] text-lg md:text-xl font-light leading-relaxed mb-12">
            Nexus AI transcends traditional compute. It is a high-performance terminal into the void, 
            orchestrating a symphony of neural lattices and obsidian-glass processing layers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-br from-[#99f7ff] to-[#ac89ff] text-[#001930] rounded-lg font-display font-bold text-lg uppercase tracking-wider shadow-[0_0_30px_rgba(153,247,255,0.3)] hover:shadow-[0_0_50px_rgba(153,247,255,0.5)] transition-all">
              Initialize Connection
            </button>
            <button className="w-full sm:w-auto px-8 py-4 glass-effect rounded-lg font-display font-bold text-lg uppercase tracking-wider text-[#99f7ff] hover:bg-[#99f7ff]/10 transition-colors">
              Read Documentation
            </button>
          </div>
        </div>

        {/* Visual Element: The Kinetic Void Placeholder */}
        <div className="mt-20 w-full max-w-6xl aspect-video rounded-2xl glass-effect border border-[#48474d]/20 relative overflow-hidden flex items-center justify-center p-8">
           <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10] via-transparent to-transparent opacity-60" />
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full h-full">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex flex-col justify-end gap-2 group cursor-crosshair">
                   <div className="h-px w-full bg-[#48474d]/20 relative">
                     <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-[#99f7ff]/40 to-transparent group-hover:w-full transition-all duration-1000" />
                   </div>
                   <span className="font-display text-[10px] text-[#99f7ff]/60 uppercase tracking-widest">N-Lattice {i}</span>
                   <span className="font-display text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#adaaad]">{98.2 + i}%</span>
                </div>
              ))}
           </div>
           
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#99f7ff]/10 rounded-full blur-3xl animate-pulse" />
           <div className="z-10 font-display text-[8px] text-[#adaaad]/40 absolute bottom-4 left-8 uppercase tracking-[0.4em]">
             System.Init() :: Data Stream Stable :: Latency 1.2ms
           </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: "Atmospheric Depth", desc: "Monolithic layouts defined by light and density rather than physical boundaries." },
             { title: "Neural Monolith", desc: "A high-performance terminal architecture designed for the future of digital space." },
             { title: "Glass Architecture", desc: "24px backdrop-blur layers that create a sense of infinite processing depth." }
           ].map((f, i) => (
             <div key={i} className="p-8 rounded-xl glass-effect hover:bg-[#1f1f22]/40 transition-colors group">
               <div className="w-10 h-10 rounded bg-[#99f7ff]/10 flex items-center justify-center mb-6 border border-[#99f7ff]/20">
                 <div className="w-2 h-2 bg-[#99f7ff] rounded-full" />
               </div>
               <h3 className="text-xl font-bold mb-4 font-display uppercase tracking-tight">{f.title}</h3>
               <p className="text-[#adaaad] leading-relaxed font-light">{f.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#48474d]/10 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
              <div className="data-pulse" />
              <span className="font-display font-bold text-sm tracking-tighter uppercase">NEXUS AI</span>
           </div>
           <p className="text-[10px] text-[#adaaad]/50 font-display uppercase tracking-[0.3em]">
             © 2026 Nexus Synthetic Intelligence Archetype. All Rights Reserved.
           </p>
           <div className="flex gap-6 text-[10px] font-display font-bold uppercase tracking-widest text-[#adaaad]">
             <a href="#" className="hover:text-white transition-colors">Shadow Terminal</a>
             <a href="#" className="hover:text-white transition-colors">Void Mesh</a>
           </div>
        </div>
      </footer>
    </div>
  );
}
