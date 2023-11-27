import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import regBg from '../../assets/banner/banner6.jpg';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
// import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
// import { useState } from 'react';

const Register = () => {
  //   const [passError, setPassError] = useState('');
  const { createUser, updateUserProfile, googleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name, photo, email, password);
    // reset the form
    // e.currentTarget.reset();
    // validate password
    if (
      !/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{6,}$/.test(
        password
      )
    ) {
      //   setPassError(
      //     'Password must be at least 6 characters long, contain an uppercase letter, a number, and a special character!'
      //   );
      return toast.error(
        'Password must contain at least 6 characters, an uppercase, a number, and a special character!'
      );
    }
    // setPassError('');
    createUser(email, password)
      .then(res => {
        const loggedUser = res.user;
        console.log(loggedUser);
        updateUserProfile(name, photo)
          .then(() => {
            const userInfo = {
              name: name,
              email: email,
              photo: photo,
              role: 'User',
            };
            axiosPublic.post('/users', userInfo).then(res => {
              if (res.data.insertedId) {
                // setPassError('');
                toast.success('Signed Up successfully!');
                navigate(location?.state?.from?.pathname || '/', {
                  replace: true,
                });
              }
              // NO NEED TO GIVE ERROR IF NOT INSERTED SINCE FIREBASE ITSELF WILL GIVE ERROR IF SAME USER!!!
              //   else {
              //     Swal.fire({
              //       title: 'Oops!',
              //       text: 'User already exists!',
              //       icon: 'error',
              //       confirmButtonText: 'Cool',
              //     });
              //   }
            });
          })
          .catch(err => console.log(err.message));
      })
      .catch(err => {
        console.log(err.message);
        toast.error(err.message);
      });
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
      style={{ backgroundImage: `url(${regBg})`, backgroundSize: 'cover' }}
    >
      <div className="hero bg-transparent">
        <div className="hero-content">
          <div className="card rounded-md w-[375px] shadow-2xl glass bg-opacity-20 py-6">
            <h1 className="text-3xl font-bold text-center tracking-wide text-white">
              Sign Up Now!
            </h1>
            <form onSubmit={handleRegister} className="card-body">
              {/* name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs font-bold text-white">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs font-bold text-white">
                    Profile Photo
                  </span>
                </label>
                <input
                  type="text"
                  name="image"
                  placeholder="photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* photo */}
              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs font-bold text-white">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* pass */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs font-bold text-white">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your password"
                  className="input input-bordered"
                  required
                />
                {/* {passError && (
                  <span className="text-xs font-bold mt-2 italic text-red-200">
                    {passError}
                  </span>
                )} */}
                <label className="mt-4 text-right  text-white text-sm">
                  <span>
                    Already a member?{' '}
                    <Link
                      to="/login"
                      className="text-[#f50057] text-base font-bold uppercase"
                    >
                      Login
                    </Link>
                  </span>
                </label>
              </div>
              {/* register btn */}
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-error text-white text-base"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="px-8 mb-4">
              <div className="divider divider-secondary mb-10 text-xs font-bold text-white">
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
export default Register;
