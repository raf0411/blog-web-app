import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BlogProvider } from './contexts/BlogProvider'; // Ensure the path is correct
import HomePage from './pages/HomePage';
import BlogsPage from './pages/BlogsPage';
import BlogDetailPage from './pages/BlogDetailPage';
import Header from './components/Header';
import CreateBlogPage from './pages/CreateBlogPage';
import UpdateBlogPage from './pages/UpdateBlogPage';

const App = () => {
  return (
    <BlogProvider> 
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:id" element={<BlogDetailPage />} />
          <Route path="/create-blog" element={<CreateBlogPage />} />
          <Route path="/update-blog" element={<UpdateBlogPage />} />
        </Routes>
      </Router>
    </BlogProvider>
  );
};

export default App;
