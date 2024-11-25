import { Button, Box } from "@mui/material";
function ReAssignButton({ data, setClinicianModal }) {
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
