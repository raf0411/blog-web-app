import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  const content = (
    <Box
      component="header"
      sx={{
        padding: "16px 32px",
        borderBottom: "2px solid",
        borderBottomColor: "primary.main",
      }}
    >
      <Link to={"/blogs"} style={{ textDecoration: "none", color: "inherit" }}>
        <Typography
          variant="h1"
          fontSize={40}
          sx={{
            cursor: "pointer", width: "fit-content", transition: '.2s', "&:hover": {
            color: "primary.main"
          } }}
          draggable="true"
        >
          Blog.com
        </Typography>
      </Link>
    </Box>
  );

  return content;
};

export default Header;
