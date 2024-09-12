import { Drawer, List, ListItem, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
function MenuItem() {
  return (
    <Drawer
      anchor="left"
      open={true}
      variant="persistent"
      PaperProps={{
        sx: {
          top: 65,
        },
      }}
    >
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
            to="/patients"
            sx={{ textDecoration: "none" }}
          >
            Archived Patients
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
            to="/patients"
            sx={{ textDecoration: "none" }}
          >
            Patients Management
          </Link>
        </ListItem>
      </List>
    </Drawer>
  );
}
export default MenuItem;
