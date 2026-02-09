import React from 'react';

const Creative = () => {
  return (
    <section className="px-6 md:px-20 lg:px-40 py-32 relative overflow-hidden" id="creative">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 relative group">
          <div className="aspect-square glass-card rounded-[2.5rem] overflow-hidden border border-white/10 relative">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-70 transition-transform duration-[2000ms] group-hover:scale-110" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDx2NAf26BlIv0mu5nWt-rbur86j4wgksaCcMv9sj1s81PSCUlwzPFc9tjirTGN4JnWb0z5B8FNsvoEwF41CSsG28XS6Saw7nX-30ho5mc34SDtZWouJmAJRzmTWUrjyBILIzSdRh_f7x3tqwvnUAqHMJW2oWAxa0p7sru6pPaVg3pM5oiuksQjVujn7JTIvK1-c6rzKSBscvC3-xZRJSOXtC_56qHxVqoxTKm8RCw6AWPtBSD68kbPGFMhlvOJ3ExmjZL-xY-RimQe')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-primary/10"></div>
            <div className="absolute bottom-10 left-10 right-10 p-8 glass-card rounded-3xl border-white/10 backdrop-blur-xl">
              <h4 className="text-xl font-black text-white mb-2 uppercase tracking-widest">Procedural Abstraction</h4>
              <p className="text-xs text-slate-400 font-mono tracking-widest">RENDERED IN BLENDER • CYCLES ENGINE</p>
            </div>
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[100px] rounded-full"></div>
        </div>

        <div className="order-1 lg:order-2 space-y-8">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Beyond Code</h2>
          <h3 className="text-5xl md:text-6xl font-black leading-tight">The Creative Side</h3>
          <p className="text-slate-400 leading-relaxed font-light text-xl">
            When the compiler stops, the imagination takes over. Using <span className="text-white font-bold">Blender</span>, I explore procedural geometry and lighting to create assets that give my software projects a unique visual edge.
          </p>
          <ul className="space-y-6 pt-4">
            <li className="flex items-center gap-4 text-slate-300">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-sm">polyline</span>
              </div>
              <span className="font-medium">Hard-surface environment modeling</span>
            </li>
            <li className="flex items-center gap-4 text-slate-300">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-sm">texture</span>
              </div>
              <span className="font-medium">Complex Node-based shading systems</span>
            </li>
            <li className="flex items-center gap-4 text-slate-300">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-sm">wb_sunny</span>
              </div>
              <span className="font-medium">Cinematic atmospheric rendering</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Creative;
