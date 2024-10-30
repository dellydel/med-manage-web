import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoute = ({ children }) => {
  const { user, isJwtExpired } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  if (user && isJwtExpired(user.id_token)) {
    return <Navigate to="/login" />;
  }
  return children;
};
