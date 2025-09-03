

import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  // Agar token nahi hai → login par redirect
  if (!token) {
    return <Navigate to="/admin" replace />;
  }

  return children;
}
