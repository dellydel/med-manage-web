import NavBar from "../NavBar";
import { Button, Box } from "@mui/material";
import { Groups2, AirlineSeatFlatAngledTwoTone } from "@mui/icons-material";
import "../App.css";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
        }}
      >
        <Button
          sx={{ textTransform: "none" }}
          size="large"
          variant="contained"
          startIcon={<Groups2 />}
        >
          Employee Management
        </Button>
        <Button
          sx={{ textTransform: "none" }}
          size="large"
          variant="contained"
          startIcon={<AirlineSeatFlatAngledTwoTone />}
        >
          Patients Management
        </Button>
      </Box>
    </div>
  );
};

export default Home;
