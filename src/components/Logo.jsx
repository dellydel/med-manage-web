import { Box } from "@mui/material";

function Logo() {
  const logo_url = "./comp-logo.png";
  return (
    <Box component="div" position="fixed" sx={{ width: 240, height: 100 }}>
      <img src={logo_url} alt="Caring hands" width={240} height={100} />
    </Box>
  );
}
export default Logo;
