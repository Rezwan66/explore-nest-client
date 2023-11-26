import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import anim404 from '../assets/animations/Animation404.json';
import Container from '../components/Container';

const ErrorPage = () => {
  return (
    // <div
    //   className="relative flex justify-center"
    //   //   style={{
    //   //     backgroundImage: `url('${errorBg}')`,
    //   //     backgroundRepeat: 'no-repeat',
    //   //     backgroundSize: 'cover',
    //   //   }}
    // >
    //   <img className="h-screen w-screen object-cover" src={errorBg} alt="" />
    //   <Link to="/" className="btn btn-secondary lg:mt-[570px] mt-72 absolute">
    //     Go Back to the HomePage
    //   </Link>
    // </div>
    <div className="h-screen  bg-[#1A2238] ">
      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center h-screen">
          <div className="max-w-[600px] mx-auto">
            <Lottie animationData={anim404} loop={true}></Lottie>
          </div>
          <div className="w-full flex flex-col justify-center items-center ">
            <h1 className="text-9xl font-extrabold text-white tracking-widest">
              404
            </h1>
            <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
              Page Not Found
            </div>
            <button className="mt-5">
              <div className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
                <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

                <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                  <Link to="/">Go Home</Link>
                </span>
              </div>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default ErrorPage;
