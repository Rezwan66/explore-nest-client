import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ScrollToTopOnNavigation from '../utilities/ScrollToTopOnNavigation';
import AIChatbot from '../components/AIChatbot/AIChatbot';
// import bg from '../assets/background/rose-petals (1).png';

const MainLayout = () => {
  // const location = useLocation();
  // console.log(location.pathname);
  return (
    <div
      className="min-h-screen"
      //   style={{
      //     backgroundImage: `url('${bg}')`,
      //     backgroundRepeat: 'no-repeat',
      //     backgroundSize: 'full',
      //   }}
    >
      <ScrollToTopOnNavigation></ScrollToTopOnNavigation>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <AIChatbot></AIChatbot>
      <Footer></Footer>
    </div>
  );
};
export default MainLayout;
