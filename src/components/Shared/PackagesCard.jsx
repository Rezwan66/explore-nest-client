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
    <div className="group relative flex w-full flex-col h-full rounded-2xl bg-base-100 border border-base-200 shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-base-300">
        <img
          className="h-60 w-full object-cover group-hover:scale-110 transition-transform duration-500"
          src={photo}
          alt={tripTitle}
        />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent"></div>
        {/* heart btn */}
        <button
          onClick={handleHeartClick}
          className={`absolute top-4 right-4 h-10 w-10 flex items-center justify-center rounded-full bg-base-100/30 backdrop-blur-sm ${
            clicked ? 'text-red-500' : 'text-white'
          } hover:bg-base-100/50 transition-colors z-10`}
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
          </svg>
        </button>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <div className="rounded-full bg-primary/10 text-primary py-1 px-3 text-xs font-bold uppercase tracking-wider w-fit">
            {tourType}
          </div>
          <p className="text-2xl font-black text-secondary tracking-wider">
            ${price}
          </p>
        </div>
        
        <h5 className="text-xl font-bold text-base-content mb-2 line-clamp-2">
          {tripTitle}
        </h5>
        
        <p className="text-sm text-base-content/70 line-clamp-2 flex-grow mb-4">
          {about || "Experience an unforgettable journey with our premium travel packages. Book now!"}
        </p>

        <Link to={`/package/${_id}`} className="mt-auto">
          <button
            className="w-full btn btn-primary text-white rounded-xl shadow-lg hover:shadow-primary/50 uppercase tracking-wide"
            type="button"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};
export default PackagesCard;
