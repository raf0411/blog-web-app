import { Box } from '@mui/material'
import React, { useState } from 'react'
import BlogCard from './BlogCard'
import { useBlogs } from '../contexts/BlogProvider'

type Blog = {
  id: number,
  title: string,
  date?: string,
  content: string,
}

const BlogList = () => {
  const { blogs } = useBlogs();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "30px", paddingBottom: "50px", }}>
      {blogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} /> 
      ))}
    </Box>
  )
}

export default BlogList
