import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/logo/png/footerLogo.png';
import {
  FaBook,
  FaCalendarAlt,
  FaHeart,
  FaHouseUser,
  FaList,
  FaTripadvisor,
  FaUserAlt,
} from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost btn-active drawer-button lg:hidden m-4"
        >
          <FaList className="text-lg"></FaList>
        </label>

        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}

          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu text-lg p-4 w-80 min-h-full bg-pink-200 text-base-content">
            <div className="flex items-center justify-center mb-8">
              <Link to="/">
                <img src={logo} className="w-28" alt="" />
              </Link>
            </div>
            {/* Sidebar content here */}
            {/* only user links */}
            <>
              <li>
                <NavLink to="/dashboard/userProfile">
                  <FaUserAlt />
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/userBookings">
                  <FaCalendarAlt />
                  My Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/userWishlist">
                  <FaHeart />
                  My Wishlist
                </NavLink>
              </li>
            </>
            {/* go to home/mainLayout */}
            <div className="divider my-6"></div>
            <>
              <li>
                <NavLink to="/">
                  <FaHouseUser />
                  HomePage
                </NavLink>
              </li>
              <li>
                <NavLink to="/allPackages">
                  <FaTripadvisor />
                  All Packages
                </NavLink>
              </li>
              <li>
                <NavLink to="/stories">
                  <FaBook />
                  All Stories
                </NavLink>
              </li>
            </>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
