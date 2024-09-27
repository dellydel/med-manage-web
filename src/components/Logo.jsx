import { Box } from "@mui/material";

function Logo() {
  const logo_url = "./logo-white.webp";
  return (
    <Box
      sx={{ cursor: "pointer" }}
      component="img"
      height={55}
      position="fixed"
      src={logo_url}
      alt="NextByte"
      onClick={() => window.open("https://www.nextbyteweb.com/")}
    />
  );
}

export default Logo;
