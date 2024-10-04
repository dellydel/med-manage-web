import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import { validateCredentials, changePassword } from "../services/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  const loginUser = async (email, password) => {
    return validateCredentials(email, password);
  };

  const logoutUser = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const updatePassword = (email, password, session) => {
    return changePassword(email, password, session);
  };

  const value = useMemo(
    () => ({
      user,
      setUser,
      loginUser,
      logoutUser,
      updatePassword,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
