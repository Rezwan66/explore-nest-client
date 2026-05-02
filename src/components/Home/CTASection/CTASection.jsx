import { Link } from 'react-router-dom';
import bgImage from '../../../assets/banner/banner4.jpg';

const CTASection = () => {
  return (
    <div
      className="relative py-24 bg-fixed bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">
          Ready to Start Your Adventure?
        </h2>
        <p className="text-lg text-gray-200 mb-8 drop-shadow-sm">
          Don't wait for the perfect moment. Take the perfect moment and make it yours. Book your next dream destination today and create unforgettable memories.
        </p>
        <Link to="/allPackages">
          <button className="btn btn-primary btn-lg rounded-full px-10 border-none text-white hover:scale-105 transition-transform shadow-[0_0_15px_rgba(13,148,136,0.5)]">
            Explore All Packages
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CTASection;
