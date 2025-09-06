




import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [message, setMessage] = useState("Loading...");
  const [hero, setHero] = useState({
    name: "Ankit Patidar",
    title: "Software Engineer",
    image: "/images/p3.jpg",
  });
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [contacts, setContacts] = useState([]);

  // Axios instance with token
  const token = localStorage.getItem("token");
  const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: { Authorization: `Bearer ${token}` },
  });

  // Fetch dashboard data
  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const { data } = await axiosInstance.get("/admin/dashboard");
        setMessage(data.message || "Dashboard loaded");
        if (data.hero) setHero(data.hero);
        if (data.skills) setSkills(data.skills);
        if (data.education) setEducation(data.education);
        if (data.experience) setExperience(data.experience);
      } catch (err) {
        console.error(err);
        setMessage("Failed to load dashboard data");
      }
    };
    fetchDashboard();
  }, []);

  // Fetch contacts
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const { data } = await axios.get("https://personal-portfolio-mern-stack.vercel.app/api/contacts");
        setContacts(data);
      } catch (err) {
        console.error(err);
        setContacts([]);
      }
    };
    fetchContacts();
  }, []);

  return (
    <Layout>
      <div className="pt-20 px-4 sm:px-6 min-h-screen bg-neutral-950 text-white transition-all duration-300 lg:ml-64">
        <h1 className="text-2xl sm:text-3xl font-bold text-teal-400 mb-6 text-center">
          Admin Dashboard
        </h1>

        <p className="text-center text-gray-400 mb-6 text-sm sm:text-base">{message}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Hero Section */}
          <div className="bg-neutral-800 p-4 sm:p-6 rounded-xl shadow border border-neutral-700">
            <h2 className="text-lg sm:text-xl font-semibold mb-3">Hero Section</h2>
            <div className="flex items-center space-x-4">
              <img
                src={hero.image}
                alt="hero"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
              />
              <div>
                <p className="text-base sm:text-lg font-bold">{hero.name}</p>
                <p className="text-gray-300 text-sm sm:text-base">{hero.title}</p>
              </div>
            </div>
            <Link
              to="/admin/heropart"
              className="inline-block mt-4 px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded text-sm sm:text-base"
            >
              Manage Hero
            </Link>
          </div>

          {/* Skills Section */}
          <div className="bg-neutral-800 p-4 sm:p-6 rounded-xl shadow border border-neutral-700">
            <h2 className="text-lg sm:text-xl font-semibold mb-3">Skills</h2>
            {skills.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {skills.slice(0, 3).map((skill) => (
                  <div
                    key={skill._id}
                    className="text-center bg-neutral-700 rounded p-2"
                  >
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 mx-auto"
                    />
                    <p className="text-xs sm:text-sm mt-1">{skill.name}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-sm">No skills added yet.</p>
            )}
            <Link
              to="/admin/skillspart"
              className="inline-block mt-4 px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded text-sm sm:text-base"
            >
              Manage Skills
            </Link>
          </div>

          {/* About Section */}
          <div className="bg-neutral-800 p-4 sm:p-6 rounded-xl shadow border border-neutral-700">
            <h2 className="text-lg sm:text-xl font-semibold mb-3">About</h2>
            <p className="text-sm sm:text-base">Education: {education.length}</p>
            <p className="text-sm sm:text-base">Experience: {experience.length}</p>
            <Link
              to="/admin/aboutpart"
              className="inline-block mt-4 px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded text-sm sm:text-base"
            >
              Manage About
            </Link>
          </div>

          {/* Contacts Section */}
          <div className="bg-neutral-800 p-4 sm:p-6 rounded-xl shadow border border-neutral-700 md:col-span-2 lg:col-span-3">
            <h2 className="text-lg sm:text-xl font-semibold mb-3">Contact Messages</h2>
            <p className="text-sm sm:text-base">Total Messages: {contacts.length}</p>
            <div className="mt-3 space-y-2 max-h-48 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-neutral-600">
              {contacts.length > 0 ? (
                contacts.slice(0, 5).map((c, i) => (
                  <div
                    key={i}
                    className="p-2 bg-neutral-700 rounded text-xs sm:text-sm space-y-1"
                  >
                    <p className="font-semibold">{c.name}</p>
                    <p className="text-gray-300">{c.message}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-sm">No messages found.</p>
              )}
            </div>
            <Link
              to="/admin/contactuspart"
              className="inline-block mt-4 px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded text-sm sm:text-base"
            >
              Manage Contacts
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
