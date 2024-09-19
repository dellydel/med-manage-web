import { Button, Box } from "@mui/material";
import { Groups2, AirlineSeatFlatAngledTwoTone } from "@mui/icons-material";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 6,
        height: "70vh",
        width: "70vw",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Button
        sx={{ textTransform: "none", py: 5, px: 8 }}
        size="large"
        variant="contained"
        startIcon={<Groups2 />}
      >
        Employee Management
      </Button>
      <Button
        sx={{ textTransform: "none", py: 5, px: 8 }}
        size="large"
        variant="contained"
        startIcon={<AirlineSeatFlatAngledTwoTone />}
      >
        Patients Management
      </Button>
    </Box>
  );
};

export default Home;
