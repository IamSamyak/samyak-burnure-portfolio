import React from 'react';

const projectsData = [
  {
    id: 1,
    title: 'Phaser Tanks Online',
    description: 'Real-time multiplayer warfare featuring custom-built WebSocket synchronization and reactive game state management.',
    category: 'MULTIPLAYER',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_6XpbxthaRRGkESWKNXkUDIrEYZa7tavnBOUgAf-elkzdTy438GH7PCdoOka9Ezl_d3RLaEhPI6BeRkLtknvVcwrVUnnQMnJkvGRw_exsy26-ppVN3g_vYiyFjWT179RLtIZkp2pqP9pA4s3hS_E9ZSX552lVlK8V3_A6BOSBjKQyeqh1-udHwYsABzR3nnAU635vcjrg_tdu-TK9bYWff0VvKbH_ny8J-Twaok7RxXeNFzuMhxv6myJaLfSwgFaVYTiqAHbRrnib',
    tech: ['PHASER 3', 'SPRING BOOT', 'WEBSOCKETS'],
    primaryAction: 'LAUNCH GAME',
    primaryIcon: 'rocket_launch',
    secondaryIcon: 'terminal'
  },
  {
    id: 2,
    title: 'Wonder Engine',
    description: 'Next-gen WebGL engine designed for high-fidelity 3D rendering with minimal overhead. Optimized for real-time shadows.',
    category: 'GRAPHICS',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDx2NAf26BlIv0mu5nWt-rbur86j4wgksaCcMv9sj1s81PSCUlwzPFc9tjirTGN4JnWb0z5B8FNsvoEwF41CSsG28XS6Saw7nX-30ho5mc34SDtZWouJmAJRzmTWUrjyBILIzSdRh_f7x3tqwvnUAqHMJW2oWAxa0p7sru6pPaVg3pM5oiuksQjVujn7JTIvK1-c6rzKSBscvC3-xZRJSOXtC_56qHxVqoxTKm8RCw6AWPtBSD68kbPGFMhlvOJ3ExmjZL-xY-RimQe',
    tech: ['THREE.JS', 'GLSL', 'BLENDER'],
    primaryAction: 'VIEW DEMO',
    primaryIcon: 'visibility',
    secondaryIcon: 'info'
  },
  {
    id: 3,
    title: 'Pocket Bill',
    description: 'A robust mobile billing solution for SMEs, providing offline-first capabilities and cloud synchronization.',
    category: 'FINTECH',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMhzoBa0ARrBiIsRWs3R6fG_wqymbiBk3Sda5fzVdCqfph7nBQKxUiaRtTfIor2Tno0t8l6vLKLEXtuZqJCq4xBgzl2mQWWwkP8pu4FHaS34Zxh05Mk47OwUzNUuMqjkZU2KziFVH2UbayFx1yfdlUaD-qSkFj0C8znZ3W58eWzqvcJScUcVNKtkPWDsqrVDR5TooA2VN2k1ciZO1stzkeKGg9d7y3Aq3xv6A05bPHBYW9gZA8VbAjaU0oI7Hx9tUTzjHWc1I6UBxr',
    tech: ['FLUTTER', 'FIREBASE', 'DART'],
    primaryAction: 'CASE STUDY',
    primaryIcon: 'description',
    secondaryIcon: 'analytics'
  }
];

const Projects = () => {
  return (
    <section className="relative overflow-hidden py-32" id="projects">
      <div className="floating-shape top-20 right-10 w-64 h-64 bg-primary/20 rounded-full"></div>
      <div className="floating-shape bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Portfolio Showcase</h2>
            <h3 className="text-5xl md:text-6xl font-black">Featured Builds</h3>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-14 h-14 flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white hover:bg-primary hover:text-background-dark transition-all">
              <span className="material-symbols-outlined">west</span>
            </button>
            <button className="w-14 h-14 flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white hover:bg-primary hover:text-background-dark transition-all">
              <span className="material-symbols-outlined">east</span>
            </button>
          </div>
        </div>

        <div className="horizontal-scroll-container flex gap-8 pb-12 overflow-x-auto snap-x snap-mandatory px-4 -mx-4">
          {projectsData.map((project) => (
            <div key={project.id} className="min-w-[400px] md:min-w-[500px] snap-center">
              <div className="card-3d-tilt glass-card rounded-3xl overflow-hidden flex flex-col h-full border border-white/10">
                <div className="aspect-video relative overflow-hidden group">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                    style={{ backgroundImage: `url('${project.image}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent opacity-60"></div>
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 bg-primary text-background-dark text-[10px] font-black rounded-lg uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <h4 className="text-3xl font-black mb-4">{project.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex gap-4">
                    <button className="flex-1 bg-primary text-background-dark font-black py-4 rounded-xl hover:brightness-110 transition-all flex items-center justify-center gap-2">
                      {project.primaryAction} <span className="material-symbols-outlined text-sm">{project.primaryIcon}</span>
                    </button>
                    <button className="w-14 h-14 border border-white/10 bg-white/5 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center">
                      <span className="material-symbols-outlined">{project.secondaryIcon}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
