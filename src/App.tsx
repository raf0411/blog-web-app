import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BlogProvider } from "./contexts/BlogProvider";
import HomePage from "./pages/HomePage";
import BlogsPage from "./pages/BlogsPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import Header from "./components/Header";
import CreateBlogPage from "./pages/CreateBlogPage";
import UpdateBlogPage from "./pages/UpdateBlogPage";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <Router>
      <BlogProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:id" element={<BlogDetailPage />} />
          <Route path="/create-blog" element={<CreateBlogPage />} />
          <Route path="/update-blog/:id" element={<UpdateBlogPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BlogProvider>
    </Router>
  );
};

export default App;
