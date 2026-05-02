import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import b1 from '../../assets/banner/banner1.jpg';
import b2 from '../../assets/banner/banner2.jpg';
import b3 from '../../assets/banner/banner3.jpg';
import b4 from '../../assets/banner/banner4.jpg';
import b5 from '../../assets/banner/banner5.jpg';
import b6 from '../../assets/banner/banner6.jpg';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="brightness-50 object-cover h-[60vh] md:h-[70vh] w-full"
            src={b1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="brightness-50 object-cover h-[60vh] md:h-[70vh] w-full"
            src={b2}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="brightness-50 object-cover h-[60vh] md:h-[70vh] w-full"
            src={b3}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="brightness-50 object-cover h-[60vh] md:h-[70vh] w-full"
            src={b4}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="brightness-50 object-cover h-[60vh] md:h-[70vh] w-full"
            src={b5}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="brightness-50 object-cover h-[60vh] md:h-[70vh] w-full"
            src={b6}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4 pointer-events-none">
        <h2 className="text-white">
          <span className="text-primary text-4xl md:text-6xl font-bold tracking-wider drop-shadow-lg">
            ExploreNest
          </span>
          <br />
          <br />
          <span className="text-sm md:text-2xl font-medium text-white drop-shadow-md">
            Your Gateway{' '}
            <Typewriter
              words={['to Limitless Adventures!', 'to Unforgettable Memories!', 'to Discover the World!']}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            ></Typewriter>
          </span>
        </h2>
        <div className="mt-8 pointer-events-auto">
          <Link to="/allPackages">
            <button className="btn btn-primary px-8 text-white uppercase font-bold tracking-wide rounded-full shadow-lg hover:scale-105 transition-transform">
              Book Today
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Banner;
