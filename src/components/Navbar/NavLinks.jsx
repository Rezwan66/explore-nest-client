import { Link } from 'react-router-dom';

const NavLinks = () => {
  return (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/community">Community</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/aboutUs">About Us</Link>
      </li>
      <li>
        <Link to="/contactUs">Contact Us</Link>
      </li>
      <li>
        <Link to="/login">Login/Register</Link>
      </li>
    </>
  );
};
export default NavLinks;
