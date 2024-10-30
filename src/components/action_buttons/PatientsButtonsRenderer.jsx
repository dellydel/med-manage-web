import { Button, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import InventoryIcon from "@mui/icons-material/Inventory";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useTheme } from "@mui/material/styles";
const PatientsButtonsRenderer = () => {
  const theme = useTheme();
  const buttonStyle = {
    textTransform: "none",
    color: "white",
    bgcolor: theme.palette.error.main
  };
  const iconStyle = {
    width: "100%",
    height: "100%",
    ml: 1,
    mr: 1
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        gap: 1
      }}
    >
      <Button
        sx={buttonStyle}
        variant="contained"
        startIcon={<VisibilityIcon sx={iconStyle} />}
      ></Button>
      <Button
        sx={buttonStyle}
        variant="contained"
        startIcon={<NoteAltIcon sx={iconStyle} />}
      ></Button>
      <Button
        sx={buttonStyle}
        variant="contained"
        startIcon={<DeleteIcon sx={iconStyle} />}
      ></Button>
      <Button
        sx={buttonStyle}
        variant="contained"
        startIcon={<InventoryIcon sx={iconStyle} />}
      ></Button>
    </Box>
  );
};
export default PatientsButtonsRenderer;
