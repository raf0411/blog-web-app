import { Box, Button, Typography } from '@mui/material'
import { useEffect } from 'react';
import { Link } from "react-router-dom";

const HomePage = () => {

  useEffect(() => {
    document.title = "Home"
  }, []);

  return (
    <Box sx={
      {
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        minHeight: "100vh",
        marginTop: "50px",
        gap: "150px",
      }
    }>
      <Typography variant='h2' fontWeight='bold' fontSize={48}>Welcome to my blogs!</Typography>
      <Link to="/blogs"> 
        <Button variant="contained">View Posts</Button>
      </Link>
    </Box>
  )
}

export default HomePage
