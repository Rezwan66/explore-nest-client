import { Link } from 'react-router-dom';
import errorBg from '../assets/background/error.png';

const ErrorPage = () => {
  return (
    <div
      className="relative flex justify-center"
      //   style={{
      //     backgroundImage: `url('${errorBg}')`,
      //     backgroundRepeat: 'no-repeat',
      //     backgroundSize: 'cover',
      //   }}
    >
      <img className="h-screen w-screen object-cover" src={errorBg} alt="" />
      <Link to="/" className="btn btn-secondary lg:mt-[570px] mt-72 absolute">
        Go Back to the HomePage
      </Link>
    </div>
  );
};
export default ErrorPage;
