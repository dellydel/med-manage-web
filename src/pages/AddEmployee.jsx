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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { addEmployee } from "../services/employees";
import Toast from "../components/Toast";
function AddEmployee({ open, onClose }) {
  const [openToast, setOpenToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastSeverity, setToastSeverity] = useState("");
  const queryClient = useQueryClient();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("");
  function handleReset() {
    setFullName("");
    setEmail("");
    setUserType("");
  }
  const { mutate, isPending } = useMutation({
    mutationFn: addEmployee,
    onSuccess: (data) => {
      setToastSeverity("sucess");
      setToastMessage(`New employee ${data?.fullName} added successfully`);
      setOpenToast(true);
      queryClient.invalidateQueries({ queryKey: ["employees"] });
      handleReset();
      onClose();
    },
    onError: (err) => {
      setToastSeverity("error");
      setToastMessage(`Employee could not be added due to:  ${err.message}`);
      setOpenToast(true);
    },
  });
  function handleSubmit(event) {
    event.preventDefault();
    const newEmployee = {
      fullName,
      email,
      userType,
    };
    mutate(newEmployee);
  }
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
            Add Employee
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={1}>
                <Grid size={3} marginTop={1} align="right" item>
                  Employee Name
                </Grid>
                <Grid size={9} item>
                  <TextField
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    size="small"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid size={3} marginTop={1} align="right" item>
                  Employee Email
                </Grid>
                <Grid size={9} item>
                  <TextField
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    size="small"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid size={3} marginTop={1} align="right" item>
                  Employee Type
                </Grid>
                <Grid size={9} item>
                  <Select
                    id="userType"
                    value={userType}
                    onChange={(e) => setUserType(e.target.value)}
                    size="small"
                    fullWidth
                    required
                  >
                    <MenuItem value="Care giver">Care giver</MenuItem>
                    <MenuItem value="Clinician">Clinician</MenuItem>
                  </Select>
                </Grid>
                <Grid size={12} item align="center" marginTop={1}>
                  <Button
                    type="reset"
                    variant="contained"
                    size="small"
                    color="inherit"
                    onClick={handleReset}
                  >
                    Cancel
                  </Button>
                  &nbsp;
                  <Button
                    type="submit"
                    variant="contained"
                    size="small"
                    color="success"
                    disabled={isPending}
                  >
                    Add
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
        <Toast
          open={openToast}
          onClose={() => setOpenToast(false)}
          message={toastMessage}
          severity={toastSeverity}
        />
      </>
    </Modal>
  );
}
export default AddEmployee;
