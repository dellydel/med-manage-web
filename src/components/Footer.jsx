import { Box } from "@mui/material";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
        bottom: 0,
      }}
    >
      Powered by
      <Link to={"https://www.nextbyteweb.com/"} target="_blank">
        <img src="./logo-black.webp" alt="NextByte" height={30} />
      </Link>
    </Box>
  );
}
export default Footer;
