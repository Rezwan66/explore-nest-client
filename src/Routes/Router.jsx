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
import Community from '../pages/Community/Community';
import PrivateRoute from './PrivateRoute';
import AllStories from '../pages/Stories/AllStories';
import StoryDetails from '../pages/Stories/StoryDetails';
import Dashboard from '../layouts/Dashboard';
import UserProfile from '../pages/Dashboard/User/UserProfile';
import UserBookings from '../pages/Dashboard/User/UserBookings';
import UserWishlist from '../pages/Dashboard/User/UserWishlist';

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
        path: '/community',
        element: (
          <PrivateRoute>
            <Community></Community>
          </PrivateRoute>
        ),
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
      {
        path: '/stories',
        element: <AllStories></AllStories>,
      },
      {
        path: '/stories/:id',
        element: <StoryDetails></StoryDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/stories/${params.id}`),
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
  {
    path: 'dashboard',
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: 'userProfile',
        element: <UserProfile></UserProfile>,
      },
      {
        path: 'userBookings',
        element: <UserBookings></UserBookings>,
      },
      {
        path: 'userWishlist',
        element: <UserWishlist></UserWishlist>,
      },
    ],
  },
]);

export default Router;
