import { Box, Typography } from "@mui/material";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const content = (
    <Box
      component="footer"
      sx={{
        padding: '32px',
        borderTop: "1px solid",
        borderColor: "primary.main",
        marginTop: '50px',
      }}
    >
      <Typography component='p'>&copy; {currentYear} @raf0411</Typography>
    </Box>
  );

  return content;
};

export default Footer;