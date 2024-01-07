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
            className="brightness-50 md:h-[500px] h-80 w-full"
            src={b1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="brightness-50 md:h-[500px] h-80 w-full"
            src={b2}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="brightness-50 md:h-[500px] h-80 w-full"
            src={b3}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="brightness-50 md:h-[500px] h-80 w-full"
            src={b4}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="brightness-50 md:h-[500px] h-80 w-full"
            src={b5}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="brightness-50 md:h-[500px] h-80 w-full"
            src={b6}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      <h2 className="absolute top-20 md:left-20 left-10 z-10 text-white">
        <span className="text-info text-4xl md:text-5xl font-bold md:tracking-widest">
          ExploreNest:
        </span>
        <br />
        <br />
        <span className="text-xs md:text-lg font-medium text-white">
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
        <br />
        <br />
        <span>
          <Link to="/allPackages">
            <button className="btn md:btn-block btn-secondary uppercase md:mt-40 mt-6">
              Book Today
            </button>
          </Link>
        </span>
      </h2>
    </div>
  );
};
export default Banner;
