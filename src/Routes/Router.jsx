import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <h2>Homepage</h2>,
      },
    ],
  },
]);

export default Router;
