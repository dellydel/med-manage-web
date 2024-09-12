import { AppBar, Toolbar, Typography } from "@mui/material";
import MenuItem from "./MenuItem";
import Logo from "./Logo";
function NavBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Typography></Typography>
        </Toolbar>
        <Logo />
        <MenuItem />
      </AppBar>
    </div>
  );
}

export default NavBar;
