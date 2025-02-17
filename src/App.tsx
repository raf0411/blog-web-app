import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BlogProvider } from './contexts/BlogProvider'; // Ensure the path is correct
import HomePage from './pages/HomePage';
import BlogsPage from './pages/BlogsPage';
import BlogDetailPage from './pages/BlogDetailPage';
import Header from './components/Header';

const App = () => {
  return (
    <BlogProvider> 
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:id" element={<BlogDetailPage />} />
        </Routes>
      </Router>
    </BlogProvider>
  );
};

export default App;
