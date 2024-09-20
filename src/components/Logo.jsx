import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Logo() {
  const logo_url = "./logo-white.webp";
  const navigate = useNavigate();
  return (
    <Box
      sx={{ cursor: "pointer" }}
      component="img"
      height={75}
      position="fixed"
      src={logo_url}
      alt="NextByte"
      onClick={() => navigate("/")}
    />
  );
}

export default Logo;
