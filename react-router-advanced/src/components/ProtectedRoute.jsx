import { Navigate } from "react-router-dom";

const isAuthenticated = false; 
// change to true to test protected access

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
}
