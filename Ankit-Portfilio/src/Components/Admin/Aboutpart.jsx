
// import React, { useState } from "react";
// import Layout from "./Layout";

// const Aboutpart = () => {
//   const [education, setEducation] = useState([]);
//   const [experience, setExperience] = useState([]);

//   const [eduForm, setEduForm] = useState({ title: "", college: "", year: "" });
//   const [expForm, setExpForm] = useState({
//     title: "",
//     company: "",
//     duration: "",
//     points: "",
//   });

//   const handleEduSubmit = (e) => {
//     e.preventDefault();
//     setEducation([...education, eduForm]);
//     setEduForm({ title: "", college: "", year: "" });
//   };

//   const handleExpSubmit = (e) => {
//     e.preventDefault();
//     setExperience([
//       ...experience,
//       {
//         ...expForm,
//         points: expForm.points.split(",").map((p) => p.trim()),
//       },
//     ]);
//     setExpForm({ title: "", company: "", duration: "", points: "" });
//   };

//   return (
//     <Layout>
//       <div className="px-4 sm:px-6 lg:px-8 py-6 bg-neutral-950 text-white min-h-screen">
//         <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-teal-400">
//           Admin Panel - About Section
//         </h2>

//         <div className="md:ml-62  grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Education Section */}
//           <div className="bg-neutral-800 p-6 rounded-xl shadow-lg">
//             <h3 className="text-xl font-semibold mb-4 text-teal-300">
//               Add Education
//             </h3>
//             <form onSubmit={handleEduSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 required
//                 placeholder="Title"
//                 value={eduForm.title}
//                 onChange={(e) =>
//                   setEduForm({ ...eduForm, title: e.target.value })
//                 }
//                 className="w-full p-2 rounded bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//               <input
//                required
//                 type="text"
//                 placeholder="College"
//                 value={eduForm.college}
//                 onChange={(e) =>
//                   setEduForm({ ...eduForm, college: e.target.value })
//                 }
//                 className="w-full p-2 rounded bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//               <input
//                required
//                 type="text"
//                 placeholder="Year / CGPA"
//                 value={eduForm.year}
//                 onChange={(e) =>
//                   setEduForm({ ...eduForm, year: e.target.value })
//                 }
//                 className="w-full p-2 rounded bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//               <button
//                 type="submit"
//                 className="w-full px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded font-semibold"
//               >
//                 Add Education
//               </button>
//             </form>

//             {/* Display Education */}
//             <div className="mt-6 space-y-4">
//               {education.map((edu, idx) => (
//                 <div
//                   key={idx}
//                   className="border border-neutral-600 p-4 rounded bg-neutral-900"
//                 >
//                   <p className="text-lg font-bold text-teal-400">{edu.title}</p>
//                   <p>{edu.college}</p>
//                   <p className="text-sm text-gray-400">{edu.year}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Experience Section */}
//           <div className="bg-neutral-800 p-6 rounded-xl shadow-lg">
//             <h3 className="text-xl font-semibold mb-4 text-teal-300">
//               Add Experience
//             </h3>
//             <form onSubmit={handleExpSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Title"
//                 value={expForm.title}
//                 onChange={(e) =>
//                   setExpForm({ ...expForm, title: e.target.value })
//                 }
//                 className="w-full p-2 rounded bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//               <input
//                required
//                 type="text"
//                 placeholder="Company"
//                 value={expForm.company}
//                 onChange={(e) =>
//                   setExpForm({ ...expForm, company: e.target.value })
//                 }
//                 className="w-full p-2 rounded bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//               <input
//                required
//                 type="text"
//                 placeholder="Duration"
//                 value={expForm.duration}
//                 onChange={(e) =>
//                   setExpForm({ ...expForm, duration: e.target.value })
//                 }
//                 className="w-full p-2 rounded bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//               <textarea
//                 placeholder="Bullet Points (comma separated)"
//                 value={expForm.points}
//                 onChange={(e) =>
//                   setExpForm({ ...expForm, points: e.target.value })
//                 }
//                 className="w-full p-2 rounded bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//               <button
//                 type="submit"
//                 className="w-full px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded font-semibold"
//               >
//                 Add Experience
//               </button>
//             </form>

//             {/* Display Experience */}
//             <div className="mt-6 space-y-4">
//               {experience.map((exp, idx) => (
//                 <div
//                   key={idx}
//                   className="border border-neutral-600 p-4 rounded bg-neutral-900"
//                 >
//                   <p className="text-lg font-bold text-teal-400">{exp.title}</p>
//                   <p>{exp.company}</p>
//                   <p className="text-sm text-gray-400">{exp.duration}</p>
//                   <ul className="list-disc ml-5 text-sm text-gray-300 mt-2">
//                     {exp.points.map((pt, i) => (
//                       <li key={i}>{pt}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Aboutpart;



// import React, { useState, useEffect } from "react";
// import Layout from "./Layout";
// import axios from "axios";

// const API_BASE = "http://localhost:5000/api/about"; // apna backend URL daalna

// const Aboutpart = () => {
//   const [education, setEducation] = useState([]);
//   const [experience, setExperience] = useState([]);

//   const [eduForm, setEduForm] = useState({ title: "", college: "", year: "" });
//   const [expForm, setExpForm] = useState({
//     title: "",
//     company: "",
//     duration: "",
//     points: "",
//   });

//   // --- Fetch data on load ---
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [eduRes, expRes] = await Promise.all([
//           axios.get(`${API_BASE}/education`),
//           axios.get(`${API_BASE}/experience`),
//         ]);
//         setEducation(eduRes.data);
//         setExperience(expRes.data);
//       } catch (err) {
//         console.error("Error fetching data:", err);
//       }
//     };
//     fetchData();
//   }, []);

//   // --- Submit Education ---
//   const handleEduSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(`${API_BASE}/education`, eduForm);
//       setEducation([...education, res.data]); // add new entry
//       setEduForm({ title: "", college: "", year: "" });
//     } catch (err) {
//       console.error("Error adding education:", err);
//     }
//   };

//   // --- Submit Experience ---
//   const handleExpSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const payload = {
//         ...expForm,
//         points: expForm.points.split(",").map((p) => p.trim()),
//       };
//       const res = await axios.post(`${API_BASE}/experience`, payload);
//       setExperience([...experience, res.data]);
//       setExpForm({ title: "", company: "", duration: "", points: "" });
//     } catch (err) {
//       console.error("Error adding experience:", err);
//     }
//   };

//   return (
//     <Layout>
//       <div className="px-4 sm:px-6 lg:px-8 py-6 bg-neutral-950 text-white min-h-screen">
//         <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-teal-400">
//           Admin Panel - About Section
//         </h2>

//         <div className="md:ml-62 grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* --- Education Section --- */}
//           <div className="bg-neutral-800 p-6 rounded-xl shadow-lg">
//             <h3 className="text-xl font-semibold mb-4 text-teal-300">
//               Add Education
//             </h3>
//             <form onSubmit={handleEduSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 required
//                 placeholder="Title"
//                 value={eduForm.title}
//                 onChange={(e) =>
//                   setEduForm({ ...eduForm, title: e.target.value })
//                 }
//                 className="w-full p-2 rounded bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//               <input
//                 required
//                 type="text"
//                 placeholder="College"
//                 value={eduForm.college}
//                 onChange={(e) =>
//                   setEduForm({ ...eduForm, college: e.target.value })
//                 }
//                 className="w-full p-2 rounded bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//               <input
//                 required
//                 type="text"
//                 placeholder="Year / CGPA"
//                 value={eduForm.year}
//                 onChange={(e) =>
//                   setEduForm({ ...eduForm, year: e.target.value })
//                 }
//                 className="w-full p-2 rounded bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//               <button
//                 type="submit"
//                 className="w-full px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded font-semibold"
//               >
//                 Add Education
//               </button>
//             </form>

//             {/* Display Education */}
//             <div className="mt-6 space-y-4">
//               {education.map((edu, idx) => (
//                 <div
//                   key={idx}
//                   className="border border-neutral-600 p-4 rounded bg-neutral-900"
//                 >
//                   <p className="text-lg font-bold text-teal-400">{edu.title}</p>
//                   <p>{edu.college}</p>
//                   <p className="text-sm text-gray-400">{edu.year}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* --- Experience Section --- */}
//           <div className="bg-neutral-800 p-6 rounded-xl shadow-lg">
//             <h3 className="text-xl font-semibold mb-4 text-teal-300">
//               Add Experience
//             </h3>
//             <form onSubmit={handleExpSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 required
//                 placeholder="Title"
//                 value={expForm.title}
//                 onChange={(e) =>
//                   setExpForm({ ...expForm, title: e.target.value })
//                 }
//                 className="w-full p-2 rounded bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//               <input
//                 required
//                 type="text"
//                 placeholder="Company"
//                 value={expForm.company}
//                 onChange={(e) =>
//                   setExpForm({ ...expForm, company: e.target.value })
//                 }
//                 className="w-full p-2 rounded bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//               <input
//                 required
//                 type="text"
//                 placeholder="Duration"
//                 value={expForm.duration}
//                 onChange={(e) =>
//                   setExpForm({ ...expForm, duration: e.target.value })
//                 }
//                 className="w-full p-2 rounded bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//               <textarea
//                 placeholder="Bullet Points (comma separated)"
//                 value={expForm.points}
//                 onChange={(e) =>
//                   setExpForm({ ...expForm, points: e.target.value })
//                 }
//                 className="w-full p-2 rounded bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//               <button
//                 type="submit"
//                 className="w-full px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded font-semibold"
//               >
//                 Add Experience
//               </button>
//             </form>

//             {/* Display Experience */}
//             <div className="mt-6 space-y-4">
//               {experience.map((exp, idx) => (
//                 <div
//                   key={idx}
//                   className="border border-neutral-600 p-4 rounded bg-neutral-900"
//                 >
//                   <p className="text-lg font-bold text-teal-400">{exp.title}</p>
//                   <p>{exp.company}</p>
//                   <p className="text-sm text-gray-400">{exp.duration}</p>
//                   <ul className="list-disc ml-5 text-sm text-gray-300 mt-2">
//                     {exp.points.map((pt, i) => (
//                       <li key={i}>{pt}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Aboutpart;


// import React, { useState, useEffect } from "react";
// import Layout from "./Layout";
// import axios from "axios";

// const API_BASE = "http://localhost:5000/api/about"; // apna backend URL daalna

// const Aboutpart = () => {
//   const [education, setEducation] = useState([]);
//   const [experience, setExperience] = useState([]);

//   const [eduForm, setEduForm] = useState({ title: "", college: "", year: "" });
//   const [expForm, setExpForm] = useState({
//     title: "",
//     company: "",
//     duration: "",
//     points: "",
//   });

//   const [editingEdu, setEditingEdu] = useState(null);
//   const [editingExp, setEditingExp] = useState(null);

//   // --- Fetch data on load ---
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [eduRes, expRes] = await Promise.all([
//           axios.get(`${API_BASE}/education`),
//           axios.get(`${API_BASE}/experience`),
//         ]);
//         setEducation(eduRes.data);
//         setExperience(expRes.data);
//       } catch (err) {
//         console.error("Error fetching data:", err);
//       }
//     };
//     fetchData();
//   }, []);

//   // --- Submit Education ---
//   const handleEduSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editingEdu) {
//         const res = await axios.put(
//           `${API_BASE}/education/${editingEdu._id}`,
//           eduForm
//         );
//         setEducation(
//           education.map((e) => (e._id === editingEdu._id ? res.data : e))
//         );
//         setEditingEdu(null);
//       } else {
//         const res = await axios.post(`${API_BASE}/education`, eduForm);
//         setEducation([...education, res.data]);
//       }
//       setEduForm({ title: "", college: "", year: "" });
//     } catch (err) {
//       console.error("Error saving education:", err);
//     }
//   };

//   // --- Submit Experience ---
//   const handleExpSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const payload = {
//         ...expForm,
//         points: expForm.points.split(",").map((p) => p.trim()),
//       };
//       if (editingExp) {
//         const res = await axios.put(
//           `${API_BASE}/experience/${editingExp._id}`,
//           payload
//         );
//         setExperience(
//           experience.map((ex) => (ex._id === editingExp._id ? res.data : ex))
//         );
//         setEditingExp(null);
//       } else {
//         const res = await axios.post(`${API_BASE}/experience`, payload);
//         setExperience([...experience, res.data]);
//       }
//       setExpForm({ title: "", company: "", duration: "", points: "" });
//     } catch (err) {
//       console.error("Error saving experience:", err);
//     }
//   };

//   // --- Delete Education ---
//   const handleDeleteEdu = async (id) => {
//     try {
//       await axios.delete(`${API_BASE}/education/${id}`);
//       setEducation(education.filter((e) => e._id !== id));
//     } catch (err) {
//       console.error("Error deleting education:", err);
//     }
//   };

//   // --- Delete Experience ---
//   const handleDeleteExp = async (id) => {
//     try {
//       await axios.delete(`${API_BASE}/experience/${id}`);
//       setExperience(experience.filter((e) => e._id !== id));
//     } catch (err) {
//       console.error("Error deleting experience:", err);
//     }
//   };

//   return (
//     <Layout>
//       <div className="px-4 sm:px-6 lg:px-8 py-6 bg-neutral-950 text-white min-h-screen">
//         <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-teal-400">
//           Admin Panel - About Section
//         </h2>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* --- Education Section --- */}
//           <div className="bg-neutral-800 p-6 rounded-xl shadow-lg">
//             <h3 className="text-xl font-semibold mb-4 text-teal-300">
//               {editingEdu ? "Edit Education" : "Add Education"}
//             </h3>
//             <form onSubmit={handleEduSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 required
//                 placeholder="Title"
//                 value={eduForm.title}
//                 onChange={(e) =>
//                   setEduForm({ ...eduForm, title: e.target.value })
//                 }
//                 className="w-full p-2 rounded bg-neutral-700 text-white"
//               />
//               <input
//                 required
//                 type="text"
//                 placeholder="College"
//                 value={eduForm.college}
//                 onChange={(e) =>
//                   setEduForm({ ...eduForm, college: e.target.value })
//                 }
//                 className="w-full p-2 rounded bg-neutral-700 text-white"
//               />
//               <input
//                 required
//                 type="text"
//                 placeholder="Year / CGPA"
//                 value={eduForm.year}
//                 onChange={(e) =>
//                   setEduForm({ ...eduForm, year: e.target.value })
//                 }
//                 className="w-full p-2 rounded bg-neutral-700 text-white"
//               />
//               <button
//                 type="submit"
//                 className="w-full px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded font-semibold"
//               >
//                 {editingEdu ? "Update Education" : "Add Education"}
//               </button>
//             </form>

//             {/* Display Education */}
//             <div className="mt-6 space-y-4">
//               {education.map((edu) => (
//                 <div
//                   key={edu._id}
//                   className="border border-neutral-600 p-4 rounded bg-neutral-900 flex justify-between"
//                 >
//                   <div>
//                     <p className="text-lg font-bold text-teal-400">
//                       {edu.title}
//                     </p>
//                     <p>{edu.college}</p>
//                     <p className="text-sm text-gray-400">{edu.year}</p>
//                   </div>
//                   <div className="space-x-2">
//                     <button
//                       onClick={() => {
//                         setEditingEdu(edu);
//                         setEduForm({
//                           title: edu.title,
//                           college: edu.college,
//                           year: edu.year,
//                         });
//                       }}
//                       className="px-2 py-1 bg-yellow-600 rounded"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDeleteEdu(edu._id)}
//                       className="px-2 py-1 bg-red-600 rounded"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* --- Experience Section --- */}
//           <div className="bg-neutral-800 p-6 rounded-xl shadow-lg">
//             <h3 className="text-xl font-semibold mb-4 text-teal-300">
//               {editingExp ? "Edit Experience" : "Add Experience"}
//             </h3>
//             <form onSubmit={handleExpSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 required
//                 placeholder="Title"
//                 value={expForm.title}
//                 onChange={(e) =>
//                   setExpForm({ ...expForm, title: e.target.value })
//                 }
//                 className="w-full p-2 rounded bg-neutral-700 text-white"
//               />
//               <input
//                 required
//                 type="text"
//                 placeholder="Company"
//                 value={expForm.company}
//                 onChange={(e) =>
//                   setExpForm({ ...expForm, company: e.target.value })
//                 }
//                 className="w-full p-2 rounded bg-neutral-700 text-white"
//               />
//               <input
//                 required
//                 type="text"
//                 placeholder="Duration"
//                 value={expForm.duration}
//                 onChange={(e) =>
//                   setExpForm({ ...expForm, duration: e.target.value })
//                 }
//                 className="w-full p-2 rounded bg-neutral-700 text-white"
//               />
//               <textarea
//                 placeholder="Bullet Points (comma separated)"
//                 value={expForm.points}
//                 onChange={(e) =>
//                   setExpForm({ ...expForm, points: e.target.value })
//                 }
//                 className="w-full p-2 rounded bg-neutral-700 text-white"
//               />
//               <button
//                 type="submit"
//                 className="w-full px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded font-semibold"
//               >
//                 {editingExp ? "Update Experience" : "Add Experience"}
//               </button>
//             </form>

//             {/* Display Experience */}
//             <div className="mt-6 space-y-4">
//               {experience.map((exp) => (
//                 <div
//                   key={exp._id}
//                   className="border border-neutral-600 p-4 rounded bg-neutral-900 flex justify-between"
//                 >
//                   <div>
//                     <p className="text-lg font-bold text-teal-400">
//                       {exp.title}
//                     </p>
//                     <p>{exp.company}</p>
//                     <p className="text-sm text-gray-400">{exp.duration}</p>
//                     <ul className="list-disc ml-5 text-sm text-gray-300 mt-2">
//                       {exp.points.map((pt, i) => (
//                         <li key={i}>{pt}</li>
//                       ))}
//                     </ul>
//                   </div>
//                   <div className="space-x-2">
//                     <button
//                       onClick={() => {
//                         setEditingExp(exp);
//                         setExpForm({
//                           title: exp.title,
//                           company: exp.company,
//                           duration: exp.duration,
//                           points: exp.points.join(", "),
//                         });
//                       }}
//                       className="px-2 py-1 bg-yellow-600 rounded"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDeleteExp(exp._id)}
//                       className="px-2 py-1 bg-red-600 rounded"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Aboutpart;

import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import axios from "axios";

const API_BASE = "https://personal-portfolio-mern-stack.vercel.app/api/about"; // apna backend URL

const Aboutpart = () => {
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  const [eduForm, setEduForm] = useState({ title: "", college: "", year: "" });
  const [expForm, setExpForm] = useState({
    title: "",
    company: "",
    duration: "",
    points: "",
  });

  const [editEduId, setEditEduId] = useState(null);
  const [editExpId, setEditExpId] = useState(null);

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [eduRes, expRes] = await Promise.all([
          axios.get(`${API_BASE}/education`),
          axios.get(`${API_BASE}/experience`),
        ]);
        setEducation(eduRes.data);
        setExperience(expRes.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  // Add / Update Education
  const handleEduSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editEduId) {
        const res = await axios.put(`${API_BASE}/education/${editEduId}`, eduForm);
        setEducation(education.map((edu) => (edu._id === editEduId ? res.data : edu)));
        setEditEduId(null);
      } else {
        const res = await axios.post(`${API_BASE}/education`, eduForm);
        setEducation([...education, res.data]);
      }
      setEduForm({ title: "", college: "", year: "" });
    } catch (err) {
      console.error("Error saving education:", err);
    }
  };

  // Delete Education
  const handleDeleteEdu = async (id) => {
    try {
      await axios.delete(`${API_BASE}/education/${id}`);
      setEducation(education.filter((edu) => edu._id !== id));
    } catch (err) {
      console.error("Error deleting education:", err);
    }
  };

  // Edit Education
  const handleEditEdu = (edu) => {
    setEduForm({ title: edu.title, college: edu.college, year: edu.year });
    setEditEduId(edu._id);
  };

  // Add / Update Experience
  const handleExpSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...expForm,
        points: expForm.points.split(",").map((p) => p.trim()),
      };

      if (editExpId) {
        const res = await axios.put(`${API_BASE}/experience/${editExpId}`, payload);
        setExperience(experience.map((exp) => (exp._id === editExpId ? res.data : exp)));
        setEditExpId(null);
      } else {
        const res = await axios.post(`${API_BASE}/experience`, payload);
        setExperience([...experience, res.data]);
      }
      setExpForm({ title: "", company: "", duration: "", points: "" });
    } catch (err) {
      console.error("Error saving experience:", err);
    }
  };

  // Delete Experience
  const handleDeleteExp = async (id) => {
    try {
      await axios.delete(`${API_BASE}/experience/${id}`);
      setExperience(experience.filter((exp) => exp._id !== id));
    } catch (err) {
      console.error("Error deleting experience:", err);
    }
  };

  // Edit Experience
  const handleEditExp = (exp) => {
    setExpForm({
      title: exp.title,
      company: exp.company,
      duration: exp.duration,
      points: exp.points.join(", "),
    });
    setEditExpId(exp._id);
  };

  return (
    <Layout>
      <div className="px-4 sm:px-6 lg:px-8 py-6 bg-neutral-950 text-white min-h-screen">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-teal-400">
          Admin Panel - About Section
        </h2>

        <div className="md:ml-62 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* --- Education Section --- */}
          <div className="bg-neutral-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-teal-300">
              {editEduId ? "Edit Education" : "Add Education"}
            </h3>
            <form onSubmit={handleEduSubmit} className="space-y-4">
              <input
                type="text"
                required
                placeholder="Title"
                value={eduForm.title}
                onChange={(e) => setEduForm({ ...eduForm, title: e.target.value })}
                className="w-full p-2 rounded bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                required
                type="text"
                placeholder="College"
                value={eduForm.college}
                onChange={(e) => setEduForm({ ...eduForm, college: e.target.value })}
                className="w-full p-2 rounded bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                required
                type="text"
                placeholder="Year / CGPA"
                value={eduForm.year}
                onChange={(e) => setEduForm({ ...eduForm, year: e.target.value })}
                className="w-full p-2 rounded bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded font-semibold"
              >
                {editEduId ? "Update" : "Add"}
              </button>
            </form>

            {/* Display Education */}
            <div className="mt-6 space-y-4">
              {education.map((edu) => (
                <div
                  key={edu._id}
                  className="border border-neutral-600 p-4 rounded bg-neutral-900 flex flex-col sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-lg font-bold text-teal-400">{edu.title}</p>
                    <p>{edu.college}</p>
                    <p className="text-sm text-gray-400">{edu.year}</p>
                  </div>
                  <div className="flex gap-2 mt-3 sm:mt-0">
                    <button
                      onClick={() => handleEditEdu(edu)}
                      className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteEdu(edu._id)}
                      className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- Experience Section --- */}
          <div className="bg-neutral-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-teal-300">
              {editExpId ? "Edit Experience" : "Add Experience"}
            </h3>
            <form onSubmit={handleExpSubmit} className="space-y-4">
              <input
                type="text"
                required
                placeholder="Title"
                value={expForm.title}
                onChange={(e) => setExpForm({ ...expForm, title: e.target.value })}
                className="w-full p-2 rounded bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                required
                type="text"
                placeholder="Company"
                value={expForm.company}
                onChange={(e) => setExpForm({ ...expForm, company: e.target.value })}
                className="w-full p-2 rounded bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                required
                type="text"
                placeholder="Duration"
                value={expForm.duration}
                onChange={(e) => setExpForm({ ...expForm, duration: e.target.value })}
                className="w-full p-2 rounded bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <textarea
                placeholder="Bullet Points (comma separated)"
                value={expForm.points}
                onChange={(e) => setExpForm({ ...expForm, points: e.target.value })}
                className="w-full p-2 rounded bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded font-semibold"
              >
                {editExpId ? "Update" : "Add"}
              </button>
            </form>

            {/* Display Experience */}
            <div className="mt-6 space-y-4">
              {experience.map((exp) => (
                <div
                  key={exp._id}
                  className="border border-neutral-600 p-4 rounded bg-neutral-900 flex flex-col sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-lg font-bold text-teal-400">{exp.title}</p>
                    <p>{exp.company}</p>
                    <p className="text-sm text-gray-400">{exp.duration}</p>
                    <ul className="list-disc ml-5 text-sm text-gray-300 mt-2">
                      {exp.points.map((pt, i) => (
                        <li key={i}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex gap-2 mt-3 sm:mt-0">
                    <button
                      onClick={() => handleEditExp(exp)}
                      className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteExp(exp._id)}
                      className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Aboutpart;
