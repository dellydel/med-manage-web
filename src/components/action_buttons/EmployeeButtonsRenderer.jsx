import { Button, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
function EmployeeButtonsRenderer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
      }}
    >
      <Button
        startIcon={<NoteAltIcon />}
        variant="contained"
        size="large"
        sx={{
          textTransform: "none",
          color: "white",
          bgcolor: "red",
          height: 35
        }}
      ></Button>
      <Button
        variant="contained"
        size="large"
        sx={{
          py: 0,
          px: 1,
          textTransform: "none",
          color: "white",
          bgcolor: "red",
          height: 35
        }}
      >
        Reset Password
      </Button>
      <Button
        startIcon={<DeleteIcon />}
        variant="contained"
        sx={{
          py: 0,
          px: 0,
          textTransform: "none",
          color: "white",
          bgcolor: "red",
          height: 35
        }}
      ></Button>
    </Box>
  );
}
export default EmployeeButtonsRenderer;
