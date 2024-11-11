import { Button, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import InventoryIcon from "@mui/icons-material/Inventory";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useTheme } from "@mui/material/styles";
import PatientModalForm from "../../pages/PatientModalForm";
import { useState } from "react";
const PatientsButtonsRenderer = ({ data, onDelete }) => {
  const [loadModalForm, setLoadModalForm] = useState(false);
  const [open, setOpen] = useState(false);
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
  const handleLoadModalForm = () => {
    setLoadModalForm(true);
    setOpen(true);
  };
  const handleCloseModalForm = () => {
    const timeout = setTimeout(() => onClose(), 3000);
    return () => clearTimeout(timeout);
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
        onClick={handleLoadModalForm}
      ></Button>
      <Button
        sx={buttonStyle}
        variant="contained"
        startIcon={<DeleteIcon sx={iconStyle} />}
        onClick={() => onDelete(data.patientId)}
      ></Button>
      <Button
        sx={buttonStyle}
        variant="contained"
        startIcon={<InventoryIcon sx={iconStyle} />}
      ></Button>
      {loadModalForm && (
        <PatientModalForm
          open={open}
          onClose={() => setOpen(false)}
          retrievedData={data}
        />
      )}
    </Box>
  );
};
export default PatientsButtonsRenderer;
