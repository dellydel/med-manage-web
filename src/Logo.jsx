import { Box } from "@mui/material";
function Logo() {
  const logo_url = "./comp-logo.png";
  return (
    <Box
      component="img"
      sx={{ width: 204 }}
      src={logo_url}
      alt="Caring hands"
    />
  );
}

export default Logo;
