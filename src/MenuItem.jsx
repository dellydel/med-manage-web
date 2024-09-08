import { Drawer, List, ListItem, ListItemText } from "@mui/material";
function MenuItem() {
  return (
    <Drawer anchor="left" open={true} sx={{ zIndex: 1 }}>
      <List>
        <ListItem button>
          <ListItemText primary="Archived Patients" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Employee Management" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Patients Management" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Admin" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Archived Patients" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default MenuItem;
