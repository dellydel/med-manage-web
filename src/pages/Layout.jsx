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
  const { user, isJwtExpired, refreshTokens, setUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      return navigate("/login");
    }
    if (user && user.id_token) {
      const isExpired = isJwtExpired(user.id_token);
      if (isExpired) {
        refreshTokens(user.refresh_token)
          .then((res) => {
            if (res.status === 200) {
              setUser({
                ...user,
                access_token: res.data.accessToken,
                id_token: res.data.idToken,
              });
            }
          })
          .catch((err) => {
            console.log("error", err);
            return navigate("/login");
          });
      }
    }
  }, [isJwtExpired, navigate, refreshTokens, user, setUser]);

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
