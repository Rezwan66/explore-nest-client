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
import PrivateRoute from './PrivateRoute';
import AllStories from '../pages/Stories/AllStories';
import StoryDetails from '../pages/Stories/StoryDetails';
import Dashboard from '../layouts/Dashboard';
import UserProfile from '../pages/Dashboard/User/UserProfile';
import UserBookings from '../pages/Dashboard/User/UserBookings';
import UserWishlist from '../pages/Dashboard/User/UserWishlist';
import Payment from '../pages/Dashboard/User/Payment/Payment';
import DashboardHome from '../pages/Dashboard/DashboardHome';
import AddPackage from '../pages/Dashboard/Admin/AddPackage';
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers';
import AdminRoute from './AdminRoute';
import GuideDashboardProfile from '../pages/Dashboard/Guide/GuideDashboardProfile';
import GuideAssignedTours from '../pages/Dashboard/Guide/GuideAssignedTours';
import Blogs from '../pages/Other/Blogs';
import AboutUs from '../pages/Other/AboutUs';
import ContactUs from '../pages/Other/ContactUs';
import Community from '../pages/Other/Community';

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
        path: '/blogs',
        element: <Blogs></Blogs>,
      },
      {
        path: '/aboutUs',
        element: <AboutUs></AboutUs>,
      },
      {
        path: '/contactUs',
        element: <ContactUs></ContactUs>,
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
          fetch(
            `https://explore-nest-server.vercel.app/allPackages/${params.id}`
          ),
      },
      {
        path: '/tourGuides/:id',
        element: <GuideProfile></GuideProfile>,
        loader: ({ params }) =>
          fetch(`https://explore-nest-server.vercel.app/guides/${params.id}`),
      },
      {
        path: '/stories',
        element: <AllStories></AllStories>,
      },
      {
        path: '/stories/:id',
        element: <StoryDetails></StoryDetails>,
        loader: ({ params }) =>
          fetch(`https://explore-nest-server.vercel.app/stories/${params.id}`),
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
        path: '',
        element: <DashboardHome></DashboardHome>,
      },
      //   user+admin+guide route
      {
        path: 'userProfile',
        element: <UserProfile></UserProfile>,
      },
      //   user routes
      {
        path: 'userBookings',
        element: <UserBookings></UserBookings>,
      },
      {
        path: 'payment',
        element: <Payment></Payment>,
      },
      {
        path: 'userWishlist',
        element: <UserWishlist></UserWishlist>,
      },
      //   admin routes
      {
        path: 'addPackage',
        element: (
          <AdminRoute>
            <AddPackage></AddPackage>
          </AdminRoute>
        ),
      },
      {
        path: 'manageUsers',
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      //   guide routes
      {
        path: 'guideProfile',
        element: <GuideDashboardProfile></GuideDashboardProfile>,
      },
      {
        path: 'guideAssignedTours',
        element: <GuideAssignedTours></GuideAssignedTours>,
      },
    ],
  },
]);

export default Router;
