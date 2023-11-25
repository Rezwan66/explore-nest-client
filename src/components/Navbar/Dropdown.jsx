import { useState } from 'react';
import { Link } from 'react-router-dom';
import noUserImg from '../../assets/images/profile.png';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = {};

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 border-2 border-red-200 rounded-full cursor-pointer hover:shadow-md transition"
      >
        <img
          className="rounded-full"
          referrerPolicy="no-referrer"
          src={user && user.photoURL ? user.photoURL : noUserImg}
          alt="user photo"
          height="30"
          width="30"
        />
      </div>

      {isOpen && (
        <div className="bg-base-100 absolute rounded-md shadow-xl w-[40vw] md:w-[20vw] lg:w-[10vw] overflow-hidden right-0 top-14 text-sm z-50">
          <div className="flex flex-col cursor-pointer">
            <Link
              to="/dashboard"
              className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Dashboard
            </Link>

            <Link
              to="/offers"
              className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Offers
            </Link>
            <Link className="px-4 py-3 hover:bg-neutral-100 transition font-semibold">
              Logout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default Dropdown;
