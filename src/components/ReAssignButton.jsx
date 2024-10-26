import { Button, Box } from "@mui/material";
function ReAssignButton({ onClick }) {
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
        Re Assign
      </Button>
    </Box>
  );
}
export default ReAssignButton;
