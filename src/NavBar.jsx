import { AppBar, Toolbar, Typography } from "@mui/material";
import MenuItem from "./MenuItem";

function NavBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Typography></Typography>
        </Toolbar>
        <p></p>
        <MenuItem />
      </AppBar>
    </div>
  );
}

export default NavBar;
