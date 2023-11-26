import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import Container from '../../components/Container';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const GuideProfile = () => {
  const [userRating, setUserRating] = useState(5);
  const loadedGuide = useLoaderData();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();
  //   console.log(Object.keys(loadedGuide).join(','));
  const { _id, name, photo, bio, contact, education, skills, experience } =
    loadedGuide || {};
  // console.log(userRating);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const comment = form.comment.value;
    if (!user?.email) {
      return navigate('/login', { state: { from: location }, replace: true });
    }
    // console.log(comment, userRating);
    const review = {
      reviewer: user?.email,
      rating: parseInt(userRating),
      comment: comment,
    };

    if (user?.email === contact) {
      return Swal.fire({
        title: 'Oops!',
        text: 'You cannot give yourself a review!',
        icon: 'error',
        confirmButtonText: 'Cool',
      });
    }

    axiosSecure
      .patch(`/guides/${_id}`, review)
      .then(res => {
        console.log(res.data);
        if (res?.data?.modifiedCount > 0) {
          form.reset();
          Swal.fire({
            title: 'Review Posted!',
            text: 'Your Review has been posted.',
            icon: 'success',
          });
        }
      })
      .catch(err => toast.error(err.message));
  };

  return (
    <div className="min-h-screen">
      {/* TODO guide profile */}
      <Container>
        <div>
          <div className="mx-auto my-5 p-5">
            <div className="md:flex gap-10">
              {/* left bar */}
              <div className="w-full md:w-4/12 md:mx-2">
                <div className="bg-white p-3 border-t-4 border-pink-400">
                  <div className="image overflow-hidden">
                    <img className="h-auto w-full mx-auto" src={photo} alt="" />
                  </div>
                  <div className="flex my-3 items-center justify-start gap-4">
                    <h1 className="text-gray-900 font-bold text-xl leading-8 ">
                      {name}
                    </h1>
                    <ul>
                      <li className="flex items-center">
                        <span className="bg-pink-500 hover:shadow py-1 px-2 rounded text-white text-xs uppercase font-bold">
                          Guide
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="text-gray-600 font-lg text-semibold leading-6 italic">
                    {bio}
                  </h3>
                </div>
              </div>
              {/* right bar */}
              <div className="w-full md:w-8/12 mx-2">
                {/* about */}
                <div className="bg-white p-3 shadow-sm rounded-sm">
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                    <span className="text-pink-500">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </span>
                    <span className="tracking-wide">About</span>
                  </div>
                  <div className="text-gray-700">
                    <div className="grid lg:grid-cols-2 text-sm">
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                          First Name
                        </div>
                        <div className="px-4 py-2">{name?.split(' ')[0]}</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Last Name</div>
                        <div className="px-4 py-2">{name?.split(' ')[1]}</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Email</div>
                        <div className="px-4 py-2">
                          <span className="text-blue-800">{contact}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="my-4"></div>

                <div className="bg-white p-3 shadow-sm rounded-sm">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                        <span className="text-pink-500">
                          <svg
                            className="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </span>
                        <span className="tracking-wide">Experience</span>
                      </div>
                      <ul className="list-inside space-y-2">
                        <li>
                          <div className="text-teal-600">{experience}</div>
                          <div className="text-gray-500 text-sm mt-4">
                            <strong>Skills: </strong>
                            {skills?.map(i => (
                              <span key={i}>{i}, </span>
                            ))}
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                        <span className="text-pink-500">
                          <svg
                            className="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path
                              fill="#fff"
                              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                          </svg>
                        </span>
                        <span className="tracking-wide">Education</span>
                      </div>
                      <ul className="list-inside space-y-2">
                        <li>
                          <div className="text-teal-600">{education}</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="my-4"></div>

                <div className="bg-white p-3 shadow-sm rounded-sm">
                  <div className="card w-full p-8 shadow-2xl bg-[#f9c8d9]">
                    <div className="text-center">
                      <h1 className="text-md md:text-2xl mb-8 font-bold text-[#f50057]">
                        Share your thoughts on {name.split(' ')[0]}
                      </h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="">
                        {/* daisy rating */}
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text text-xs font-bold">
                              Give a rating
                            </span>
                          </label>
                          <div className="rating mb-4">
                            {[1, 2, 3, 4, 5].map(value => (
                              <input
                                key={value}
                                type="radio"
                                name="rating-2"
                                className={`mask mask-star-2 bg-orange-400 ${
                                  value === userRating ? 'checked' : ''
                                }`}
                                value={value}
                                onChange={() => setUserRating(value)}
                              />
                            ))}
                          </div>
                        </div>
                        {/* comment */}
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text text-xs font-bold">
                              Comments
                            </span>
                          </label>
                          <input
                            type="text"
                            name="comment"
                            className="input input-bordered"
                            // defaultValue={user?.displayName}
                          />
                        </div>
                      </div>
                      {/* submit btn */}
                      <div className="form-control mt-10">
                        <input
                          className="btn btn-secondary btn-block text-white"
                          type="submit"
                          value="Post Review"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default GuideProfile;
