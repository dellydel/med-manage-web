import { AppBar, Toolbar, Typography } from "@mui/material";
import Logo from "./Logo";

const Navigation = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar variant="tall">
        <Typography></Typography>
      </Toolbar>
      <Logo />
    </AppBar>
  );
};

export default Navigation;
