import { Typewriter } from 'react-simple-typewriter';
import bgImg from '../../assets/banner/banner4.jpg';

const SharedBanner = () => {
  return (
    <div
      className="hero md:h-[400px] h-80 w-full bg-fixed"
      style={{
        backgroundImage: `url('${bgImg}')`,
        backgroundSize: 'cover',
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-info text-5xl font-bold md:tracking-widest">
            ExploreNest
          </h1>
          {/* <p className="mb-5 text-white">Search packages by tour type</p> */}
          <span className="font-medium text-white">
            Your Gateway{' '}
            <Typewriter
              words={['to Limitless Adventures!']}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            ></Typewriter>
          </span>
          {/* <div className="join">
            <input
              className="input input-bordered join-item"
              placeholder="tour type"
            />
            <button className="btn btn-secondary join-item rounded-r-xl">
              Search
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default SharedBanner;
