import React, { useRef } from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaDocker,
} from 'react-icons/fa';
import {
  SiSpringboot,
  SiElasticsearch,
  SiFlutter,
  SiDart,
  SiBlender,
  SiFirebase,
  SiMysql,
  SiCplusplus,
} from 'react-icons/si';

const skillsData = [
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'React.js', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'Spring Boot', icon: <SiSpringboot /> },
  { name: 'Elasticsearch', icon: <SiElasticsearch /> },
  { name: 'Flutter', icon: <SiFlutter /> },
  { name: 'Dart', icon: <SiDart /> },
  { name: 'Blender', icon: <SiBlender /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'Firebase', icon: <SiFirebase /> },
  { name: 'C++', icon: <SiCplusplus /> },
];

const MagneticCard = ({ children }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const card = ref.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // strength of pull (lower = subtler)
    const strength = 0.25;

    card.style.transform = `
      translate(${x * strength}px, ${y * strength}px)
      scale(1.08)
    `;
  };

  const handleMouseLeave = () => {
    const card = ref.current;
    card.style.transform = `
      translate(0px, 0px)
      scale(1)
    `;
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        flex items-center gap-3
        px-5 py-3 md:px-7 md:py-4
        rounded-2xl
        bg-white/5 border border-white/10
        backdrop-blur-sm
        shrink-0
        cursor-pointer

        transition-transform
        duration-300
        ease-out
        will-change-transform
      "
    >
      {children}
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-[#0d1418]">
      {/* Header */}
      <div className="px-4 sm:px-6 md:px-20 lg:px-40 max-w-[1200px] mx-auto text-center mb-14 md:mb-20">
        <h2 className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm">
          Tech Stack
        </h2>
        <h3 className="text-3xl md:text-5xl font-black mt-4">
          Core Expertise
        </h3>
        <p className="text-slate-400 max-w-2xl mx-auto mt-4 md:mt-6 font-light text-sm md:text-lg leading-relaxed">
          A versatile set of tools and technologies I use to build scalable,
          performant, and elegant applications.
        </p>
      </div>

      {/* Scrolling skills */}
      <div className="relative w-screen overflow-hidden">
        <div
          className="
            flex items-center
            gap-4 md:gap-6 w-max
            px-4 py-12 md:py-16
            animate-scroll
            hover:[animation-play-state:paused]
          "
        >
          {[...skillsData, ...skillsData].map((skill, index) => (
            <MagneticCard key={index}>
              <span className="text-primary text-lg md:text-xl">
                {skill.icon}
              </span>
              <span className="font-semibold text-sm md:text-base whitespace-nowrap">
                {skill.name}
              </span>
            </MagneticCard>
          ))}
        </div>

        {/* Gradient edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0d1418] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0d1418] to-transparent" />
      </div>
    </section>
  );
};

export default Skills;
