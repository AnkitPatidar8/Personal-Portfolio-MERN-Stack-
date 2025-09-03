
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Adminlogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(`${import.meta.env.VITE_SERVERURL}api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.token) {
        localStorage.setItem("token", data.token);
        setIsLoggedIn(true);
        navigate("/admin/dashboard");

        Swal.fire({
          title: "Success 🎉",
          text: "Welcome to Admin Console",
          icon: "success",
          confirmButtonColor: "#14b8a6",
          background: "#1e1e1e",
          color: "#fff",
        });
      } else {
        setError(data.error || "Login failed");
        Swal.fire({
          title: "Login Failed ❌",
          text: `${data.error || "Invalid credentials"}`,
          icon: "error",
          confirmButtonColor: "#14b8a6",
          background: "#1e1e1e",
          color: "#fff",
        });
      }
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage:
          "url('/images/11.jpg')", // 👈 yaha apna image URL daalna hai
      }}
    >
      <div className="bg-neutral-900/80 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-sm border border-neutral-800">
        <h2 className="text-2xl font-bold mb-6 text-center text-teal-400">
          Admin Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-full bg-neutral-800/80 border border-neutral-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
            autoComplete="username"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-full bg-neutral-800/80 border border-neutral-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
            autoComplete="current-password"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-400 to-slate-600 hover:opacity-90  text-white font-semibold py-2 rounded-full transition duration-200"
          >
            Login
          </button>
          {error && (
            <p className="mt-3 text-red-500 text-sm text-center">{error}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Adminlogin;
