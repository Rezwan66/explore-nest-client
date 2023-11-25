import { useLoaderData } from 'react-router-dom';

const GuideProfile = () => {
  const loadedGuide = useLoaderData();
  //   console.log(Object.keys(loadedGuide).join(','));
  const { _id, name, photo, bio, contact, education, skills, experience } =
    loadedGuide || {};

  return (
    <div>
      <h2> HELLO I Am GuideProfile </h2>
      {/* TODO guide profile */}
    </div>
  );
};
export default GuideProfile;
