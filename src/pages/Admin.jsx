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
          height: "5rem",
          width: "15rem",
          textTransform: "none",

          bgcolor: "white",
          color: "#000",
          "&:hover": {
            bgcolor: "#1982c4",
            color: "white",
            fontSize: "1.2rem",
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
          height: "5rem",
          width: "15rem",
          textTransform: "none",

          bgcolor: "white",
          color: "#000",
          "&:hover": {
            bgcolor: "#1982c4",
            color: "white",
            fontSize: "1.2rem",
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
          height: "5rem",
          width: "15rem",
          textTransform: "none",

          bgcolor: "white",
          color: "#000",
          "&:hover": {
            bgcolor: "#1982c4",
            color: "white",
            fontSize: "1.2rem",
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
