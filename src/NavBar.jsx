import { AppBar, Toolbar, Typography } from "@mui/material";
import MenuItem from "./MenuItem";

function NavBar() {
  return (
    <div>
      <AppBar position="fixed" sx={{ zIndex: 1201 }}>
        <Toolbar>
          <Typography></Typography>
        </Toolbar>
        <MenuItem />
      </AppBar>
    </div>
  );
}

export default NavBar;
