import { Drawer, List, ListItem, Link, Toolbar, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const drawerWidth = 240;
function MenuItem() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar variant="tall" />
      <Box sx={{ overflow: "auto" }}>
        <List>
          <ListItem>
            <Link
              component={RouterLink}
              to="/admin"
              sx={{ textDecoration: "none" }}
            >
              Admin
            </Link>
          </ListItem>
          <ListItem>
            <Link
              component={RouterLink}
              to="/employees"
              sx={{ textDecoration: "none" }}
            >
              Employee Management
            </Link>
          </ListItem>
          <ListItem>
            <Link
              component={RouterLink}
              to="/in-service"
              sx={{ textDecoration: "none" }}
            >
              In-Service Management
            </Link>
          </ListItem>
          <ListItem>
            <Link
              component={RouterLink}
              to="/patients"
              sx={{ textDecoration: "none" }}
            >
              Patient Management
            </Link>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}

export default MenuItem;
