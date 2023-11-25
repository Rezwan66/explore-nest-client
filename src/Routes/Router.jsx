import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/ErrorPage';
import AllPackages from '../pages/AllPackages/AllPackages';
import PackageCategory from '../pages/AllPackages/PackageCategory';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/allPackages',
        element: <AllPackages></AllPackages>,
      },
      {
        path: '/allPackages/:category',
        element: <PackageCategory></PackageCategory>,
      },
    ],
  },
]);

export default Router;
