import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import authBg from '../../assets/banner/login.jpg';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const Login = () => {
  const { loginUser, googleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // reset the form
    e.currentTarget.reset();

    loginUser(email, password)
      .then(res => {
        console.log(res.user);
        toast.success('Signed in successfully!');
        navigate(location?.state?.from?.pathname || '/', { replace: true });
      })
      .catch(error => toast.error(error.message));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(res => {
        const user = res.user;
        const userInfo = {
          email: user?.email,
          name: user?.displayName,
        };
        axiosPublic.post('/users', userInfo).then(res => {
          console.log(res.data);
          toast.success('Successfully signed in using Google');
          navigate(location?.state?.from?.pathname || '/', { replace: true });
        });
      })
      .catch(error => toast.error(error.message));
  };

  return (
    <div
      className="min-h-screen bg-fixed flex items-center"
      style={{ backgroundImage: `url(${authBg})`, backgroundSize: 'cover' }}
    >
      <div className="hero bg-transparent">
        <div className="hero-content">
          <div className="card w-[375px] shadow-2xl glass bg-opacity-20 py-6">
            <h1 className="text-3xl font-bold text-center tracking-widest">
              Login now!
            </h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs font-bold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs font-bold">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your password"
                  className="input input-bordered"
                  required
                />
                <label className="mt-4 text-right  text-sm">
                  <span>
                    Not a member?{' '}
                    <Link
                      to="/register"
                      className="text-[#f50057] text-base font-bold"
                    >
                      Register
                    </Link>
                  </span>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-error text-white text-base"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="px-8 mb-4">
              <div className="divider divider-secondary mb-10 text-xs font-bold">
                OR
              </div>
              <div className="relative">
                <button
                  onClick={handleGoogleLogin}
                  className="btn btn-secondary w-full text-base capitalize"
                >
                  <FaGoogle></FaGoogle> Continue with Google
                </button>
                <img
                  className="w-8 top-2 left-4 absolute"
                  src="/google.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
