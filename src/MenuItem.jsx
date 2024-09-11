import { Drawer, List, ListItem, Link } from "@mui/material";
function MenuItem() {
  return (
    <Drawer anchor="left" open={true} variant="persistent">
      <List>
        <ListItem>
          <Link href="/employees" sx={{ textDecoration: "none" }}>
            Employee Management
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/patients" sx={{ textDecoration: "none" }}>
            Patients Management
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/admin" sx={{ textDecoration: "none" }}>
            Admin
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/patients" sx={{ textDecoration: "none" }}>
            Archived Patients
          </Link>
        </ListItem>
      </List>
    </Drawer>
  );
}

export default MenuItem;
