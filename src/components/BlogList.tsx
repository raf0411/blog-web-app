import { Box } from '@mui/material'
import React, { useState } from 'react'
import BlogCard from './BlogCard'

type Blog = {
  id: number,
  title: string,
  date?: string,
  content: string,
}

const BlogList = () => {
  const [blogs, setBlogs] = useState<Blog[]>([
    { id: 1, title: 'First Blog', date: "December 24, 2024", content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum' },
    { id: 2, title: 'Second Blog', date: "December 25, 2024", content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).' }
  ])

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "30px", paddingBottom: "50px", }}>
      {blogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} /> 
      ))}
    </Box>
  )
}

export default BlogList
