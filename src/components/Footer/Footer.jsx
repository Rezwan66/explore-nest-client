import { Link } from 'react-router-dom';
import Container from '../Container';
import logo from '../../assets/logo/png/footerLogo.png';
// import { Button, TextField } from '@mui/material';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-bg bg-fixed py-24 text-white">
      <Container>
        <div className="footer bg-slate-500 glass py-10 pl-10 rounded-md">
          <nav>
            <Link to="/">
              <img src={logo} className="w-32" alt="" />
            </Link>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <button className="link link-hover">About us</button>
            <button className="link link-hover">Contact</button>
            <button className="link link-hover">Jobs</button>
            <button className="link link-hover">Press kit</button>
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <button className="link link-hover">Terms of use</button>
            <button className="link link-hover">Privacy policy</button>
            <button className="link link-hover">Cookie policy</button>
          </nav>
          <form>
            <header className="footer-title">Newsletter</header>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text mb-4 text-white">
                  Enter your email address
                </span>
              </label>
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item text-black"
                />
                {/* <TextField
                  sx={{ color: '#fff' }}
                  id="outlined-basic"
                  label="email@gmail.com"
                  variant="outlined"
                />
                <Button variant="contained">Subscribe</Button> */}
                <button className="btn btn-primary join-item">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
