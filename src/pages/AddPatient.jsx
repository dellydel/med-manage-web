import { Close } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
function AddPatient({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Card style={{ maxWidth: "65%", margin: "10% auto" }}>
        <Typography
          gutterBottom
          variant="h5"
          align="center"
          bgcolor="#1976d2"
          padding={2}
          color="#fff"
        >
          <Close
            onClick={onClose}
            style={{
              background: "#fff",
              boxShadow: 3,
              "&.hover": { boxShadow: 8 },
              color: "#000",
              borderRadius: 28,
              position: "fixed",
              right: 285,
            }}
          />
          Add Patient
        </Typography>
        <CardContent>
          <form>
            <Grid container spacing={1}>
              <Grid size={12} item>
                <Typography
                  gutterBottom
                  fontWeight={"fontWeightBold"}
                  align="center"
                >
                  Patient Information (All fields are mandatory)
                </Typography>
              </Grid>
              <Grid size={3} item>
                First Name
                <TextField
                  label="First Name"
                  type="text"
                  size="small"
                  fullWidth
                  required
                />
              </Grid>
              <Grid size={3} item>
                Last Name
                <TextField
                  type="text"
                  label="Last Name"
                  size="small"
                  fullWidth
                  required
                />
              </Grid>
              <Grid size={3} item>
                Email
                <TextField
                  label="Email"
                  type="email"
                  size="small"
                  fullWidth
                  required
                />
              </Grid>
              <Grid size={3} item>
                Mobile
                <TextField
                  label="Phone Number"
                  type="number"
                  size="small"
                  fullWidth
                  required
                />
              </Grid>
              <Grid size={3} item>
                Address
                <TextField
                  label="Apt/Suit/H No. Street"
                  type="text"
                  size="small"
                  fullWidth
                  required
                />
              </Grid>
              <Grid size={3} item>
                City
                <TextField
                  label="City"
                  type="text"
                  size="small"
                  fullWidth
                  required
                />
              </Grid>
              <Grid size={3} item>
                Zip
                <TextField
                  label="Zip"
                  type="text"
                  size="small"
                  fullWidth
                  required
                />
              </Grid>
              <Grid size={3} item>
                State
                <TextField
                  label="State"
                  type="text"
                  size="small"
                  fullWidth
                  required
                />
              </Grid>
              <Grid size={12} item>
                <Typography
                  gutterBottom
                  fontWeight={"fontWeightBold"}
                  align="center"
                >
                  Emergency Contact Information
                </Typography>
              </Grid>
              <Grid size={3} item>
                Contact First Name
                <TextField
                  label="First Name"
                  type="text"
                  size="small"
                  fullWidth
                  required
                />
              </Grid>
              <Grid size={3} item>
                Contact Last Name
                <TextField
                  type="text"
                  label="Last Name"
                  size="small"
                  fullWidth
                  required
                />
              </Grid>
              <Grid size={3} item>
                Relationship to Patient
                <TextField
                  label="Relationship"
                  placeholder="Relationship"
                  type="text"
                  size="small"
                  fullWidth
                  required
                />
              </Grid>
              <Grid size={3} item>
                Mobile No
                <TextField
                  label="Phone Number"
                  type="number"
                  size="small"
                  fullWidth
                  required
                />
              </Grid>
              <Grid size={3} item>
                Address (Optional)
                <TextField
                  label="Apt/Suit/H No. Street"
                  type="text"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid size={3} item>
                City(Optional)
                <TextField
                  label="City"
                  placeholder="City"
                  type="text"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid size={3} item>
                Zip code(Optional)
                <TextField
                  label="Zip"
                  placeholder="Zip"
                  type="text"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid size={3} item>
                State(Optional)
                <TextField
                  label="State"
                  placeholder="State"
                  type="text"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid size={12} item align="center" marginTop={1}>
                <Button
                  type="reset"
                  variant="contained"
                  size="small"
                  color="inherit"
                >
                  Cancel
                </Button>
                &nbsp;
                <Button
                  type="submit"
                  variant="contained"
                  size="small"
                  color="success"
                >
                  Add
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Modal>
  );
}
export default AddPatient;
