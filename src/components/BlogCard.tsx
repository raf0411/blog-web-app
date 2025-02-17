import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

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
  return (
    <Container
      key={blog.id}
      sx={{
        background: (theme) => theme.palette.primary.dark,
        border: "1px solid",
        borderColor: (theme) => theme.palette.primary.contrastText,
        borderRadius: "8px",
        padding: "32px 24px",
        display: "flex",
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
          {blog.content.slice(0, 103) + "..."}
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
