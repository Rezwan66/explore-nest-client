import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const NavLinks = () => {
  const { user } = useAuth();
  return (
    <>
      <li>
        <Link className="hover:text-error" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="hover:text-error" to="/community">
          Community
        </Link>
      </li>
      <li>
        <Link className="hover:text-error" to="/blogs">
          Blogs
        </Link>
      </li>
      <li>
        <Link className="hover:text-error" to="/aboutUs">
          About Us
        </Link>
      </li>
      <li>
        <Link className="hover:text-error" to="/contactUs">
          Contact Us
        </Link>
      </li>
      {!user && (
        <li>
          <Link className="hover:text-error" to="/login">
            Login/Register
          </Link>
        </li>
      )}
    </>
  );
};
export default NavLinks;
