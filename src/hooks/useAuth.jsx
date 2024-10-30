import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import {
  validateCredentials,
  changePassword,
  refreshToken,
} from "../services/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  const loginUser = async (email, password) => {
    return await validateCredentials(email, password);
  };

  const refreshTokens = async (token) => {
    return await refreshToken(token);
  };

  const logoutUser = () => {
    setUser(null);
    navigate("/login", { replace: true });
  };

  const updatePassword = (email, password, session) => {
    return changePassword(email, password, session);
  };

  const isJwtExpired = (token) => {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const exp = payload.exp;
      const now = Math.floor(Date.now() / 1000);
      return now >= exp;
    } catch {
      return true;
    }
  };

  const value = useMemo(
    () => ({
      user,
      setUser,
      loginUser,
      logoutUser,
      updatePassword,
      refreshTokens,
      isJwtExpired,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
