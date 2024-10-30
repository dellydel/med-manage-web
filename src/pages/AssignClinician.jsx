import { Close } from "@mui/icons-material";
import {
  Button,
  CardContent,
  MenuItem,
  Select,
  Typography,
  Card,
  Modal,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getEmployeesByType } from "../services/employees";
const AssignClinician = ({ open, onClose }) => {
  const [clinician, setClinician] = useState("");
  const { isPending, data: clinicians } = useQuery({
    queryKey: ["clinicians"],
    queryFn: () => getEmployeesByType("clinician"),
  });
  const handleReset = () => {
    setClinician("");
  };
  return (
    <Modal open={open} onClose={onClose}>
      <>
        <Card style={{ maxWidth: "45%", margin: "15% auto" }}>
          <Grid container bgcolor="#1976d2" color="#fff" padding={2}>
            <Grid size={10}>
              <Typography variant="h5" align="center" marginLeft={12}>
                Clinician Assignment
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
            <form onSubmit={(e) => e.preventDefault()}>
              <Grid container spacing={1}>
                <Grid size={3} marginTop={1} align="right" item>
                  Clinicians
                </Grid>
                <Grid size={9} item>
                  <Select
                    id="userType"
                    value={clinician}
                    onChange={(e) => setClinician(e.target.value)}
                    size="small"
                    fullWidth
                    required
                  >
                    {clinicians?.map((p) => (
                      <MenuItem value={p?.employeeId} key={p?.employeeId}>
                        {p?.fullName}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid size={12} item align="center" marginTop={1}>
                  <Button
                    type="reset"
                    variant="outlined"
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
                    Assign
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </>
    </Modal>
  );
};
export default AssignClinician;