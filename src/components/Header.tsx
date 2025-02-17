import { Box, Typography } from "@mui/material";

const Header = () => {
  const content = (
    <Box
      component="header"
      sx={{
        padding: "16px 32px",
        borderBottom: "1px solid",
        borderBottomColor: "primary.main",
      }}
    >
      <Typography
        variant="h1"
        fontWeight="700"
        fontSize={40}
        sx={{ cursor: "pointer", width: "fit-content" }}
        draggable="true"
      >
        Blog.com
      </Typography>
    </Box>
  );

  return content;
};

export default Header;
