import { Button, Box } from "@mui/material";
import { Groups2, AirlineSeatFlatAngledTwoTone } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        height: "65vh",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        component={Link}
        to="/employees"
        sx={{
          fontSize: "18px",
          height: "150px",
          width: "340px",
          padding: "64px 32px",
          textTransform: "none",
          bgcolor: "white",
          transition: "all 0s ease-in-out",
          color: "#000",
          "&:hover": {
            bgcolor: "primary.main",
            color: "white",
            height: "160px",
            width: "350px",
            fontSize: "20px",
            padding: "69px 37px",
          },
        }}
        size="large"
        variant="contained"
        startIcon={<Groups2 />}
      >
        Employee Management
      </Button>
      <Button
        component={Link}
        to="/patients"
        sx={{
          height: "150px",
          width: "340px",
          padding: "64px 32px",
          textTransform: "none",
          bgcolor: "#fff",
          fontSize: "18px",
          transition: "all 0s ease-in-out",
          color: "#000",
          "&:hover": {
            bgcolor: "primary.main",
            color: "white",
            fontSize: "20px",
            height: "160px",
            width: "350px",
            padding: "69px 37px",
          },
        }}
        size="large"
        variant="contained"
        startIcon={<AirlineSeatFlatAngledTwoTone />}
      >
        Patients Management
      </Button>
      <Button
        component={Link}
        to="/in-service"
        sx={{
          fontSize: "18px",
          textTransform: "none",
          height: "150px",
          width: "340px",
          padding: "64px 32px",
          bgcolor: "white",
          transition: "all 0s ease-in-out",
          color: "#000",
          "&:hover": {
            bgcolor: "primary.main",
            color: "white",
            padding: "69px 37px",
            fontSize: "20px",
            height: "160px",
            width: "350px",
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
