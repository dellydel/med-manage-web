import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import Logo from "./Logo";
import { useAuth } from "../hooks/useAuth";

const Navigation = () => {
  const { logout, user } = useAuth();
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar variant="tall">
        {user && (
          <>
            <Box sx={{ flexGrow: 1 }} />
            <Typography variant="body1" sx={{ mr: 5 }}>
              <Box
                sx={{
                  color: "white",
                  ":visited": "white",
                  textDecoration: "none",
                }}
                component={"a"}
                href="#"
                onClick={logout}
              >
                Logout
              </Box>
            </Typography>
          </>
        )}
      </Toolbar>
      <Logo />
    </AppBar>
  );
};

export default Navigation;
