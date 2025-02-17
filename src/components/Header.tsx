import { Box, Typography, Link } from "@mui/material";

const Header = () => {
  
  return (
    <Box
      component="header"
      sx={{
        padding: "16px 32px",
        borderBottom: "2px solid",
        borderBottomColor: "primary.main",
      }}
    >
      <Typography variant="h1" fontWeight="700" fontSize={40}>
        Blog.com
      </Typography>
    </Box>
  );
};

export default Header;
