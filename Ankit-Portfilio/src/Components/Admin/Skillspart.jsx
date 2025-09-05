


// import React, { useEffect, useState } from "react";
// import Swal from "sweetalert2";
// import axios from "axios";
// import Layout from "./Layout"; // apna layout import karo

// const SKILLS_API = `${import.meta.env.VITE_SERVERURL}api/skills`;

// const Skillspart = () => {
//   const [skills, setSkills] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     subject: "",
//     image: "",
//     description: "",
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [editId, setEditId] = useState(null);

//   // Fetch all skills
//   useEffect(() => {
//     const fetchSkills = async () => {
//       try {
//         const { data } = await axios.get(SKILLS_API);
//         setSkills(data);
//       } catch (err) {
//         console.error("Error fetching skills:", err);
//       }
//     };
//     fetchSkills();
//   }, []);

//   // Handle input change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submit (Add / Update)
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (isEditing) {
//         await axios.put(`${SKILLS_API}${editId}`, formData);
//         setSkills((prev) =>
//           prev.map((s) => (s._id === editId ? { ...formData, _id: editId } : s))
//         );
//         Swal.fire("Updated!", "Skill updated successfully.", "success");
//       } else {
//         const { data } = await axios.post(SKILLS_API, formData);
//         setSkills((prev) => [...prev, data]);
//         Swal.fire("Added!", "New skill has been added.", "success");
//       }
//       setFormData({ name: "", subject: "", image: "", description: "" });
//       setIsEditing(false);
//       setEditId(null);
//     } catch (err) {
//       Swal.fire("Error", err.message || "Something went wrong", "error");
//     }
//   };

//   // Handle delete
//   const handleDelete = async (id) => {
//     const confirm = await Swal.fire({
//       title: "Delete Skill?",
//       text: "You won't be able to undo this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, delete it!",
//     });

//     if (!confirm.isConfirmed) return;

//     try {
//       await axios.delete(`${SKILLS_API}${id}`);
//       setSkills((prev) => prev.filter((s) => s._id !== id));
//       Swal.fire("Deleted!", "Skill has been removed.", "success");
//     } catch (err) {
//       Swal.fire("Error", err.message || "Something went wrong", "error");
//     }
//   };

//   // Handle edit
//   const handleEdit = (skill) => {
//     setFormData(skill);
//     setIsEditing(true);
//     setEditId(skill._id);
//   };

//   return (
//     <Layout>
//       <div className="pt-20 px-4 sm:px-6 min-h-screen bg-neutral-950 text-white lg:ml-64 transition-all duration-300">
//         <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-teal-400">
//           Admin Panel - Skill Manager
//         </h1>

//         {/* Skill Form */}
//         <form
//           onSubmit={handleSubmit}
//           className="bg-neutral-800 p-4 sm:p-6 rounded-xl mb-8 space-y-4 max-w-4xl mx-auto"
//         >
//           <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Skill Name"
//               className="p-2 rounded bg-neutral-700 text-white w-full"
//               required
//             />
//             <input
//               type="text"
//               name="subject"
//               value={formData.subject}
//               onChange={handleChange}
//               placeholder="Subject (Front-end / Back-end / Database / Tools)"
//               className="p-2 rounded bg-neutral-700 text-white w-full"
//             />
//             <input
//               type="text"
//               name="image"
//               value={formData.image}
//               onChange={handleChange}
//               placeholder="Image URL"
//               className="p-2 rounded bg-neutral-700 text-white w-full"
//               required
//             />
//             <input
//               type="text"
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               placeholder="Description"
//               className="p-2 rounded bg-neutral-700 text-white w-full"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="px-6 py-2 bg-teal-600 hover:bg-teal-700 rounded font-semibold"
//           >
//             {isEditing ? "Update Skill" : "Add Skill"}
//           </button>
//         </form>

//         {/* Skill List */}
//         <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//           {skills.map((skill) => (
//             <div
//               key={skill._id}
//               className="bg-neutral-800 p-4 rounded-xl shadow-md flex flex-col items-center"
//             >
//               <img src={skill.image} alt={skill.name} className="w-20 h-20 object-contain mb-3" />
//               <h2 className="text-lg font-bold">{skill.name}</h2>
//               <p className="text-gray-400">{skill.subject}</p>
//               <p className="text-sm text-gray-500 mt-2">{skill.description}</p>
//               <div className="flex gap-2 mt-4">
//                 <button
//                   onClick={() => handleEdit(skill)}
//                   className="px-3 py-1 bg-blue-600 rounded"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(skill._id)}
//                   className="px-3 py-1 bg-red-600 rounded"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Skillspart;


// import React, { useEffect, useState } from "react";
// import Swal from "sweetalert2";
// import axios from "axios";
// import Layout from "./Layout";
 
// const SKILLS_API = "http://localhost:5000/api/skills";

// const Skillspart = () => {
//   const [skills, setSkills] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     subject: "",
//     image: "",
//     description: "",
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [editId, setEditId] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   // Fetch all skills
//   useEffect(() => {
//     const fetchSkills = async () => {
//       try {
//         const { data } = await axios.get(SKILLS_API);
//         setSkills(data);
//       } catch (err) {
//         console.error("Error fetching skills:", err);
//       }
//     };
//     fetchSkills();
//   }, []);

//   // Handle input change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submit (Add / Update)
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (isEditing) {
//         await axios.put(`${SKILLS_API}/${editId}`, formData);
//         setSkills((prev) =>
//           prev.map((s) => (s._id === editId ? { ...formData, _id: editId } : s))
//         );
//         Swal.fire("Updated!", 
//           "Skill updated successfully.",
//           "success",);
//       } else {
//         const { data } = await axios.post(SKILLS_API, formData);
//         setSkills((prev) => [...prev, data]);
//         Swal.fire("Added!", "New skill has been added.", "success");
//       }
//       setFormData({ name: "", subject: "", image: "", description: "" });
//       setIsEditing(false);
//       setEditId(null);
//       setShowModal(false);
//     } catch (err) {
//       Swal.fire("Error", err.message || "Something went wrong", "error");
//     }
//   };

//   // Handle delete
//   const handleDelete = async (id) => {
//     const confirm = await Swal.fire({
//       title: "Delete Skill?",
//       text: "You won't be able to undo this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, delete it!",
//     });

//     if (!confirm.isConfirmed) return;

//     try {
//       await axios.delete(`${SKILLS_API}/${id}`);
//       setSkills((prev) => prev.filter((s) => s._id !== id));
//       Swal.fire("Deleted!", "Skill has been removed.", "success");
//     } catch (err) {
//       Swal.fire("Error", err.message || "Something went wrong", "error");
//     }
//   };

//   // Handle edit
//   const handleEdit = (skill) => {
//     setFormData(skill);
//     setIsEditing(true);
//     setEditId(skill._id);
//     setShowModal(true);
//   };

//   return (
//     <Layout>
//       <div className="pt-20 px-4 sm:px-6 min-h-screen bg-neutral-950 text-white lg:ml-64 transition-all duration-300">
//         <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-teal-400">
//           Admin Panel - Skill Manager
//         </h1>

//         {/* Add Skill Button */}
//         <div className="text-right mb-6">
//           <button
//             onClick={() => {
//               setIsEditing(false);
//               setFormData({ name: "", subject: "", image: "", description: "" });
//               setShowModal(true);
//             }}
//             className="px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded-lg"
//           >
//             + Add Skill
//           </button>
//         </div>

//         {/* Skills Table */}
//         <div className="overflow-x-auto">
//           <table className="w-full border-collapse">
//             <thead>
//               <tr className="bg-neutral-800 text-gray-300">
//                 <th className="px-4 py-3 text-left">Logo</th>
//                 <th className="px-4 py-3 text-left">Skill</th>
//                 <th className="px-4 py-3 text-left">Subject</th>
//                 <th className="px-4 py-3 text-left">Description</th>
//                 <th className="px-4 py-3 text-center">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {skills.map((skill) => (
//                 <tr
//                   key={skill._id}
//                   className="border-b border-neutral-700 hover:bg-neutral-800"
//                 >
//                   <td className="px-4 py-3">
//                     <img
//                       src={skill.image}
//                       alt={skill.name}
//                       className="w-10 h-10 object-contain"
//                     />
//                   </td>
//                   <td className="px-4 py-3 font-semibold">{skill.name}</td>
//                   <td className="px-4 py-3 text-gray-400">{skill.subject}</td>
//                   <td className="px-4 py-3 text-gray-300">{skill.description}</td>
//                   <td className="px-4 py-3 flex gap-2 justify-center">
//                     <button
//                       onClick={() => handleEdit(skill)}
//                       className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded-md"
//                     >
//                       ✏️
//                     </button>
//                     <button
//                       onClick={() => handleDelete(skill._id)}
//                       className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded-md"
//                     >
//                       🗑️
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Modal for Add/Edit */}
//         {showModal && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//             <div className="bg-neutral-800 p-6 rounded-xl max-w-lg w-full">
//               <h2 className="text-xl font-bold mb-4">
//                 {isEditing ? "Edit Skill" : "Add Skill"}
//               </h2>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Skill Name"
//                   className="p-2 rounded bg-neutral-700 text-white w-full"
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   placeholder="Subject"
//                   className="p-2 rounded bg-neutral-700 text-white w-full"
//                 />
//                 <input
//                   type="text"
//                   name="image"
//                   value={formData.image}
//                   onChange={handleChange}
//                   placeholder="Image URL"
//                   className="p-2 rounded bg-neutral-700 text-white w-full"
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="description"
//                   value={formData.description}
//                   onChange={handleChange}
//                   placeholder="Description"
//                   className="p-2 rounded bg-neutral-700 text-white w-full"
//                   required
//                 />
//                 <div className="flex justify-end gap-2">
//                   <button
//                     type="button"
//                     onClick={() => setShowModal(false)}
//                     className="px-4 py-2 bg-gray-600 rounded-lg"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded-lg"
//                   >
//                     {isEditing ? "Update" : "Add"}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default Skillspart;
  


// Handle form submit (Add / Update)
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    if (isEditing) {
      // ✅ fix: add slash before editId
      await axios.put(`${SKILLS_API}/${editId}`, formData);
      setSkills((prev) =>
        prev.map((s) => (s._id === editId ? { ...formData, _id: editId } : s))
      );
      Swal.fire("Updated!", "Skill updated successfully.", "success");
    } else {
      const { data } = await axios.post(SKILLS_API, formData);
      setSkills((prev) => [...prev, data]);
      Swal.fire("Added!", "New skill has been added.", "success");
    }
    setFormData({ name: "", subject: "", image: "", description: "" });
    setIsEditing(false);
    setEditId(null);
  } catch (err) {
    Swal.fire("Error", err.message || "Something went wrong", "error");
  }
};

// Handle delete
const handleDelete = async (id) => {
  const confirm = await Swal.fire({
    title: "Delete Skill?",
    text: "You won't be able to undo this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!",
  });

  if (!confirm.isConfirmed) return;

  try {
    // ✅ fix: add slash before id
    await axios.delete(`${SKILLS_API}/${id}`);
    setSkills((prev) => prev.filter((s) => s._id !== id));
    Swal.fire("Deleted!", "Skill has been removed.", "success");
  } catch (err) {
    Swal.fire("Error", err.message || "Something went wrong", "error");
  }
};
