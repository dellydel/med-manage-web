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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getEmployeesByType } from "../services/employees";
import { postAssignClinician, putAssignClinician } from "../services/patients";
const AssignClinician = ({ open, onClose, patient, setToastData }) => {
  const [clinician, setClinician] = useState("");
  const patientId = patient.patientId;
  const clinicianAssigned = patient.clinicianAssigned;
  const queryClient = useQueryClient();
  const { isPending, data: clinicians } = useQuery({
    queryKey: ["clinicians"],
    queryFn: () => getEmployeesByType("clinician"),
    onError: (err) => {
      setToast({
        open: true,
        message: `${err.message} : on clinician API call`,
        severity: "error",
      });
    },
  });
  const { mutate, isPending: isAssigning } = useMutation({
    mutationFn: clinicianAssigned ? putAssignClinician : postAssignClinician,
    onSuccess: (data) => {
      setToastData({
        openToast: true,
        toastMessage: data,
        toastSeverity: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["patients"] });
      handleReset();
      onClose();
    },
    onError: (err) => {
      setToastData({
        openToast: true,
        toastMessage: `Clinician could not be assigned due to:  ${err.message}`,
        toastSeverity: "error",
      });
    },
  });
  const handleReset = () => {
    setClinician("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const assignData = { patientId: patientId, employeeId: clinician };
    mutate(assignData);
  };
  useEffect(() => {
    if (clinicianAssigned) {
      clinicians?.map((c) => {
        if (c.fullName === clinicianAssigned) setClinician(c.employeeId);
      });
    }
  }, []);
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
            <form onSubmit={handleSubmit}>
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
                    disabled={isAssigning}
                  >
                    Clear
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
