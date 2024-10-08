import { Link, Outlet, useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Toolbar } from "@mui/material";
import MenuItem from "../components/MenuItem";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";

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
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navigation />
      {user && <MenuItem />}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar variant="tall" />
        <Outlet />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Powered by
          <Link to={"https://www.nextbyteweb.com/"} target="_blank">
            <img src="./logo-black.webp" alt="NextByte" height={30} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
