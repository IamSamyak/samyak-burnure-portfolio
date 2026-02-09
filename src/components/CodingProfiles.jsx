import React from 'react';

const CodingProfiles = () => {
  // Generate heatmap data
  const generateHeatmapColumn = () => {
    const levels = [0, 1, 2, 3, 4];
    return Array(7).fill(0).map(() => levels[Math.floor(Math.random() * levels.length)]);
  };

  const heatmapData = Array(10).fill(0).map(() => generateHeatmapColumn());

  return (
    <section className="px-6 md:px-20 lg:px-40 py-32 bg-background-dark/50" id="coding">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Real-time Metrics</h2>
          <h3 className="text-5xl font-black mt-4">Coding Profiles</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* GitHub Card */}
          <div className="glass-card rounded-[2.5rem] p-10 border-github/20 hover:border-github/50 transition-all">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-github/20 flex items-center justify-center text-github">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-2xl font-black">GitHub</h4>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">@samyak-burnure</p>
                </div>
              </div>
              <a className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-github" href="#">
                <span className="material-symbols-outlined text-lg">open_in_new</span>
              </a>
            </div>

            <div className="mb-10">
              <p className="text-[10px] text-slate-500 mb-4 uppercase tracking-[0.2em] font-black">Contribution Heatmap</p>
              <div className="flex gap-1.5 overflow-x-auto pb-4">
                {heatmapData.map((column, colIdx) => (
                  <div key={colIdx} className="grid grid-rows-7 gap-1.5">
                    {column.map((level, rowIdx) => (
                      <div key={rowIdx} className={`heatmap-cell heatmap-level-${level}`}></div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-1">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Commits</span>
                <span className="text-3xl font-black text-github">1,482</span>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-1">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Stars</span>
                <span className="text-3xl font-black text-github">156</span>
              </div>
            </div>
          </div>

          {/* LeetCode Card */}
          <div className="glass-card rounded-[2.5rem] p-10 border-leetcode/20 hover:border-leetcode/50 transition-all">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-leetcode/20 flex items-center justify-center text-leetcode">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-4.377 4.382a1.296 1.296 0 0 0 0 1.813 1.235 1.235 0 0 0 1.74 0l4.377-4.382a1.296 1.296 0 0 0 0-1.813 1.377 1.377 0 0 0-.879-.414zM7.344 6.336a1.374 1.374 0 0 0-.961.414l-4.377 4.382a1.296 1.296 0 0 0 0 1.813 1.235 1.235 0 0 0 1.74 0l4.377-4.382a1.296 1.296 0 0 0 0-1.813 1.377 1.377 0 0 0-.879-.414zM12 24a12 12 0 1 1 0-24 12 12 0 0 1 0 24zm0-2.4a9.6 9.6 0 1 0 0-19.2 9.6 9.6 0 0 0 0 19.2zM21.034 11.234a1.296 1.296 0 0 0-1.813 0l-4.382 4.377a1.235 1.235 0 0 0 0 1.74 1.296 1.296 0 0 0 1.813 0l4.382-4.377a1.374 1.374 0 0 0 0-1.74z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-2xl font-black">LeetCode</h4>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Knight Status</p>
                </div>
              </div>
              <a className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-leetcode" href="#">
                <span className="material-symbols-outlined text-lg">open_in_new</span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[10px] text-slate-500 block mb-2 uppercase tracking-widest font-bold">Rating</span>
                <span className="text-3xl font-black text-leetcode">1,942</span>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[10px] text-slate-500 block mb-2 uppercase tracking-widest font-bold">Global Rank</span>
                <span className="text-3xl font-black text-leetcode">Top 4.2%</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                <span>Total Problems Solved</span>
                <span className="text-white">482 / 3200</span>
              </div>
              <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden flex">
                <div className="h-full bg-emerald-500" style={{ width: '30%' }}></div>
                <div className="h-full bg-amber-500" style={{ width: '50%' }}></div>
                <div className="h-full bg-rose-500" style={{ width: '20%' }}></div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-emerald-500/5 rounded-xl border border-emerald-500/10">
                  <span className="text-[10px] text-emerald-500 font-black uppercase">Easy</span>
                  <p className="text-xl font-black">145</p>
                </div>
                <div className="text-center p-3 bg-amber-500/5 rounded-xl border border-amber-500/10">
                  <span className="text-[10px] text-amber-500 font-black uppercase">Med</span>
                  <p className="text-xl font-black">242</p>
                </div>
                <div className="text-center p-3 bg-rose-500/5 rounded-xl border border-rose-500/10">
                  <span className="text-[10px] text-rose-500 font-black uppercase">Hard</span>
                  <p className="text-xl font-black">95</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
