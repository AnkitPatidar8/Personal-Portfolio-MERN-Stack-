


import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import Layout from "./Layout"; // apna layout import karo

const SKILLS_API = `${import.meta.env.VITE_SERVERURL}api/skills`;

const Skillspart = () => {
  const [skills, setSkills] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    image: "",
    description: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // Fetch all skills
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const { data } = await axios.get(SKILLS_API);
        setSkills(data);
      } catch (err) {
        console.error("Error fetching skills:", err);
      }
    };
    fetchSkills();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit (Add / Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(`${SKILLS_API}${editId}`, formData);
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
      await axios.delete(`${SKILLS_API}${id}`);
      setSkills((prev) => prev.filter((s) => s._id !== id));
      Swal.fire("Deleted!", "Skill has been removed.", "success");
    } catch (err) {
      Swal.fire("Error", err.message || "Something went wrong", "error");
    }
  };

  // Handle edit
  const handleEdit = (skill) => {
    setFormData(skill);
    setIsEditing(true);
    setEditId(skill._id);
  };

  return (
    <Layout>
      <div className="pt-20 px-4 sm:px-6 min-h-screen bg-neutral-950 text-white lg:ml-64 transition-all duration-300">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-teal-400">
          Admin Panel - Skill Manager
        </h1>

        {/* Skill Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-neutral-800 p-4 sm:p-6 rounded-xl mb-8 space-y-4 max-w-4xl mx-auto"
        >
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Skill Name"
              className="p-2 rounded bg-neutral-700 text-white w-full"
              required
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject (Front-end / Back-end / Database / Tools)"
              className="p-2 rounded bg-neutral-700 text-white w-full"
            />
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Image URL"
              className="p-2 rounded bg-neutral-700 text-white w-full"
              required
            />
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              className="p-2 rounded bg-neutral-700 text-white w-full"
              required
            />
          </div>

          <button
            type="submit"
            className="px-6 py-2 bg-teal-600 hover:bg-teal-700 rounded font-semibold"
          >
            {isEditing ? "Update Skill" : "Add Skill"}
          </button>
        </form>

        {/* Skill List */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill._id}
              className="bg-neutral-800 p-4 rounded-xl shadow-md flex flex-col items-center"
            >
              <img src={skill.image} alt={skill.name} className="w-20 h-20 object-contain mb-3" />
              <h2 className="text-lg font-bold">{skill.name}</h2>
              <p className="text-gray-400">{skill.subject}</p>
              <p className="text-sm text-gray-500 mt-2">{skill.description}</p>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => handleEdit(skill)}
                  className="px-3 py-1 bg-blue-600 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(skill._id)}
                  className="px-3 py-1 bg-red-600 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Skillspart;