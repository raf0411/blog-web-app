import { Box, Button, Container } from '@mui/material';
import BlogList from '../components/BlogList';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const BlogsPage = () => {

  useEffect(() => {
    document.title = "Blogs"
  }, []);

  const content =
    <Container sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "50px",
      gap: "50px",
    }}>

      <Link to="/create-blog">
        <Button>Add Post</Button>
      </Link>
      <BlogList />

    </Container>;

  return content;
}

export default BlogsPage
