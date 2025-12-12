import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // ✅ REQUIRED

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
}
