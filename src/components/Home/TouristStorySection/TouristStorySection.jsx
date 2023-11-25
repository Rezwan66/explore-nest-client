import useTouristStories from '../../../hooks/useTouristStories';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import Container from '../../Container';
import { Link } from 'react-router-dom';

const TouristStorySection = () => {
  const { stories } = useTouristStories();
  // console.log(stories);
  return (
    <div className="my-14">
      <Container>
        <h2 className="md:text-4xl text-2xl font-semibold mb-10 text-error text-center">
          {' '}
          Tourist Stories{' '}
        </h2>

        <div>
          <Swiper
            slidesPerView={2}
            rewind={true}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            <div>
              {stories?.map(story => (
                <SwiperSlide key={story._id}>
                  <Link to={`/stories/${story._id}`}>
                    <div className="flex flex-col items-center lg:px-20 px-12 pb-14 group cursor-pointer">
                      <img
                        className="lg:h-64 md:h-40 h-24 w-full rounded-md group-hover:scale-110 transition"
                        src={story.spotPhoto}
                        alt=""
                      />
                      <div>
                        <div className="flex flex-col md:flex-row justify-between items-center md:gap-8 mt-4">
                          <div className="flex  items-center gap-2">
                            <div className="avatar">
                              <div className="w-9 rounded-full">
                                <img src={story.userPhoto} />
                              </div>
                            </div>
                            <h3 className="text-sm text-left italic font-bold">
                              {story.userName.split(' ')[0]}
                            </h3>
                          </div>
                          <p className="lg:block hidden my-4 text-xs md:text-sm italic">
                            &quot; {story.content.slice(0, 80)}...&quot;
                          </p>
                        </div>
                        <h3 className="md:text-xl text-base text-center md:text-left uppercase font-semibold text-secondary my-2">
                          {story.title}
                        </h3>
                        <p className="my-2 text-xs md:text-sm italic text-center md:text-left text-pink-500 font-medium">
                          {story.location}
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
          <div className="flex justify-center mt-8">
            <Link to="/stories">
              <button className="btn btn-wide btn-secondary">Show All</button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default TouristStorySection;
