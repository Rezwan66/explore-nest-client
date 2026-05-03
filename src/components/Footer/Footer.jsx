import { Link } from 'react-router-dom';
import Container from '../Container';
import logo from '../../assets/logo/png/footerLogo.png';
import logo2 from '../../../public/icons8-nest-96.png'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import toast from 'react-hot-toast';
import './Footer.css';

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    toast.success('Thanks for subscribing!');
    e.target.reset();
  }

  return (
    <footer className="footer-bg bg-fixed pt-24 pb-10 relative">
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <Container>
        <div className="relative z-10">
          <div className="footer bg-base-300/80 backdrop-blur-md border border-white/10 py-10 px-8 rounded-2xl flex flex-col md:flex-row justify-between flex-wrap gap-10">
            <nav className="flex flex-col gap-4">
              <Link to="/" className="flex items-center gap-2 group mb-2">
                <img src="/icons8-nest-96.png" className="w-12 h-12 group-hover:scale-110 transition-transform" alt="Nest Icon" />
                <span className="text-3xl font-black tracking-tight text-base-content">
                  Explore<span className="text-primary">Nest</span>
                </span>
              </Link>
              <p className="text-sm max-w-xs mt-2">
                ExploreNest is your ultimate travel partner, providing seamless and unforgettable adventures across the globe.
              </p>
              <div className="flex gap-4 mt-4">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-2xl hover:text-primary transition"><FaFacebook /></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-2xl hover:text-primary transition"><FaTwitter /></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-2xl hover:text-primary transition"><FaInstagram /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-2xl hover:text-primary transition"><FaLinkedin /></a>
              </div>
            </nav>

            <nav className="flex flex-col gap-2">
              <header className="text-lg font-bold text-primary mb-2">Company</header>
              <Link to="/aboutUs" className="link link-hover">About us</Link>
              <Link to="/contactUs" className="link link-hover">Contact</Link>
              <Link to="/blogs" className="link link-hover">Blogs</Link>
              <Link to="/community" className="link link-hover">Community</Link>
            </nav>
            
            <nav className="flex flex-col gap-2">
              <header className="text-lg font-bold text-primary mb-2">Legal</header>
              <Link to="/privacy" className="link link-hover">Terms of use</Link>
              <Link to="/privacy" className="link link-hover">Privacy policy</Link>
              <Link to="/help" className="link link-hover">Help & Support</Link>
            </nav>

            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <header className="text-lg font-bold text-primary mb-2">Newsletter</header>
              <p className="text-sm mb-2">Stay up to date with our latest news.</p>
              <div className="join w-full max-w-sm">
                <input
                  type="email"
                  placeholder="email@site.com"
                  className="input input-bordered join-item w-full"
                  required
                />
                <button type="submit" className="btn btn-primary join-item">Subscribe</button>
              </div>
            </form>
          </div>
          <div className="text-center mt-10 border-t border-white/20 pt-6 text-sm text-white">
            <p>&copy; {new Date().getFullYear()} ExploreNest. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
