import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();
  const logo_url = "./logo-white.webp";
  return (
    <Box
      sx={{ cursor: "pointer" }}
      component="img"
      height={55}
      position="fixed"
      src={logo_url}
      alt="NextByte"
      onClick={() => navigate("/")}
    />
  );
}

export default Logo;
