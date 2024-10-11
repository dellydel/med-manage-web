import { Outlet, useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Toolbar } from "@mui/material";
import MenuItem from "../components/MenuItem";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";
import Footer from "../components/Footer";
const Layout = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    // TODO: need to validate that user token is still valid (if user)
    if (user && location.pathname === "/") {
      navigate("/home", { replace: true });
    } else if (!user && location.pathname === "/") {
      navigate("/login", { replace: true });
    }
  }, [navigate, user]);
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <CssBaseline />
      <Navigation />
      {user && <MenuItem />}
      <Box component="main" sx={{ flexGrow: 1, py: 3, pr: 3, pl: 33 }}>
        <Toolbar variant="tall" />
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};
export default Layout;
