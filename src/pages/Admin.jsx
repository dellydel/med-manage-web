import { Button, Box } from "@mui/material";
import { Groups2, AirlineSeatFlatAngledTwoTone } from "@mui/icons-material";

const Admin = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 6,
        height: "65vh",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Button
        sx={{
          fontSize: "18px",
          height: "100px",
          width: "320px",
          textTransform: "none",
          bgcolor: "white",
          transition: "all 0s ease-in-out",
          color: "#000",
          "&:hover": {
            bgcolor: "#1976d2",
            color: "white",
            height: "110px",
            width: "340px",
            fontSize: "22px",
          },
        }}
        size="large"
        variant="contained"
        startIcon={<Groups2 />}
      >
        Employee Management
      </Button>
      <Button
        sx={{
          height: "100px",
          width: "320px",
          textTransform: "none",
          bgcolor: "white",
          fontSize: "18px",
          transition: "all 0s ease-in-out",
          color: "#000",
          "&:hover": {
            bgcolor: "#1976d2",
            color: "white",
            fontSize: "22px",
            height: "110px",
            width: "340px",
          },
        }}
        size="large"
        variant="contained"
        startIcon={<AirlineSeatFlatAngledTwoTone />}
      >
        Patients Management
      </Button>
      <Button
        sx={{
          fontSize: "18px",
          textTransform: "none",
          height: "100px",
          width: "320px",
          bgcolor: "white",
          transition: "all 0s ease-in-out",
          color: "#000",
          "&:hover": {
            bgcolor: "#1976d2",
            color: "white",
            fontSize: "22px",
            height: "110px",
            width: "340px",
          },
        }}
        size="large"
        variant="contained"
        startIcon={<AirlineSeatFlatAngledTwoTone />}
      >
        In-Service Management
      </Button>
    </Box>
  );
};

export default Admin;
