import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import BlogsPage from "./pages/BlogsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/blogs",
    element: <BlogsPage />,
    errorElement: <ErrorPage />
  },

])