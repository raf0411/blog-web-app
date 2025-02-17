import { Button, Container, Typography } from '@mui/material'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

const ErrorPage = () => {

  useEffect(() => {
    document.title = "Error 404"
  }, []);

  return (
    <Container sx={
      {
        padding: '40px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '50px',
        flexDirection: 'column',
      }
    }>
      <Typography variant='h2' fontWeight='bold'>Page Not Found</Typography>
      <Link to='/blogs'><Button>Back to Blogs</Button></Link>
    </Container>
  )
}

export default ErrorPage
