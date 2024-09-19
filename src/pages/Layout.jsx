import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Toolbar } from "@mui/material";
import MenuItem from "../components/MenuItem";
import { useAuth } from "../hooks/useAuth";

const Layout = () => {
  const { user } = useAuth();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navigation />
      {user && <MenuItem />}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar variant="tall" />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
