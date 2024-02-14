import { Link } from 'react-router-dom';
// import Container from '../Container';
import logo from '../../assets/logo/png/logo-no-background.png';
import NavLinks from './NavLinks';
import Dropdown from './Dropdown';

const Navbar = () => {
  return (
    <div className="bg-transparent py-2">
      <div className=" mx-auto md:px-10 lg:px-16 px-4">
        <div className="navbar bg-transparent px-0">
          <div className="navbar-start">
            <div className="dropdown z-50">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <NavLinks></NavLinks>
              </ul>
            </div>
            {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
            <Link to="/">
              <img src={logo} className="w-32 rounded-3xl" alt="" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-medium">
              <NavLinks></NavLinks>
            </ul>
          </div>
          <div className="navbar-end">
            <Dropdown></Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
