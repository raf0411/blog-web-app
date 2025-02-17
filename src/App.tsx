import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { BlogProvider } from "./contexts/BlogProvider";
import HomePage from "./pages/HomePage";
import BlogsPage from "./pages/BlogsPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import Header from "./components/Header";
import CreateBlogPage from "./pages/CreateBlogPage";
import UpdateBlogPage from "./pages/UpdateBlogPage";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";
import { Box } from "@mui/material";
import { useEffect } from "react";

const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

const App = () => {
  return (
    <Router>
      <BlogProvider>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh", 
            scrollBehavior: 'smooth',
            background: 'linear-gradient(90deg, rgba(49,24,76,1) 0%, rgba(47,7,67,1) 70%)',
          }}
        >
          <Header />
          <Box sx={{ flexGrow: 1}}> 
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="/blogs/:id" element={<BlogDetailPage />} />
              <Route path="/create-blog" element={<CreateBlogPage />} />
              <Route path="/update-blog/:id" element={<UpdateBlogPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </BlogProvider>
    </Router>
  );
};

export default App;
