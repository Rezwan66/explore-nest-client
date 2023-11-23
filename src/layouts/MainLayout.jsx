import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
// import bg from '../assets/background/rose-petals (1).png';

const MainLayout = () => {
  return (
    <div
      className="min-h-screen bg-teal-100"
      //   style={{
      //     backgroundImage: `url('${bg}')`,
      //     backgroundRepeat: 'no-repeat',
      //     backgroundSize: 'full',
      //   }}
    >
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};
export default MainLayout;
