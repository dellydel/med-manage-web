import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Toolbar } from "@mui/material";
import MenuItem from "../components/MenuItem";
import { useAuth } from "../hooks/useAuth";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Layout = () => {
  const { user, isJwtExpired } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      return navigate("/login");
    }
    if (user && user.id_token) {
      const isExpired = isJwtExpired(user.id_token);
      if (isExpired) {
        return navigate("/login");
      }
    }
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <CssBaseline />
      <Navigation />
      {user && !isJwtExpired(user.id_token) && <MenuItem />}
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
