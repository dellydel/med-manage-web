import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  validateCredentials,
  changePassword,
  refreshToken,
} from "../services/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const navigate = useNavigate();

  const refreshIdToken = async (token) => {
    return await refreshToken(token);
  };

  const loginUser = async (email, password) => {
    return await validateCredentials(email, password);
  };

  const logoutUser = () => {
    // TODO: Temporary workaround - remove cookies access from server
    document.cookie =
      "access_token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=localhost;";
    document.cookie =
      "id_token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=localhost;";
    document.cookie =
      "refresh_token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=localhost;";
    setIsUserAuthenticated(false);
    navigate("/", { replace: true });
  };

  const updatePassword = (email, password, session) => {
    return changePassword(email, password, session);
  };

  const value = useMemo(
    () => ({
      isUserAuthenticated,
      setIsUserAuthenticated,
      loginUser,
      logoutUser,
      updatePassword,
      refreshIdToken,
    }),
    [isUserAuthenticated, logoutUser]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
