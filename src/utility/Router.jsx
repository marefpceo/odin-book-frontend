import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import ErrorBoundary from "./ErrorBoundary";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Users from "../pages/Users";
import NotFound from "../pages/NotFound";

function Router() {
  const router = createBrowserRouter([
    {
      element: <App />,
      ErrorBoundary: ErrorBoundary,
      children: [
        { index: true, element: <Home /> },
        { path: "/profile", element: <Profile /> },
        { path: "/users", element: <Users /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
