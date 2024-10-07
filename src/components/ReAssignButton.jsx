import { Button, Box } from "@mui/material";
function ReAssignButton() {
  return (
    <Box>
      <Button
        variant="contained"
        size="medium"
        sx={{
          py: 0,
          px: 1,
          textTransform: "none"
        }}
      >
        Re Assign
      </Button>
    </Box>
  );
}

export default ReAssignButton;
