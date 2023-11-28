import { Link, useLoaderData, useLocation } from 'react-router-dom';
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
import { FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
// import Spinner from '../../components/Shared/Spinner';

const StoryDetails = () => {
  const { user } = useAuth();
  const loadedStory = useLoaderData();
  // console.log(user?.email);
  const location = useLocation();
  //   console.log(window.location);
  // const originLink = 'https://explore-nest.web.app';
  const windowLink = window.location.href;
  // const windowLink = originLink + location.pathname;
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

  // if (loading) {
  //   return <Spinner></Spinner>;
  // }

  // const facebookButton = (
  //   <FacebookShareButton url={windowLink} quote={title} hashtag="#story">
  //     <FaFacebook size={40} />
  //     Share on Facebook
  //   </FacebookShareButton>
  // );

  // const twitterButton = (
  //   <TwitterShareButton url={windowLink} title={title}>
  //     <FaTwitter size={40} />
  //     Share on Twitter
  //   </TwitterShareButton>
  // );

  // const linkedinButton = (
  //   <LinkedinShareButton url={windowLink} summary={title}>
  //     <FaLinkedinIn size={40} />
  //     Share on LinkedIn
  //   </LinkedinShareButton>
  // );

  // const handleFacebookShare = () => {
  //   // Perform any additional logic before sharing on Facebook
  //   return Promise.resolve();
  // };

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
                {/* <div className="my-4">
                  {user ? (
                    <div className="flex items-center gap-4">
                      <FacebookShareButton
                        // disabled={!user}
                        url={windowLink}
                        quote={title}
                        hashtag="#story"
                      >
                        <FacebookIcon size={40} round={true} />
                      </FacebookShareButton>

                      <TwitterShareButton
                        // disabled={!user}
                        url={windowLink}
                        title={title}
                      >
                        <TwitterIcon size={40} round={true} />
                      </TwitterShareButton>
                      <LinkedinShareButton
                        // disabled={!user}
                        url={windowLink}
                        summary={title}
                      >
                        <LinkedinIcon size={40} round={true} />
                      </LinkedinShareButton>
                    </div>
                  ) : (
                    <span>Please Login to share</span>
                  )}
                </div> */}
                {user?.email ? (
                  <div>
                    <p className="my-4">Share on social media:</p>
                    <div className="flex items-center gap-4">
                      <FacebookShareButton
                        // disabled={!user}
                        url={windowLink}
                        quote={title}
                        hashtag="#story"
                      >
                        <FacebookIcon size={40} round={true} />
                      </FacebookShareButton>

                      <TwitterShareButton
                        // disabled={!user}
                        url={windowLink}
                        title={title}
                      >
                        <TwitterIcon size={40} round={true} />
                      </TwitterShareButton>
                      <LinkedinShareButton
                        // disabled={!user}
                        url={windowLink}
                        summary={title}
                      >
                        <LinkedinIcon size={40} round={true} />
                      </LinkedinShareButton>
                    </div>
                  </div>
                ) : (
                  <div>
                    <p className="my-4">Please Login to share:</p>
                    <div className="flex items-center gap-4">
                      <Link to="/login" state={{ from: location }} replace>
                        <FaFacebook className="text-4xl" />
                      </Link>
                      <Link to="/login" state={{ from: location }} replace>
                        <FaTwitter className="text-4xl" />
                      </Link>
                      <Link to="/login" state={{ from: location }} replace>
                        <FaLinkedinIn className="text-4xl" />
                      </Link>
                    </div>
                  </div>
                )}
                {/* <div className="flex items-center gap-4">
                  {user ? facebookButton : null}
                  {user ? twitterButton : null}
                  {user ? linkedinButton : null}
                </div> */}
                {/* <div className="flex items-center gap-4">
                  <FacebookShareButton
                    // disabled={!user}
                    url={windowLink}
                    quote={title}
                    hashtag="#story"
                  >
                    <FacebookIcon size={40} round={true} />
                  </FacebookShareButton>

                  <TwitterShareButton
                    // disabled={!user}
                    url={windowLink}
                    title={title}
                  >
                    <TwitterIcon size={40} round={true} />
                  </TwitterShareButton>
                  <LinkedinShareButton
                    // disabled={!user}
                    url={windowLink}
                    summary={title}
                  >
                    <LinkedinIcon size={40} round={true} />
                  </LinkedinShareButton>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default StoryDetails;
