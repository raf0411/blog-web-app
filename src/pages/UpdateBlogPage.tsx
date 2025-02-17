import {
  Button,
  Container,
  FormControl,
  FormLabel,
  TextField,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useBlogs } from "../contexts/BlogProvider";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBlogPage = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const { blogs, editBlog } = useBlogs();

  const blogToUpdate = blogs.find((blog) => blog.id === Number(id));

  const [title, setTitle] = useState(blogToUpdate ? blogToUpdate.title : "");
  const [content, setContent] = useState(
    blogToUpdate ? blogToUpdate.content : ""
  );

  useEffect(() => {
    document.title = `Update Blog | ${blogToUpdate?.id}`
  }, []);

  useEffect(() => {
    if (blogToUpdate) {
      setTitle(blogToUpdate.title);
      setContent(blogToUpdate.content);
    }
  }, [blogToUpdate]);

  const submitUpdatedBlog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!blogToUpdate) return;

    // Validation
    if (title.length > 100) {
      alert("Title should not be more than 100 characters!");
      return;
    }

    if (content.length > 6000) {
      alert("Content should not be more than 6000 characters!");
      return;
    }

    const updatedFields = {
      title,
      content,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };

    editBlog(blogToUpdate.id, updatedFields);

    console.log("Blog Updated:", { title, content });

    navigate("/blogs");
  };

  if (!blogToUpdate) {
    return (
      <Container sx={{ padding: "32px" }}>
        <FormLabel>Blog not found.</FormLabel>
      </Container>
    );
  }

  return (
    <Container
      sx={{
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <form onSubmit={submitUpdatedBlog}>
        <FormControl
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <FormLabel
            htmlFor="blog-title"
            sx={{
              color: "#FFD0EC",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            Blog Title
          </FormLabel>
          <TextField
            id="blog-title"
            label="Enter blog title here..."
            variant="filled"
            required
            name="blog-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
          />
        </FormControl>

        <FormControl
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <FormLabel
            htmlFor="blog-content"
            sx={{
              color: "#FFD0EC",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            Content
          </FormLabel>
          <TextField
            id="blog-content"
            label="What's on your mind?"
            variant="filled"
            name="blog-content"
            fullWidth
            multiline
            required
            rows={10}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button
            type="submit"
            sx={{
              alignSelf: "center",
              width: "150px",
              marginTop: "50px",
            }}
          >
            Edit
          </Button>
        </FormControl>
      </form>
    </Container>
  );
};

export default UpdateBlogPage;
