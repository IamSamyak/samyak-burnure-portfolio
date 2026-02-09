import React from 'react';

const Hero = () => {
  return (
    <section className="hero-gradient relative flex flex-col items-center justify-center px-6 py-32 md:py-48 text-center min-h-[85vh]">
      <div className="max-w-[1000px] space-y-4 relative z-10">
        <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] uppercase tracking-[0.2em] font-black mb-6">
          Based in Pune, India
        </div>
        <h1 className="text-7xl md:text-9xl font-black leading-[1] tracking-tighter">
          Samyak Burnure
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tight pb-4">
          Software Developer
        </h2>
        <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light mt-6">
          Specializing in high-performance backends and immersive mobile & web experiences with a passion for 3D engineering.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
          <a className="w-full sm:w-auto px-10 py-5 bg-primary text-background-dark font-black rounded-2xl shadow-[0_10px_30px_rgba(19,182,236,0.3)] hover:scale-105 transition-all" href="#projects">
            VIEW PROJECTS
          </a>
          <a className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 font-black rounded-2xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2" href="#journey">
            MY JOURNEY <span className="material-symbols-outlined text-sm">arrow_downward</span>
          </a>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full creative-grid opacity-30 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
