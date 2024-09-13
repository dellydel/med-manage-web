import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Toolbar } from "@mui/material";
import MenuItem from "../components/MenuItem";

const Layout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navigation />
      <MenuItem />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar variant="tall" />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
