import { Close } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
function AddPatient({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <>
        <Card style={{ maxWidth: "45%", margin: "15% auto" }}>
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
                right: 440,
              }}
            />
            Add Patient
          </Typography>
          <CardContent>
            <form>
              <Grid container spacing={1}>
                <Grid size={12} item>
                  {" "}
                  <Typography variant="h6" align="center">
                    Patient Information (All fields are mandatory)
                  </Typography>
                </Grid>
                <Grid size={3} marginTop={1} align="right" item>
                  Patient Name
                </Grid>
                <Grid size={9} item>
                  <TextField type="text" size="small" fullWidth required />
                </Grid>
                <Grid size={3} marginTop={1} align="right" item>
                  Patient Email
                </Grid>
                <Grid size={9} item>
                  <TextField type="email" size="small" fullWidth required />
                </Grid>
                <Grid size={3} marginTop={1} align="right" item>
                  Patient Type
                </Grid>
                <Grid size={9} item>
                  <Select size="small" fullWidth>
                    <MenuItem>Care giver</MenuItem>
                    <MenuItem>Clinician</MenuItem>
                  </Select>
                </Grid>
                <Grid size={3} marginTop={1} align="right" item>
                  Patient Password
                </Grid>
                <Grid size={9} item>
                  <TextField type="password" size="small" fullWidth required />
                </Grid>
                <Grid size={3} marginTop={1} align="right" item>
                  Confirm Passord
                </Grid>
                <Grid size={9} item>
                  <TextField type="password" size="small" fullWidth required />
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
      </>
    </Modal>
  );
}
export default AddPatient;
