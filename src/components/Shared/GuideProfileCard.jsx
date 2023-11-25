import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';

const GuideProfileCard = ({ guide }) => {
  const { _id, photo, name, contact } = guide || {};
  return (
    <div className="relative group cursor-pointer flex flex-col p-4 text-gray-700 bg-transparent rounded-xl bg-clip-border">
      <div className="flex justify-center relative rounded-full  text-gray-700 bg-clip-border">
        <img
          className="rounded-full h-32 w-32 object-cover group-hover:scale-110 transition"
          src={photo}
          alt="profile-picture"
        />
      </div>
      <div className="text-center">
        <h4 className="block my-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-white">
          {name.split(' ')[0]}
        </h4>
        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-white italic bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
          {contact}
        </p>
      </div>
      <div className="flex justify-center pt-2">
        <Link to={`/tourGuides/${_id}`}>
          <button className="btn btn-circle btn-secondary text-2xl text-white">
            <FaEye />
          </button>
        </Link>
      </div>
    </div>
  );
};
export default GuideProfileCard;
