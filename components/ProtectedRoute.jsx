import { Navigate } from "react-router-dom";
import { useAppContext } from "../hooks/useAppContext";

const ProtectedRoute = ({ children }) => {
  const { token } = useAppContext();

  if (!token) {
    // If not logged in, redirect to login
    return <Navigate to="/login" replace />;
  }

  // If logged in, show the page
  return children;
};

export default ProtectedRoute;
