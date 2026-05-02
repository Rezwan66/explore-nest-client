import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import authBg from '../../assets/banner/login.jpg';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useState } from 'react';

const Login = () => {
  const { loginUser, googleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleDemoLogin = (role) => {
    if (role === 'admin') {
      setEmail('admin@explorenest.com');
      setPassword('Admin123!');
    } else if (role === 'guide') {
      setEmail('guide@explorenest.com');
      setPassword('Guide123!');
    } else {
      setEmail('user@explorenest.com');
      setPassword('User123!');
    }
  };

  const handleLogin = e => {
    e.preventDefault();
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
          photo: user?.photoURL,
          role: 'User',
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
          <div className="card rounded-md w-[375px] shadow-2xl glass bg-opacity-20 py-6">
            <h1 className="text-3xl font-bold text-center tracking-widest">
              Login now!
            </h1>
            <form onSubmit={handleLogin} className="card-body pb-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs font-bold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your password"
                  className="input input-bordered"
                  required
                />
                <label className="mt-4 text-right  text-sm">
                  <span>
                    Not a member?{' '}
                    <Link
                      to="/register"
                      className="text-primary text-base font-bold uppercase"
                    >
                      Register
                    </Link>
                  </span>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-primary text-white text-base"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="px-8 pb-4">
              <div className="divider divider-secondary mb-6 text-xs font-bold">
                OR
              </div>
              <div className="flex flex-col gap-2 mb-4">
                <button
                  onClick={handleGoogleLogin}
                  className="btn btn-outline btn-secondary w-full text-base capitalize flex items-center justify-center gap-2"
                >
                  <FaGoogle></FaGoogle> Continue with Google
                </button>
              </div>
              <div className="divider text-xs font-bold mt-0 mb-4">Demo Logins</div>
              <div className="grid grid-cols-3 gap-2">
                <button onClick={() => handleDemoLogin('admin')} className="btn btn-sm btn-accent text-xs">Admin</button>
                <button onClick={() => handleDemoLogin('guide')} className="btn btn-sm btn-primary text-xs">Guide</button>
                <button onClick={() => handleDemoLogin('user')} className="btn btn-sm btn-secondary text-xs">User</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
