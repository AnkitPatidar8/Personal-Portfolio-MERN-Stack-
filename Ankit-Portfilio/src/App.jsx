
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Adminlogin from "./Components/Admin/Adminlogin";
import NotFound from "./Components/Admin/Notfound";
import Dashboard from "./Components/Admin/Dashboard";
import Aboutpart from "./Components/Admin/Aboutpart";
import Contactuspart from "./Components/Admin/Contactuspart";
import Skillspart from "./Components/Admin/Skillspart";
import Heropart from "./Components/Admin/Heropart";
import ProtectedRoute from "./Components/Admin/ProtectedRoute";

import Hero from "./Components/Hero";
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contactus from "./Components/Contactus";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Public Portfolio */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contactus />
              <Footer />
            </>
          }
        />

        {/* ✅ Admin Login */}
        <Route path="/admin" element={<Adminlogin />} />

        {/* ✅ Protected Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/heropart"
          element={
            <ProtectedRoute>
              <Heropart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/aboutpart"
          element={
            <ProtectedRoute>
              <Aboutpart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/skillspart"
          element={
            <ProtectedRoute>
              <Skillspart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/contactuspart"
          element={
            <ProtectedRoute>
              <Contactuspart />
            </ProtectedRoute>
          }
        />

        {/* ✅ Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
