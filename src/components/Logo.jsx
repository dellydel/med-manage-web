import { Box } from "@mui/material";
import { Link } from "react-router-dom";

function Logo() {
  const logo_url = "./comp-logo.png";
  return (
    <Box component="div" position="fixed" sx={{ width: 240, height: 100 }}>
      <Link to="/">
        <img src={logo_url} alt="Caring hands" width={240} height={100} />
      </Link>
    </Box>
  );
}
export default Logo;
