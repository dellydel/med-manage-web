import { Close } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  Modal,
  TextField,
  Typography
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Toast from "../components/Toast";
import useAddPatientMutation from "../mutations/useAddPatientMutation";
import { useQueryClient } from "@tanstack/react-query";
import useUpdatePatientMutation from "../mutations/useUpdatePatientMutation";
const PatientModalForm = ({ open, onClose, retrievedData }) => {
  const [formTitle, setFormTitle] = useState("Add Patient");
  const { register, handleSubmit, reset } = useForm();
  const [edit, setEdit] = useState(false);
  const [toastData, setToastData] = useState({
    openToast: false,
    toastMessage: "",
    toastSeverity: ""
  });
  const queryClient = useQueryClient();
  const patientAddRow = useAddPatientMutation();
  const patientUptateRow = useUpdatePatientMutation();
  useEffect(() => {
    if (retrievedData) {
      const { id, ...data } = retrievedData;
      setFormTitle("Edit Patient");
      setEdit(true);
      reset(data);
    }
  }, [reset]);
  const handleAddPatient = (data) => {
    patientAddRow.mutate(data, {
      onSuccess: (data) => {
        setToastData({
          openToast: true,
          toastMessage: data,
          toastSeverity: "success"
        });
      },
      onSettled: async (_, err) => {
        if (err) {
          setToastData({
            openToast: true,
            toastMessage: `Patient could not be deleted:  ${err.message}`,
            toastSeverity: "error"
          });
        } else {
          await queryClient.invalidateQueries({ queryKey: ["patients"] });
        }
      }
    });
  };
  const handleUpdatePatient = (data) => {
    patientUptateRow.mutate(data, {
      onSuccess: (data) => {
        setToastData({
          openToast: true,
          toastMessage: data,
          toastSeverity: "success"
        });
      },
      onSettled: async (_, err) => {
        if (err) {
          setToastData({
            openToast: true,
            toastMessage: `Patient data could not be updated:  ${err.message}`,
            toastSeverity: "error"
          });
        } else {
          await queryClient.invalidateQueries({ queryKey: ["patients"] });
        }
      }
    });
  };
  const onSubmit = (data) => {
    if (edit) {
      handleUpdatePatient(data);
    } else {
      handleAddPatient(data);
    }
  };
  const handleClose = () => {
    setToastData({
      ...toastData,
      openToast: false
    });
  };
  return (
    <Modal open={open} onClose={onClose}>
      <>
        <Card style={{ maxWidth: "65%", margin: "10% auto" }}>
          <Grid container bgcolor="#1976d2" color="#fff" padding={2}>
            <Grid size={10}>
              <Typography variant="h5" align="center" marginLeft={12}>
                {formTitle}
              </Typography>
            </Grid>
            <Grid size={2}>
              <Typography align="right">
                <Close
                  onClick={onClose}
                  sx={{
                    boxShadow: 3,
                    "&.hover": { boxShadow: 8 },
                    borderRadius: 28
                  }}
                />
              </Typography>
            </Grid>
          </Grid>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                    {...register("firstName")}
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
                    {...register("lastName")}
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
                    {...register("email")}
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
                    {...register("phone")}
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
                    {...register("streetAddress")}
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
                    {...register("city")}
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
                    {...register("zipCode")}
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
                    {...register("state")}
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
                    {...register("contactFirstName")}
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
                    {...register("contactLastName")}
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
                    {...register("relationship")}
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
                    {...register("contactPhone")}
                  />
                </Grid>
                <Grid size={3} item>
                  Address (Optional)
                  <TextField
                    label="Apt/Suit/H No. Street"
                    type="text"
                    size="small"
                    fullWidth
                    {...register("contactStreetAddress")}
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
                    {...register("contactCity")}
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
                    {...register("contactZipCode")}
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
                    {...register("contactState")}
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
                    disabled={patientAddRow.isPending}
                  >
                    {patientAddRow.isPending ? "saving data.." : "Save"}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
        <Toast
          open={toastData.openToast}
          onClose={handleClose}
          message={toastData.toastMessage}
          severity={toastData.toastSeverity}
        />
      </>
    </Modal>
  );
};
export default PatientModalForm;
