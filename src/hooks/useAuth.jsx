import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import { validateCredentials } from "../services/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  const login_user = async (email, password) => {
    return await validateCredentials(email, password)
      .then((response) => {
        if (response.status === 200) {
          if ("accessToken" in response.data) {
            const { accessToken, idToken, refreshToken } = response.data;
            setUser({
              email: email,
              access_token: accessToken,
              id_token: idToken,
              refresh_token: refreshToken,
            });
            navigate("/home");
          }
        }
      })
      .catch((err) => {
        throw err;
      });
  };

  const logout_user = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login_user,
      logout_user,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
