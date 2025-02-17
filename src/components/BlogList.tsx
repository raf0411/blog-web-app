import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import BlogCard from "./BlogCard";
import { useBlogs } from "../contexts/BlogProvider";

type Blog = {
  id: number;
  title: string;
  date?: string;
  content: string;
};

const BlogList = () => {
  const { blogs } = useBlogs();

  const content =
    blogs.length > 0 ? (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          paddingBottom: "50px",
        }}
      >
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </Box>
    ) : (
      <Typography variant="h1" fontSize={24}>No posts yet...</Typography>
    );

  return content;
};

export default BlogList;