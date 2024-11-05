import { Button, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import { useTheme } from "@mui/material/styles";
const EmployeeButtonsRenderer = ({ data, onDelete }) => {
  const theme = useTheme();
  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 1,
    textTransform: "none",
    color: "white",
    bgcolor: theme.palette.error.main
  };
  const iconStyle = {
    ml: 1,
    mr: 1
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 1
      }}
    >
      <Button
        sx={buttonStyle}
        variant="contained"
        startIcon={<NoteAltIcon sx={iconStyle} />}
      ></Button>
      <Button sx={buttonStyle} variant="contained" fullWidth>
        Reset Password
      </Button>
      <Button
        sx={buttonStyle}
        variant="contained"
        startIcon={<DeleteIcon sx={iconStyle} />}
        onClick={() => onDelete(data.employeeId)}
      ></Button>
    </Box>
  );
};
export default EmployeeButtonsRenderer;
