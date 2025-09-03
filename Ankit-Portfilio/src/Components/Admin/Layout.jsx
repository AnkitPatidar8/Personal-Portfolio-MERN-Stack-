

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col">
      {/* Top Navbar */}
      <header className="bg-neutral-900 w-full shadow py-4 px-6 flex justify-between items-center fixed top-0 left-0 z-50">
        {/* Hamburger (mobile only) */}
        <button
          className="lg:hidden text-white"
          onClick={() => setSidebarOpen((s) => !s)}
          aria-label={sidebarOpen ? "Close menu" : "Open menu"}
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <h1 className="text-xl text-white font-semibold">Admin Panel</h1>

        <button
          onClick={handleLogout}
          className="bg-yellow-400 px-4 py-1 rounded-full text-black transition-transform duration-300 hover:scale-110"
        >
          Logout
        </button>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white p-4 space-y-4 transform transition-transform duration-300 z-40
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav className="space-y-2">
          <Link to="/admin/dashboard" className="block px-3 py-2 rounded hover:bg-gray-700">Dashboard</Link>
          <Link to="/admin/heropart" className="block px-3 py-2 rounded hover:bg-gray-700">Hero Part</Link>
          <Link to="/admin/skillspart" className="block px-3 py-2 rounded hover:bg-gray-700">Skills Part</Link>
          <Link to="/admin/aboutpart" className="block px-3 py-2 rounded hover:bg-gray-700">About Part</Link>
          <Link to="/admin/contactuspart" className="block px-3 py-2 rounded hover:bg-gray-700">Contact Part</Link>
          <Link to="/" className="block px-3 py-2 rounded hover:bg-gray-700">Back to Portfolio</Link>
          <button onClick={handleLogout} className="block w-full text-left px-3 py-2 rounded hover:bg-red-600">
            Log Out
          </button>
        </nav>
      </aside>

      {/* Overlay (mobile) */}
      {sidebarOpen && (
        <button
          aria-label="Close sidebar overlay"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 lg:hidden z-30"
        />
      )}

      {/* Main Content */}
      <main className="flex-1 pt-20  px-6 transition-all duration-300">
        {children}
      </main>
    </div>
  );
};

export default Layout;
