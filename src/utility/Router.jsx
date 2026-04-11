import { createBrowserRouter, RouterProvider } from 'react-router';
import App from '../App';
import ErrorBoundary from './ErrorBoundary';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

function Router() {
  const router =  createBrowserRouter([
    {
      element: <App />,
      ErrorBoundary: ErrorBoundary,
      children: [
        { index: true, element: <Home /> },
      ],
    },
    { path: '*', element: <NotFound /> },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
