import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Groups2Icon from "@mui/icons-material/Groups2";
import AirlineSeatFlatAngledTwoToneIcon from "@mui/icons-material/AirlineSeatFlatAngledTwoTone";
import "../App.css";
const Home = () => {
  return (
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
        color="primary"
        startIcon={<Groups2Icon />}
      >
        Employee Management
      </Button>
      <Button
        sx={{ textTransform: "none" }}
        size="large"
        variant="contained"
        color="primary"
        startIcon={<AirlineSeatFlatAngledTwoToneIcon />}
      >
        Patients Management
      </Button>
    </Box>
  );
};
export default Home;
