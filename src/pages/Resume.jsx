import React from 'react';

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Place your resume.pdf in the public folder
    link.download = 'Samyak_Burnure_Resume.pdf';
    link.click();
  };

  const handleCopyLink = () => {
    const resumeUrl = window.location.origin + '/resume';
    navigator.clipboard.writeText(resumeUrl);
    alert('Resume link copied to clipboard!');
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col font-display hero-gradient bg-background-dark text-white selection:bg-primary/30 overflow-x-hidden">
      {/* Header */}
      <header className="glass-nav sticky top-0 z-50 px-6 py-4 md:px-20 lg:px-40">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a className="flex items-center gap-2 group text-slate-400 hover:text-white transition-colors" href="/">
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              <span className="text-xs uppercase tracking-widest font-black">Go Back</span>
            </a>
            <div className="h-4 w-px bg-white/10 hidden md:block"></div>
            <div className="hidden md:flex items-center gap-3">
              <div className="text-primary">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path
                    clipRule="evenodd"
                    d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <span className="text-lg font-extrabold tracking-tight">Samyak Burnure</span>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] uppercase tracking-wider font-bold text-slate-300">Available for hire</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col lg:flex-row max-w-[1600px] mx-auto w-full p-6 md:p-12 lg:p-16 gap-12">
        {/* Resume Card */}
        <div className="flex-1 flex justify-center items-start overflow-hidden">
          <div className="w-full max-w-[850px] aspect-[1/1.414] rounded-sm p-12 flex flex-col shadow-2xl origin-top bg-white text-[#1a1a1a]">
            {/* Header Section */}
            <div className="flex justify-between items-start border-b-2 border-slate-200 pb-8 mb-8">
              <div>
                <h1 className="text-4xl font-black tracking-tighter uppercase">Samyak Burnure</h1>
                <p className="text-primary font-bold text-lg mt-1">Software Developer</p>
                <div className="flex flex-wrap gap-4 mt-4 text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">mail</span> samyak.burnure@email.com
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">location_on</span> Pune, India
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">link</span> portfolio.samyak.dev
                  </span>
                </div>
              </div>
              <div className="w-16 h-16 bg-slate-100 rounded flex items-center justify-center text-slate-300">
                <span className="material-symbols-outlined text-4xl">account_circle</span>
              </div>
            </div>

            {/* Content Grid */}
            <div className="flex-1 grid grid-cols-12 gap-10">
              {/* Left Column */}
              <div className="col-span-8 space-y-8">
                {/* Experience */}
                <section>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4 border-b border-slate-200 pb-2">
                    Experience
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-baseline">
                        <h4 className="font-black">Software Developer</h4>
                        <span className="text-[10px] font-bold text-slate-400">2024 - Present</span>
                      </div>
                      <p className="text-sm font-bold text-primary italic">Tata Consultancy Services (TCS)</p>
                      <ul className="mt-2 text-[11px] leading-relaxed text-slate-600 space-y-1">
                        <li>• Developing high-performance backend systems using Spring Boot and Java.</li>
                        <li>• Architecting microservices and ensuring seamless API integration across platforms.</li>
                        <li>• Collaborating in an Agile environment to deliver enterprise-scale features.</li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex justify-between items-baseline">
                        <h4 className="font-black">Trainee Software Engineer</h4>
                        <span className="text-[10px] font-bold text-slate-400">Jan 2024 - June 2024</span>
                      </div>
                      <p className="text-sm font-bold text-primary italic">Equations Work</p>
                      <ul className="mt-2 text-[11px] leading-relaxed text-slate-600 space-y-1">
                        <li>• Focused on full-stack development and Java-based backend services.</li>
                        <li>• Optimized database queries and improved application load times by 20%.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Projects */}
                <section>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4 border-b border-slate-200 pb-2">
                    Featured Projects
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-black text-sm">Pocket Bill – FinTech Mobile Solution</h4>
                      <p className="text-[11px] leading-relaxed text-slate-600 mt-1">
                        Offline-first billing application for SMEs built with Flutter and Firebase. Implemented robust local sync and automated invoice generation.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-black text-sm">Wonder Engine – 3D Rendering</h4>
                      <p className="text-[11px] leading-relaxed text-slate-600 mt-1">
                        WebGL-based engine using Three.js and GLSL for high-fidelity browser rendering. Focused on real-time shadow mapping and procedural geometry.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              {/* Right Column */}
              <div className="col-span-4 space-y-8">
                {/* Education */}
                <section>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4 border-b border-slate-200 pb-2">
                    Education
                  </h3>
                  <div>
                    <h4 className="font-black text-[11px]">B.E. Information Technology</h4>
                    <p className="text-[10px] text-slate-500 font-bold">Sinhgad College of Engineering</p>
                    <p className="text-[10px] text-primary font-bold">CGPA: 9.14/10.0</p>
                    <p className="text-[9px] text-slate-400 mt-1">2020 — 2024 | Pune, India</p>
                  </div>
                </section>

                {/* Skills */}
                <section>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4 border-b border-slate-200 pb-2">
                    Skills
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {["Java","Spring Boot","React.js","Flutter","Three.js","Docker","MySQL","Firebase"].map(skill => (
                      <span key={skill} className="bg-slate-100 text-slate-700 text-[9px] font-bold px-2 py-0.5 rounded uppercase">{skill}</span>
                    ))}
                  </div>
                </section>

                {/* Achievements */}
                <section>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4 border-b border-slate-200 pb-2">
                    Achievements
                  </h3>
                  <div className="space-y-2 text-[10px]">
                    <div>
                      <p className="font-black text-slate-800">LeetCode Knight</p>
                      <p className="text-slate-500">Top 4.2% globally</p>
                    </div>
                    <div>
                      <p className="font-black text-slate-800">Hackathon Finalist</p>
                      <p className="text-slate-500">Smart India Hackathon 2023</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-[400px] flex flex-col gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-black tracking-tight">
              Professional <br />
              <span className="text-primary">Curriculum Vitae</span>
            </h2>
            <p className="text-slate-400 leading-relaxed font-light">
              My resume outlines my technical journey, core competencies, and project history. Optimized for modern development roles and engineering teams.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl space-y-6">
            <div className="space-y-3">
              <p className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500">Quick Actions</p>
              <button
                onClick={handleDownload}
                className="w-full bg-primary text-background-dark font-black py-4 rounded-xl hover:brightness-110 transition-all flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(19,182,236,0.2)]"
              >
                <span className="material-symbols-outlined">download</span> DOWNLOAD PDF
              </button>
              <button
                onClick={handleCopyLink}
                className="w-full bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black py-4 rounded-xl transition-all flex items-center justify-center gap-3"
              >
                <span className="material-symbols-outlined">link</span> COPY PUBLIC LINK
              </button>
            </div>

            <div className="pt-6 border-t border-white/10">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-xl">verified</span>
                </div>
                <div>
                  <p className="text-xs font-black">Latest Update</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">October 2024</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500">Alternative Formats</p>
            <div className="flex">
              <button className="w-full py-3 px-4 rounded-xl border border-white/5 bg-white/5 text-[11px] font-bold hover:border-primary/40 transition-colors uppercase tracking-widest">
                .DOCX (Word)
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-[10px] uppercase tracking-[0.3em] font-black">© 2024 SAMYAK BURNURE • RESUME VIEWER</p>
          <div className="flex gap-8">
            <a className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-primary transition-colors" href="#">Privacy</a>
            <a className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-primary transition-colors" href="#">Security</a>
            <a className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-primary transition-colors" href="#">Help</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Resume;
