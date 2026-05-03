import { Link, NavLink, Outlet } from 'react-router-dom';
import ThemeToggle from '../components/Navbar/ThemeToggle';
import {
  FaBook,
  FaCalendarAlt,
  FaCalendarDay,
  FaHeart,
  FaHouseUser,
  FaList,
  FaMoneyBill,
  FaTripadvisor,
  FaUserAlt,
  FaUsers,
} from 'react-icons/fa';
import { MdAddCircleOutline } from 'react-icons/md';
import useAdmin from '../hooks/useAdmin';
import useGuide from '../hooks/useGuide';
import useAuth from '../hooks/useAuth';

const Dashboard = () => {
  // todo: get is admin value from db
  const { isAdmin } = useAdmin();
  const { isGuide } = useGuide();
  // console.log(isAdmin, isGuide);
   const { user, logoutUser } = useAuth();

   const handleLogout = () => {
    logoutUser()
      .then(() => {
        toast.success('Logged out successfully!');
      })
      .catch(error => toast.error(error.message));
  };
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content min-h-screen flex flex-col items-center justify-start bg-base-200">
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
          <ul className="menu text-lg p-4 w-80 min-h-screen bg-base-100 text-base-content shadow-xl border-r border-base-300">
            {/* logo+website name */}
            <div className="flex flex-col items-center gap-4 mb-8">
              <div className="flex justify-between w-full items-center px-2">
                <Link to="/" className="flex items-center gap-2 group">
                  <img src="/icons8-nest-96.png" className="w-10 h-10 group-hover:scale-110 transition-transform" alt="Nest Icon" />
                  <span className="text-xl font-black tracking-tight text-base-content">
                    Explore<span className="text-primary">Nest</span>
                  </span>
                </Link>
                <ThemeToggle />
              </div>
              <div className="bg-base-200 py-2 px-4 rounded-xl w-full text-center border border-base-300 shadow-sm mt-2">
                <p className="text-xs tracking-widest font-bold text-base-content/60 uppercase mb-1">Dashboard</p>
                <p className="text-sm font-black text-primary uppercase tracking-widest">
                  {(isAdmin && 'Admin') || (isGuide && 'Guide') || 'Tourist'}
                </p>
              </div>
            </div>
            {/* admin content */}
            {isAdmin && (
              <>
                <li>
                  <NavLink to="/dashboard" end>
                    <FaHouseUser />
                    Admin Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/userProfile">
                    <FaUserAlt />
                    Admin Profile
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
                <li>
                  <NavLink to="/dashboard/viewBookings">
                    <FaList />
                    View Bookings
                  </NavLink>
                </li>
              </>
            )}
            {/* guide content */}
            {isGuide && (
              <>
                <li>
                  <NavLink to="/dashboard" end>
                    <FaHouseUser />
                    Guide Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/guideProfile">
                    <FaUserAlt />
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/guideAssignedTours">
                    <FaCalendarDay />
                    My Assigned Tours
                  </NavLink>
                </li>
              </>
            )}
            {/* only user links */}
            {!isAdmin && !isGuide && (
              <>
                <li>
                  <NavLink to="/dashboard" end>
                    <FaHouseUser />
                    Tourist Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/userProfile">
                    <FaUserAlt />
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/userBookings">
                    <FaCalendarAlt />
                    My Bookings & Payments
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

            <div
              onClick={handleLogout}
              className="px-4 py-3 hover:bg-rose-700 hover:text-white transition font-semibold absolute bottom-2 left-2 right-2 border-base-300 text-center bg-rose-500 text-white cursor-pointer rounded-lg"
            >
              Logout
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
