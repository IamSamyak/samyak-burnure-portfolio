import React from 'react';

const timelineData = [
  {
    id: 1,
    title: 'Software Developer',
    company: 'TCS (Tata Consultancy Services)',
    period: 'Aug 2024 - Present',
    description: 'Contributing to enterprise-scale software solutions, focusing on backend efficiency and modern frontend frameworks within a high-velocity development team.',
    tags: ['Enterprise Tech', 'Agile'],
    isPrimary: true,
    isEducation: false
  },
  {
    id: 2,
    title: 'Trainee Software Engineer',
    company: 'Equations Work',
    period: 'Jan 2024 - June 2024',
    description: 'Intensive training and development on full-stack projects, specializing in Java-based backend services and microservices architecture.',
    tags: [],
    isPrimary: false,
    isEducation: false
  },
  {
    id: 3,
    title: 'B.E. in Information Technology',
    company: 'Sinhgad College of Engineering, Pune',
    period: '2020 - May 2024',
    description: null,
    tags: [],
    isPrimary: false,
    isEducation: true,
    cgpa: '9.14/10.00',
    location: 'Pune, Maharashtra'
  }
];

const Journey = () => {
  return (
    <section className="px-6 md:px-20 lg:px-40 py-32 bg-[#0d1418]" id="journey">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Professional Path</h2>
            <h3 className="text-4xl md:text-5xl font-black">The Developer Journey</h3>
            <p className="text-slate-400 leading-relaxed font-light">
              A chronicle of my evolution from an inquisitive engineering student to a professional software developer, documenting milestones in tech and academia.
            </p>
            <div className="pt-8 flex items-center gap-4 text-slate-500">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-background-dark flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-sm">code</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-500/20 border-2 border-background-dark flex items-center justify-center text-blue-400">
                  <span className="material-symbols-outlined text-sm">school</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border-2 border-background-dark flex items-center justify-center text-emerald-400">
                  <span className="material-symbols-outlined text-sm">work</span>
                </div>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider">Education & Experience</span>
            </div>
          </div>

          <div className="lg:col-span-8 relative pl-8 md:pl-16">
            <div className="timeline-line absolute left-0 top-0 h-full"></div>
            <div className="space-y-16">
              {timelineData.map((item, index) => (
                <div key={item.id} className="relative group">
                  {/* Timeline dot with proper conditional styling */}
                  {item.isPrimary ? (
                    <div className="absolute -left-[38px] md:-left-[70px] top-2 w-4 h-4 rounded-full bg-primary border-4 border-background-dark shadow-[0_0_15px_rgba(19,182,236,0.6)] z-10"></div>
                  ) : item.isEducation ? (
                    <div className="absolute -left-[38px] md:-left-[70px] top-2 w-4 h-4 rounded-full bg-slate-800 border-4 border-background-dark group-hover:bg-blue-400/50 transition-colors z-10"></div>
                  ) : (
                    <div className="absolute -left-[38px] md:-left-[70px] top-2 w-4 h-4 rounded-full bg-slate-600 border-4 border-background-dark group-hover:bg-primary/50 transition-colors z-10"></div>
                  )}
                  
                  <div className={`glass-card p-8 rounded-3xl group-hover:bg-white/[0.05] transition-colors ${item.isEducation ? 'border-blue-500/10' : ''}`}>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div>
                        <h4 className="text-2xl font-black">{item.title}</h4>
                        <p className={`font-bold text-lg ${item.isEducation ? 'text-blue-400' : item.isPrimary ? 'text-primary' : 'text-primary/80'}`}>
                          {item.company}
                        </p>
                      </div>
                      <span className="text-slate-400 font-mono text-xs bg-white/5 px-4 py-2 rounded-xl border border-white/10 w-fit">
                        {item.period}
                      </span>
                    </div>
                    {item.description && (
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                    )}
                    {item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, idx) => (
                          <span key={idx} className="text-[10px] font-bold bg-white/5 px-2 py-1 rounded uppercase">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    {item.isEducation && (
                      <div className="flex items-center gap-4 text-sm text-slate-300">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20">
                          <span className="material-symbols-outlined text-blue-400 text-base">grade</span>
                          <span className="font-bold">CGPA: {item.cgpa}</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                          <span className="material-symbols-outlined text-slate-400 text-base">location_on</span>
                          <span>{item.location}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
