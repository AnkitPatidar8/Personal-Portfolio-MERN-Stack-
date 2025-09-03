



import React, { useState } from "react";
import Layout from "./Layout";
import Swal from "sweetalert2";

const Heropart = () => {
  const [heroData, setHeroData] = useState({
    name: "Ankit Patidar",
    title: "Software Engineer",
    description:
      "A passionate and detail-oriented Software Engineer with experience in developing scalable web applications and software solutions. Seeking to leverage my skills in front-end and back-end technologies to contribute to a growth-oriented organization.",
    image: "/images/p3.jpg",
  });

  const handleChange = (e) => {
    setHeroData({ ...heroData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Updated Successfully!",
      background: "#1e1e1e",
      color: "#fff",
    });
    console.log(heroData);
  };

  return (
    <Layout>
      <div className="pt-20 px-4 sm:px-6 min-h-screen bg-neutral-950 text-white lg:ml-64 transition-all duration-300">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-teal-400">
          Admin Panel - Hero Section
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg sm:max-w-2xl md:max-w-3xl mx-auto bg-neutral-800 
                     p-4 sm:p-6 md:p-8 rounded-xl shadow-lg space-y-4"
        >
          {/* Name */}
          <div>
            <label className="block text-sm sm:text-base text-gray-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={heroData.name}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 rounded bg-neutral-700 text-white text-sm sm:text-base"
              required
            />
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm sm:text-base text-gray-300 mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={heroData.title}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 rounded bg-neutral-700 text-white text-sm sm:text-base"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm sm:text-base text-gray-300 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={heroData.description}
              onChange={handleChange}
              rows="5"
              className="w-full p-2 sm:p-3 rounded bg-neutral-700 text-white text-sm sm:text-base"
              required
            />
          </div>

          {/* Image */}
          <div>
            <label className="block text-sm sm:text-base text-gray-300 mb-1">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              value={heroData.image}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 rounded bg-neutral-700 text-white text-sm sm:text-base"
              required
            />
            <div className="mt-4 flex justify-center">
              <img
                src={heroData.image}
                alt="Preview"
                className="h-28 w-28 sm:h-40 sm:w-40 rounded-full object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 sm:px-6 sm:py-3 bg-teal-600 hover:bg-teal-700 
                       rounded font-semibold text-sm sm:text-base"
          >
            Save Changes
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Heropart;
