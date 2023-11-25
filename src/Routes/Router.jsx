import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/ErrorPage';
import AllPackages from '../pages/AllPackages/AllPackages';
import PackageCategory from '../pages/AllPackages/PackageCategory';
import PackageDetails from '../pages/AllPackages/PackageDetails';
import GuideProfile from '../pages/TourGuides/GuideProfile';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

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
      {
        path: '/package/:id',
        element: <PackageDetails></PackageDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allPackages/${params.id}`),
      },
      {
        path: '/tourGuides/:id',
        element: <GuideProfile></GuideProfile>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/guides/${params.id}`),
      },
    ],
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '/register',
    element: <Register></Register>,
  },
]);

export default Router;
