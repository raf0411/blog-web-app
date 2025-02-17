import { Box, Button } from '@mui/material';
import React from 'react'
import BlogList from '../components/BlogList';

const BlogsPage = () => {

  const content =
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "50px",
      gap: "50px",
    }}>
      <Button>Add Post</Button>
      <BlogList />
    </Box>;

  return content;
}

export default BlogsPage
