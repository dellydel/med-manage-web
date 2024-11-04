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
import { useEffect, useState } from "react";
import { addEmployee } from "../services/employees";
import Toast from "../components/Toast";
function AddEmployee({ open, onClose, action, employee = null }) {
  const [openToast, setOpenToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastSeverity, setToastSeverity] = useState("");
  const queryClient = useQueryClient();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [employeeType, setEmployeeType] = useState("");
  useEffect(() => {
    if (employee) {
      setFullName(employee.fullName);
      setEmail(employee.email);
      setEmployeeType(employee.employeeType);
    }
  }, []);
  function handleReset() {
    setFullName("");
    setEmail("");
    setEmployeeType("");
  }
  const { mutate, isPending } = useMutation({
    mutationFn: addEmployee,
    onSuccess: (data) => {
      setToastSeverity("success");
      setToastMessage(data);
      setOpenToast(true);
      queryClient.invalidateQueries({ queryKey: ["employees"] });
      handleReset();
      const timeout = setTimeout(() => onClose(), 3000);
      return () => clearTimeout(timeout);
    },
    onError: (err) => {
      setToastSeverity("error");
      setToastMessage(
        `Employee data could not be saved due to:  ${err.message}`
      );
      setOpenToast(true);
    },
  });
  function handleSubmit(event) {
    event.preventDefault();
    if (employee === null) {
      const newEmployee = {
        fullName,
        email,
        employeeType,
      };
      mutate(newEmployee);
    } else {
      const newEmployee = {
        fullName,
        email,
        employeeType,
        employeeId: employee.employeeId,
      };
      mutate(newEmployee);
    }
  }
  return (
    <Modal open={open} onClose={onClose}>
      <>
        <Card style={{ maxWidth: "45%", margin: "15% auto" }}>
          <Grid container bgcolor="#1976d2" color="#fff" padding={2}>
            <Grid size={10}>
              <Typography variant="h5" align="center" marginLeft={12}>
                {action} Employee
              </Typography>
            </Grid>
            <Grid size={2}>
              <Typography align="right">
                <Close
                  onClick={onClose}
                  sx={{
                    boxShadow: 3,
                    "&.hover": { boxShadow: 8 },
                    borderRadius: 28,
                  }}
                />
              </Typography>
            </Grid>
          </Grid>
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
                    value={employeeType}
                    onChange={(e) => setEmployeeType(e.target.value)}
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
                    Save
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
