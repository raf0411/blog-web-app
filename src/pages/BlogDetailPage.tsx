import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useBlogs } from "../contexts/BlogProvider";
import { Box, colors, Container, Typography } from "@mui/material";

const BlogDetailPage = () => {
  const { id } = useParams();
  const { blogs } = useBlogs(); 

  const blog = blogs.find((blog) => blog.id === Number(id));

  useEffect(() => {
    document.title = `Blog Detail | ${blog?.id}`
  }, []);

  if (!blog) {
    return <Typography variant="h2">Blog not found!</Typography>;
  }

  return (
    <Container sx={
      {
        padding: "24px 32px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }
    }>
      <Link to={"/blogs"} style={{ color: "#FFD0EC", width: "fit-content" }}>back to blogs</Link>
      <Typography variant="h2" fontWeight="bold">{blog.title}</Typography>
      <Typography variant="subtitle1" component="p" fontWeight='light'>{blog.date}</Typography>
      <Typography variant="body1" component="p" textAlign="justify" fontWeight='light'>{blog.content}</Typography>
    </Container>
  );
};

export default BlogDetailPage;
