import {
  Button,
  Container,
  FormControl,
  FormLabel,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useBlogs } from "../contexts/BlogProvider";
import { useNavigate } from "react-router-dom";

const CreateBlogPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlog } = useBlogs();

  useEffect(() => {
    document.title = "Create Blog"
  }, []);

  const submitNewBlog = (e: React.FormEvent) => {
    e.preventDefault();

    const newBlog = {
      id: Date.now(), 
      title,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      content,
    }
    
    addBlog(newBlog);
 
    console.log("Blog Submitted:", { title, content });

    navigate("/blogs");
  };

  return (
    <Container
      sx={{
        padding: "32px 32px",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <form onSubmit={submitNewBlog}>
        <FormControl
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: "20px",
            flexDirection: "column",
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
            alignItems: "flex-start",
            gap: "20px",
            flexDirection: "column",
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
            Submit
          </Button>
        </FormControl>
      </form>
    </Container>
  );
};

export default CreateBlogPage;
