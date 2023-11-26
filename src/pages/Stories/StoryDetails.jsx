import { useLoaderData, useLocation } from 'react-router-dom';
import Container from '../../components/Container';
import {
  LinkedinShareButton,
  LinkedinIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';
import useAuth from '../../hooks/useAuth';

const StoryDetails = () => {
  const { user } = useAuth();
  const loadedStory = useLoaderData();
  const location = useLocation();
  //   console.log(window.location);
  const originLink = 'https://explore-nest.web.app';
  // const windowLink = window.location.origin;
  const windowLink = originLink + location.pathname;
  //   console.log(windowLink);
  //   console.log(Object.keys(loadedStory).join(','));
  const {
    // _id,
    userName,
    userPhoto,
    location: place,
    date,
    title,
    content,
    spotPhoto,
  } = loadedStory || {};
  return (
    <div className="">
      <div>
        <img
          className="lg:h-96 md:h-72 h-52 w-full object-cover"
          src={spotPhoto}
          alt=""
        />
      </div>
      <Container>
        <div className="my-14">
          <div className="hero lg:px-10">
            <div className="hero-content gap-10 flex-col lg:flex-row">
              <div className="lg:w-3/12 flex flex-col items-center gap-6">
                <img
                  src={userPhoto}
                  className="w-40 h-40 object-cover rounded-full shadow-2xl"
                />

                <h3 className="text-sm text-center italic font-bold">
                  {userName}
                </h3>
              </div>
              <div className="lg:w-9/12">
                <h1 className="md:text-4xl text-xl uppercase font-bold text-secondary">
                  {title}
                </h1>
                <div className="md:flex  justify-between pt-6">
                  <p className="my-2 italic md:text-left text-pink-500 font-medium">
                    <strong>Location:</strong> {place}
                  </p>
                  <p className="my-2 italic md:text-left text-pink-500 font-medium">
                    <strong>Date:</strong> {date}
                  </p>
                </div>
                <p className="my-16 italic">{content}</p>
                <div className="my-4">
                  {user?.email ? (
                    'Share to social media'
                  ) : (
                    <span>
                      Please{' '}
                      {/* <Navigate
                        className="text-pink-500"
                        to="/login"
                        state={{ from: location }}
                        replace
                      >
                        Login
                      </Navigate>{' '} */}{' '}
                      Login to share
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <FacebookShareButton
                    disabled={!user?.email}
                    url={windowLink}
                    quote={`${title}`}
                    hashtag="#story"
                  >
                    <FacebookIcon size={40} round={true} />
                  </FacebookShareButton>

                  <TwitterShareButton
                    disabled={!user?.email}
                    url={windowLink}
                    title={`${title}`}
                  >
                    <TwitterIcon size={40} round={true} />
                  </TwitterShareButton>
                  <LinkedinShareButton
                    disabled={!user?.email}
                    url={windowLink}
                    summary={`${title}`}
                  >
                    <LinkedinIcon size={40} round={true} />
                  </LinkedinShareButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default StoryDetails;
