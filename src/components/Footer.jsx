import React from 'react';

const Footer = () => {
  return (
    <footer className="px-6 py-20 border-t border-white/5 bg-black/40">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
          <div className="flex items-center gap-3 font-black text-2xl">
            <span className="text-primary">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </span>
            Samyak Burnure
          </div>
          <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
            Software Developer • Crafting the next generation of digital experiences with precision and creativity.
          </p>
          <p className="text-slate-600 text-[10px] uppercase tracking-[0.3em] font-black mt-2">
            © 2024 SAMYAK BURNURE • PORTFOLIO
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-10">
          <a className="text-xs uppercase tracking-widest font-black text-slate-400 hover:text-primary transition-colors" href="#">
            LinkedIn
          </a>
          <a className="text-xs uppercase tracking-widest font-black text-slate-400 hover:text-primary transition-colors" href="#">
            GitHub
          </a>
          <a className="text-xs uppercase tracking-widest font-black text-slate-400 hover:text-primary transition-colors" href="#">
            LeetCode
          </a>
          <a className="text-xs uppercase tracking-widest font-black text-slate-400 hover:text-primary transition-colors" href="#">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
