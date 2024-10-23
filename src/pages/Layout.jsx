import { Outlet, useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Toolbar } from "@mui/material";
import MenuItem from "../components/MenuItem";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";
import Footer from "../components/Footer";

const Layout = () => {
  const navigate = useNavigate();
  const { isUserAuthenticated, setIsUserAuthenticated, refreshIdToken } =
    useAuth();

  useEffect(() => {
    const checkTokenAndRefresh = async () => {
      try {
        const idToken = getCookie("id_token");
        if (idToken && !isJwtExpired(idToken)) {
          setIsUserAuthenticated(true);
          console.log("ID token is valid.");
          return;
        }

        const refreshToken = getCookie("refresh_token");
        if (!refreshToken) {
          console.log("No refresh token found. User needs to login.");
          navigate("/login", { replace: true });
          return;
        }

        await refreshIdToken(refreshToken);

        const newIdToken = getCookie("id_token");
        if (newIdToken) {
          setIsUserAuthenticated(true);
          navigate("/home", { replace: true });
        } else {
          navigate("/login", { replace: true });
        }
      } catch (error) {
        //TODO: remove once testing complete
        console.error("Error during token refresh:", error);
        navigate("/login", { replace: true });
      }
    };
    checkTokenAndRefresh();
  }, []);

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
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

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <CssBaseline />
      <Navigation />
      {isUserAuthenticated && <MenuItem />}
      <Box
        component="main"
        sx={{ flexGrow: 1, py: 3, pr: 3, pl: 33, minHeight: "90vh" }}
      >
        <Toolbar variant="tall" />
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};
export default Layout;
