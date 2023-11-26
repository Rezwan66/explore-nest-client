import { Link } from 'react-router-dom';
import Container from '../../components/Container';
import SharedBanner from '../../components/Shared/SharedBanner';
import useTouristStories from '../../hooks/useTouristStories';

const AllStories = () => {
  const { stories } = useTouristStories();

  return (
    <div>
      <SharedBanner></SharedBanner>

      <div className="my-14">
        <Container>
          <h2 className="md:text-4xl text-2xl font-semibold  text-error text-center">
            {' '}
            Tourist Stories{' '}
          </h2>
          <p className="mb-10 text-center italic text-sm mt-4 text-slate-600">
            Click to discover
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
            {stories?.map(story => (
              <Link key={story._id} to={`/stories/${story._id}`}>
                <div className="flex flex-col items-center  group cursor-pointer">
                  <img
                    className="h-auto lg:h-64 w-full rounded-md group-hover:scale-110 transition"
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
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};
export default AllStories;
