
import React, { useEffect, useState } from "react";
import axios from "axios";

const SKILLS_API = `${import.meta.env.VITE_SERVERURL}`;

const Skills = () => {
  const [techSkills, setTechSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const { data } = await axios.get(`${SKILLS_API}api/skills`);
        setTechSkills(data);
      } catch (err) {
        console.error("Error fetching skills:", err);
      }
    };
    fetchSkills();
  }, []);

  return (
    <section id="skills" className="py-16 px-6 bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-neutral-500 md:text-5xl text-3xl font-bold mb-6 border-b border-teal-500 inline-block pb-2">
          My Tech Stack
        </h2>
        <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
          I work primarily in full-stack web development...
        </p>
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6 mt-8 bg-neutral-900 p-6 rounded-xl">
          {techSkills.map((skill, index) => (
            <div key={index} className="relative w-full h-40 perspective">
              <div className="relative w-full h-full transition-transform duration-800 transform-style preserve-3d hover:rotate-y-180 rounded-xl border border-slate-700 hover:border-cyan-400">
                {/* Front */}
                <div className="absolute w-full h-full backface-hidden bg-neutral-800 rounded-xl flex items-center justify-evenly shadow-lg">
                  <img src={skill.image} alt={skill.name} className="w-36 h-36 object-contain" />
                  <div>
                    <h1 className="text-xl font-bold bg-gradient-to-r from-yellow-500 to-amber-200 text-transparent bg-clip-text">
                      {skill.name}
                    </h1>
                    <p className="text-gray-400 text-base absolute bottom-0 right-4">
                      {skill.subject}
                    </p>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-neutral-700 rounded-xl flex items-center justify-center shadow-lg">
                  <p className="bg-gradient-to-r from-yellow-500 to-amber-200 text-transparent bg-clip-text text-sm font-semibold px-3">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
