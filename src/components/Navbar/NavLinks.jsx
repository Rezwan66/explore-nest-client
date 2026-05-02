import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const NavLinks = () => {
  const { user } = useAuth();
  return (
    <>
      <li>
        <Link className="hover:text-primary transition" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="hover:text-primary transition" to="/allPackages">
          Explore
        </Link>
      </li>
      <li>
        <Link className="hover:text-primary transition" to="/blogs">
          Blogs
        </Link>
      </li>
      <li>
        <Link className="hover:text-primary transition" to="/contactUs">
          Contact Us
        </Link>
      </li>
      {user && (
        <>
          <li>
            <Link className="hover:text-primary transition" to="/stories">
              Stories
            </Link>
          </li>
          <li>
            <Link className="hover:text-primary transition" to="/community">
              Community
            </Link>
          </li>
          <li>
            <Link className="hover:text-primary transition" to="/dashboard">
              Dashboard
            </Link>
          </li>
        </>
      )}
      {!user && (
        <li>
          <Link className="hover:text-primary transition" to="/login">
            Login/Register
          </Link>
        </li>
      )}
    </>
  );
};
export default NavLinks;
