import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoute = ({ children }) => {
  const { isUserAuthenticated } = useAuth();
  if (!isUserAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};
