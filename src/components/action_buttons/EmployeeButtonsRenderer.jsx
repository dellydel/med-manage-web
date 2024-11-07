import { Button, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import { useTheme } from "@mui/material/styles";
function EmployeeButtonsRenderer({ data, setEmployeeModal }) {
  const theme = useTheme();
  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 1,
    textTransform: "none",
    color: "white",
    bgcolor: theme.palette.error.main,
  };
  const iconStyle = {
    ml: 1,
    mr: 1,
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Button
        sx={buttonStyle}
        variant="contained"
        startIcon={<NoteAltIcon sx={iconStyle} />}
        onClick={() =>
          setEmployeeModal({
            action: "Edit",
            open: true,
            employee: data,
          })
        }
      >
        Edit
      </Button>
      <Button sx={buttonStyle} variant="contained" fullWidth>
        Reset Password
      </Button>
      <Button
        sx={buttonStyle}
        variant="contained"
        startIcon={<DeleteIcon sx={iconStyle} />}
      ></Button>
    </Box>
  );
}
export default EmployeeButtonsRenderer;
