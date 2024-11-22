import { Button, Box } from "@mui/material";
function ReAssignButton({ onClick, data }) {
  return (
    <Box>
      <Button
        onClick={onClick}
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
