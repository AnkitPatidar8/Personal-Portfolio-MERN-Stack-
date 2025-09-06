// import React from "react";

// const About = () => {
//   return (
//     <div id="about">
//       <section className="py-16 px-4 sm:px-6 bg-neutral-900 text-white min-h-screen ">
//          <div className='h-8 my-1 w-full '></div>
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-neutral-500 text-3xl md:text-5xl sm:text-4xl font-bold mb-6 border-b border-teal-500 inline-block pb-2">
//             About Me
//           </h2>
//           <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
//             I’m a passionate web developer based in India. I enjoy building web
//             applications that are fast, beautiful, and user-friendly. My
//             favorite stack is{" "}
//             <span className="bg-gradient-to-r from-yellow-500 to-amber-200 text-transparent bg-clip-text font-semibold ">
//               MERN (MongoDB, Express, React, Node)
//             </span>
//             . I love learning new technologies and solving real-world problems
//             with code.
//           </p>
//         </div>

//         {/* Grid Section */}
//         <div className="w-full max-w-6xl bg-neutral-900 px-4 sm:px-6 mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 m-auto">
          
//           {/* Education */}
//           <div className="bg-neutral-800 p-6 rounded-xl shadow-xl">
//             <h2 className="text-2xl font-semibold bg-gradient-to-r from-yellow-500 to-amber-200 text-transparent bg-clip-text mb-4">
//               Education
//             </h2>
//             <div className="space-y-4">
//               {[
//                 {
//                   title: "Master of Computer Applications (MCA)",
//                   college: "L N C T Collage, Bhopal",
//                   year: "2020 – 2023 | CGPA: 8.4 / 10",
//                 },
//                 {
//                   title: "Bachelor of Computer Applications (B.sc)",
//                   college: "P G Collage, Dhar",
//                   year: "2018 – 2021 | Percentage: 60.66%",
//                 },
//                 {
//                   title: "12th (Senior Secondary)",
//                   college: "Patidar Higher Secondary, Dhar",
//                   year: "2016 – 2018 | Percentage: 64.66%",
//                 },
//               ].map((edu, index) => (
//                 <div
//                   key={index}
//                   className="border border-slate-700 hover:border-cyan-400 px-4 py-2 rounded-xl shadow-md"
//                 >
//                   <h4 className="text-lg font-semibold text-white">{edu.title}</h4>
//                   <div className="flex justify-between flex-wrap p-1">
//                     <p className="text-gray-400">{edu.college}</p>
//                     <p className="text-sm text-gray-500">{edu.year}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Experience */}
//           <div className="bg-neutral-800 p-6 rounded-xl shadow-xl h-[360px] overflow-y-auto pr-3 custom-scrollbar">
//             <h2 className="text-2xl font-semibold bg-gradient-to-r from-yellow-500 to-amber-200 text-transparent bg-clip-text mb-4">
//               Experience
//             </h2>

//             <div className="space-y-4">
//               {[
//                 {
//                   title: "Web Development Intern",
//                   company: "iDroid Becance PRV Limited • Bhopal",
//                   duration: "May 2024 – July 2024",
//                   points: [
//                     "Created responsive components using HTML, CSS, JS.",
//                     "Practiced form validation and UI layout techniques.",
//                     "Collaborated on real-time development projects.",
//                   ],
//                 },
//                 {
//                   title: "Web Developer",
//                   company: "iDroid Becance PRV Limited • Bhopal",
//                   duration: "July 2024 – Present",
//                   points: [
//                     "Developed and maintained responsive websites for marketing clients.",
//                     "Designed clean UIs using HTML, CSS, Bootstrap with form validation.",
//                     "Resolved bugs under tight deadlines for real-time client needs.",
//                   ],
//                 },
//               ].map((job, index) => (
//                 <div
//                   key={index}
//                   className="border border-slate-700 hover:border-cyan-400 px-4 py-2 rounded-xl shadow-md"
//                 >
//                   <h4 className="text-lg font-semibold text-white">{job.title}</h4>
//                   <div className="flex justify-between flex-wrap p-1">
//                     <p className="text-gray-400">{job.company}</p>
//                     <p className="text-sm text-gray-500">{job.duration}</p>
//                   </div>
//                   <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm mt-1">
//                     {job.points.map((point, idx) => (
//                       <li key={idx}>{point}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;


import React, { useEffect, useState } from "react";
import axios from "axios";

const About = () => {
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  // Fetch data from backend using axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [eduRes, expRes] = await Promise.all([
          axios.get("https://personal-portfolio-mern-stack.vercel.app/api/about/education"),
          axios.get("https://personal-portfolio-mern-stack.vercel.app/api/about/experience"),
        ]);

        setEducation(eduRes.data);
        setExperience(expRes.data);
      } catch (error) {
        console.error("Error fetching About data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="about">
      <section className="py-16 px-4 sm:px-6 bg-neutral-900 text-white min-h-screen ">
        <div className="h-8 my-1 w-full "></div>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-neutral-500 text-3xl md:text-5xl sm:text-4xl font-bold mb-6 border-b border-teal-500 inline-block pb-2">
            About Me
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            I’m a passionate web developer based in India. I enjoy building web
            applications that are fast, beautiful, and user-friendly. My
            favorite stack is{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-amber-200 text-transparent bg-clip-text font-semibold ">
              MERN (MongoDB, Express, React, Node)
            </span>
            . I love learning new technologies and solving real-world problems
            with code.
          </p>
        </div>

        {/* Grid Section */}
        <div className="w-full max-w-6xl bg-neutral-900 px-4 sm:px-6 mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 m-auto">
          {/* Education */}
          <div className="bg-neutral-800 p-6 rounded-xl shadow-xl">
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-yellow-500 to-amber-200 text-transparent bg-clip-text mb-4">
              Education
            </h2>
            <div className="space-y-4">
              {education.length > 0 ? (
                education.map((edu, index) => (
                  <div
                    key={index}
                    className="border border-slate-700 hover:border-cyan-400 px-4 py-2 rounded-xl shadow-md"
                  >
                    <h4 className="text-lg font-semibold text-white">
                      {edu.title}
                    </h4>
                    <div className="flex justify-between flex-wrap p-1">
                      <p className="text-gray-400">{edu.college}</p>
                      <p className="text-sm text-gray-500">{edu.year}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">No Education Data Found</p>
              )}
            </div>
          </div>

          {/* Experience */}
          <div className="bg-neutral-800 p-6 rounded-xl shadow-xl h-[360px] overflow-y-auto pr-3 custom-scrollbar">
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-yellow-500 to-amber-200 text-transparent bg-clip-text mb-4">
              Experience
            </h2>
            <div className="space-y-4">
              {experience.length > 0 ? (
                experience.map((job, index) => (
                  <div
                    key={index}
                    className="border border-slate-700 hover:border-cyan-400 px-4 py-2 rounded-xl shadow-md"
                  >
                    <h4 className="text-lg font-semibold text-white">
                      {job.title}
                    </h4>
                    <div className="flex justify-between flex-wrap p-1">
                      <p className="text-gray-400">{job.company}</p>
                      <p className="text-sm text-gray-500">{job.duration}</p>
                    </div>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm mt-1">
                      {job.points?.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">No Experience Data Found</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
