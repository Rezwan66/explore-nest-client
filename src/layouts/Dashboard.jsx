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
  FaUsers,
} from 'react-icons/fa';
import { MdAddCircleOutline } from 'react-icons/md';
import useAdmin from '../hooks/useAdmin';
import useGuide from '../hooks/useGuide';

const Dashboard = () => {
  // todo: get is admin value from db
  const { isAdmin } = useAdmin();
  const { isGuide } = useGuide();
  console.log(isAdmin, isGuide);
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content min-h-screen flex flex-col items-center justify-start bg-pink-50">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-ghost btn-active btn-circle absolute left-4 top-2 drawer-button lg:hidden"
          >
            <FaList className="text-lg"></FaList>
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu text-lg p-4 w-80 min-h-screen bg-pink-200 text-base-content">
            {/* logo+website name */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <Link to="/dashboard">
                <img src={logo} className="w-24" alt="" />
              </Link>
              <div className="md:text-lg text-xs font-black uppercase">
                <p>Explore Nest</p>
                <p className="md:text-sm md:tracking-widest">dashboard</p>
              </div>
            </div>
            {/* Sidebar content here */}
            {/* admin content */}
            {isAdmin && (
              <>
                <li>
                  <NavLink to="/dashboard/userProfile">
                    <FaUserAlt />
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addPackage">
                    <MdAddCircleOutline />
                    Add Package
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageUsers">
                    <FaUsers />
                    Manage Users
                  </NavLink>
                </li>
              </>
            )}
            {/* guide content */}
            {isGuide && (
              <>
                <li>Guide</li>
                <li>
                  <NavLink to="/dashboard/userProfile">
                    <FaUserAlt />
                    My Profile
                  </NavLink>
                </li>
              </>
            )}
            {/* only user links */}
            {!isAdmin && !isGuide && (
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
            )}
            {/* go to home/mainLayout-shared links */}
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
