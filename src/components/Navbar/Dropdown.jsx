import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import noUserImg from '../../assets/images/profile.png';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        toast.success('Logged out successfully!');
      })
      .catch(error => toast.error(error.message));
  };

  const handleDropdownClick = () => {
    if (!user) {
      navigate('/login', { state: { from: location }, replace: true });
    } else {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="relative">
      <div
        onClick={handleDropdownClick}
        className="border-2 p-1 border-primary rounded-full cursor-pointer hover:shadow-md transition"
      >
        <img
          className="rounded-full w-9 h-9 object-cover"
          referrerPolicy="no-referrer"
          src={user && user.photoURL ? user.photoURL : noUserImg}
          alt="user photo"
        />
      </div>

      {isOpen && user && (
        <div className="bg-base-100 absolute rounded-md shadow-xl w-[42vw] md:w-[24vw] lg:w-[14vw] overflow-hidden right-0 top-14 text-sm z-50 border border-base-200">
          <div className="flex flex-col cursor-pointer">
            <div className="px-4 py-3 transition border-b border-base-200">
              <h2 className="font-bold">{user?.displayName}</h2>
              <p className="text-xs truncate">{user?.email}</p>
            </div>
            <Link
              to="/dashboard"
              className="px-4 py-3 hover:bg-primary hover:text-white transition font-semibold"
            >
              Dashboard
            </Link>

            <Link
              to="/dashboard/userBookings"
              className="px-4 py-3 hover:bg-primary hover:text-white transition font-semibold"
            >
              Offers
            </Link>
            <div
              onClick={handleLogout}
              className="px-4 py-3 hover:bg-error hover:text-white transition font-semibold"
            >
              Logout
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Dropdown;
