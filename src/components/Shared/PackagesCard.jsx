import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import useWishList from '../../hooks/useWishList';

const PackagesCard = ({ item }) => {
  // console.log(Object.keys(item).join(','));
  const [clicked, setClicked] = useState(false);
  const { wishlist, refetch } = useWishList();
  // console.log(wishlist);
  const foundObject = wishlist?.find(obj => obj.package_id === item._id);

  useEffect(() => {
    if (foundObject) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  }, [foundObject]);

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();
  const { _id, photo, tourType, tripTitle, price, gallery, about, tourPlan } =
    item || {};

  const handleHeartClick = () => {
    if (!user?.email) {
      return navigate('/login', { state: { from: location }, replace: true });
    }
    if (clicked) {
      return toast.error('Already added to Wishlist');
    }

    const wishlistItem = {
      package_id: _id,
      photo,
      tourType,
      tripTitle,
      price,
      gallery,
      about,
      tourPlan,
      userEmail: user?.email,
    };
    // console.log(wishlistItem, clicked);
    axiosSecure
      .post('/wishlist', wishlistItem)
      .then(res => {
        console.log(res.data);
        if (res?.data?.insertedId) {
          toast.success('Package Added to Wishlist!');
          // setClicked(!clicked);
          refetch();
        } else {
          toast.error(res?.data?.message);
          // setClicked(!clicked);
        }
      })
      .catch(err => toast.error(err.message));
  };

  return (
    <div className="group relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
      <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
        <img
          className="h-64 w-full group-hover:scale-110 transition"
          src={photo}
          alt="spot photo"
        />
        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
        {/* heart btn */}
        <button
          onClick={handleHeartClick}
          // disabled={clicked}
          className={`!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase ${
            clicked ? 'text-red-500' : 'text-white'
          } transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none`}
          type="button"
          data-ripple-dark="true"
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-7 h-7"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
            </svg>
          </span>
        </button>
      </div>
      <div className="p-6 flex justify-between items-center">
        <div className="flex flex-col">
          <div
            data-tooltip="money"
            className="z-50 whitespace-normal break-words rounded-lg bg-pink-500 py-1 px-3 font-sans text-xs font-medium text-white focus:outline-none w-fit cursor-pointer mb-3"
          >
            <span className="uppercase tracking-widest">{tourType}</span>
          </div>

          <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
            {tripTitle}
          </h5>
        </div>
        <p className="block font-sans text-3xl antialiased font-black leading-relaxed text-gray-700 tracking-wider">
          ${price}
        </p>
      </div>
      <div className="p-6 pt-3">
        <Link to={`/package/${_id}`}>
          <button
            className="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            View Package
          </button>
        </Link>
      </div>
    </div>
  );
};
export default PackagesCard;
