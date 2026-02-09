import React from 'react';

const skillsData = [
  { name: 'HTML5', icon: 'code' },
  { name: 'CSS3', icon: 'css' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'React.js', icon: 'vitals' },
  { name: 'Node.js', icon: 'network_node' },
  { name: 'Java', icon: 'coffee' },
  { name: 'Spring Boot', icon: 'settings_input_component' },
  { name: 'Elasticsearch', icon: 'search' },
  { name: 'Flutter', icon: 'smartphone' },
  { name: 'Dart', icon: 'target' },
  { name: 'Blender', icon: 'view_in_ar' },
  { name: 'Docker', icon: 'dock' },
  { name: 'MySQL', icon: 'database' },
  { name: 'Firebase', icon: 'local_fire_department' },
  { name: 'C++', icon: 'data_object' }
];

const Skills = () => {
  return (
    <section className="px-6 md:px-20 lg:px-40 py-32 bg-[#0d1418]" id="skills">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Tech Stack</h2>
          <h3 className="text-5xl font-black mt-4">Core Expertise</h3>
          <p className="text-slate-400 max-w-2xl mx-auto mt-6 font-light text-lg leading-relaxed">
            A versatile set of tools and languages I use to architect robust, scalable, and visually stunning applications.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5 max-w-5xl mx-auto">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-chip">
              <span className="material-symbols-outlined text-primary">{skill.icon}</span>
              <span className="font-bold tracking-tight">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
