import { Link } from "@mui/material";

function Logo() {
  const logo_url = "./comp-logo.png";
  return (
    <Link href="/">
      <img src={logo_url} alt="Caring Hands" />
    </Link>
  );
}

export default Logo;
