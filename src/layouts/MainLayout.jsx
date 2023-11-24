import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
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
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};
export default MainLayout;
