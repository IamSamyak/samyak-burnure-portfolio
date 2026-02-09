import React from 'react';

const Contact = () => {
  return (
    <section className="px-6 md:px-20 lg:px-40 py-32" id="contact">
      <div className="max-w-[1200px] mx-auto bg-gradient-to-br from-primary/15 via-background-dark to-transparent border border-primary/20 rounded-[3rem] p-12 md:p-24 text-center space-y-10 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/10 blur-[150px] rounded-full"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-primary/10 blur-[150px] rounded-full"></div>
        
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
          Let's build the <br />
          <span className="text-primary">future</span> together
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-xl font-light">
          Currently open to collaboration on high-impact full-stack projects or creative engineering roles. Let's talk tech.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-10 py-8">
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary transition-all">
              <span className="material-symbols-outlined text-primary">mail</span>
            </div>
            <a className="text-xl font-black hover:text-primary transition-colors tracking-tight" href="mailto:samyak.burnure@email.com">
              samyak.burnure@email.com
            </a>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary transition-all">
              <span className="material-symbols-outlined text-primary">call</span>
            </div>
            <span className="text-xl font-black tracking-tight">+91 98765 43210</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 relative z-10">
          <a className="w-full sm:w-auto px-12 py-6 bg-primary text-background-dark font-black rounded-2xl hover:scale-105 transition-all text-lg shadow-[0_15px_40px_rgba(19,182,236,0.2)]" href="mailto:samyak.burnure@email.com">
            SEND AN EMAIL
          </a>
          <div className="flex gap-4">
            <a className="w-16 h-16 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl hover:bg-primary/20 transition-all hover:border-primary" href="#">
              <span className="material-symbols-outlined">link</span>
            </a>
            <a className="w-16 h-16 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl hover:bg-primary/20 transition-all hover:border-primary" href="#">
              <span className="material-symbols-outlined">terminal</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
