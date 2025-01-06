import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useEffect, useState } from "react";

export const ProtectedRoute = ({ children }) => {
  const { user, isJwtExpired, refreshTokens, setUser } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAndRefreshToken = async () => {
      try {
        if (!user) {
          setIsAuthenticated(false);
          setIsLoading(false);
          return;
        }

        if (user?.id_token && isJwtExpired(user.id_token)) {
          const res = await refreshTokens(user.refresh_token);
          if (res.status === 200) {
            setUser({
              ...user,
              access_token: res.data.accessToken,
              id_token: res.data.idToken,
            });
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
          }
        } else {
          setIsAuthenticated(true);
        }
      } catch (err) {
        console.error("Token refresh failed:", err);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };
    checkAndRefreshToken();
  }, [user, isJwtExpired, refreshTokens, setUser]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
