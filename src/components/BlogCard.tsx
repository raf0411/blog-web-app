import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useBlogs } from "../contexts/BlogProvider";

type Blog = {
  id: number;
  title: string;
  date?: string;
  content: string;
};

type PropsType = {
  blog: Blog;
};

const BlogCard = ({ blog }: PropsType) => {
  const { removeBlog } = useBlogs();

  return (
    <Container
      key={blog.id}
      sx={{
        background: (theme) => theme.palette.primary.dark,
        border: "2px solid",
        borderColor: (theme) => theme.palette.primary.main,
        borderRadius: "8px",
        padding: "32px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "800px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Typography variant="h1" fontSize={28}>
          {blog.title}
        </Typography>
        <Typography variant="subtitle1" component="p" textAlign="justify">
          {(blog.content).length > 103 ? blog.content.slice(0, 103) + "..." : blog.content}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Typography variant="subtitle1" component="p">
          {blog.date}
        </Typography>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Button
            title="Edit"
            sx={{
              padding: "0",
              borderRadius: "4px",
            }}
          >
            📝
          </Button>
          <Button
            title="Delete"
            onClick={() => removeBlog(blog.id)}
            sx={{
              padding: "0",
              borderRadius: "4px",
            }}
          >
            ❌
          </Button>
          <Link to={`/blogs/${blog.id}`}>
            <Button
              title="View More"
              sx={{
                padding: "0",
                borderRadius: "4px",
              }}
            >
              🔍
            </Button>
          </Link>
        </Container>
      </Box>
    </Container>
  );
};

export default BlogCard;
