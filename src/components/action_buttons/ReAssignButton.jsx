import { Button, Box } from "@mui/material";
<<<<<<< HEAD
function ReAssignButton({ data, setClinicianModal }) {
=======
function ReAssignButton({ onClick, data }) {
>>>>>>> 2eea3d86d82ce94c85f05718c0704ca89e1ff38f
  return (
    <Box>
      <Button
        onClick={() => setClinicianModal({ open: true, patient: data })}
        variant="contained"
        size="medium"
        sx={{
          py: 0,
          px: 1,
          textTransform: "none",
        }}
      >
        {data.clinicianAssigned == null ? "Assign" : "Reassign"}
      </Button>
    </Box>
  );
}
export default ReAssignButton;
