import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import Container from '../../components/Container';
import { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const GuideProfile = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [userRating, setUserRating] = useState(5);
  const loadedGuide = useLoaderData();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();
  //   console.log(Object.keys(loadedGuide).join(','));
  const { _id, name, photo, bio, contact, education, skills, experience, reviews } =
    loadedGuide || {};

  const [localReviews, setLocalReviews] = useState(reviews || []);
  
  useEffect(() => {
    setLocalReviews(reviews || []);
  }, [reviews]);

  const hasReviewed = localReviews.find(r => r.reviewer === user?.email);
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
          setLocalReviews([...localReviews, review]);
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
    <div className="min-h-screen pt-24 bg-base-100">
      {/* TODO guide profile */}
      <Container>
        <div>
          <div className="mx-auto my-5 p-5">
            <div className="md:flex gap-10">
              {/* left bar */}
              <div className="w-full md:w-4/12 md:mx-2">
                <div className="bg-base-200 p-6 rounded-2xl border border-base-300 shadow-sm border-t-4 border-t-primary">
                  <div className="image overflow-hidden rounded-xl">
                    <img className="h-auto w-full mx-auto" src={photo} alt="" />
                  </div>
                  <div className="flex my-4 items-center justify-start gap-4">
                    <h1 className="text-base-content font-bold text-2xl leading-8">
                      {name}
                    </h1>
                    <ul>
                      <li className="flex items-center">
                        <span className="bg-primary/10 py-1 px-3 rounded-lg text-primary text-xs uppercase font-bold tracking-wider">
                          Guide
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="text-base-content/80 font-lg text-semibold leading-relaxed italic">
                    {bio}
                  </h3>
                </div>
              </div>
              {/* right bar */}
              <div className="w-full md:w-8/12 mx-2">
                {/* about */}
                <div className="bg-base-200 p-6 rounded-2xl border border-base-300 shadow-sm mb-6">
                  <div className="flex items-center space-x-2 font-semibold text-base-content leading-8 mb-4">
                    <span className="text-primary">
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
                  <div className="text-gray-500">
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
                          <span className="text-secondary font-medium">{contact}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-base-200 p-6 rounded-2xl border border-base-300 shadow-sm mb-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center space-x-2 font-semibold text-base-content leading-8 mb-4">
                        <span className="text-primary">
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
                          <div className="text-secondary font-medium">{experience}</div>
                          <div className="text-base-content/70 text-sm mt-4">
                            <strong className="text-base-content/90">Skills: </strong>
                            {skills}
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 font-semibold text-base-content leading-8 mb-4">
                        <span className="text-primary">
                          <svg
                            className="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path fill="currentColor" opacity="0.2" d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path
                              fill="currentColor" opacity="0.2"
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
                          <div className="text-secondary font-medium">{education}</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Reviews Section */}
                <div className="bg-base-200 p-6 rounded-2xl border border-base-300 shadow-sm mt-6">
                  <div className="w-full">
                    <div className="text-center">
                      <h1 className="text-xl md:text-2xl mb-8 font-bold text-primary">
                        Reviews & Ratings
                      </h1>
                    </div>

                    {/* Render List of Reviews */}
                    {localReviews.length > 0 ? (
                      <div className="space-y-4 mb-8">
                        {localReviews.map((rev, index) => (
                          <div key={index} className="bg-base-100 p-4 rounded-xl border border-base-200 shadow-sm">
                            <div className="flex justify-between items-start mb-3">
                              <div className="flex items-center gap-3">
                                <div className="avatar placeholder">
                                  <div className="bg-neutral text-neutral-content rounded-full w-8">
                                    <span className="text-xs uppercase">{rev.reviewer.charAt(0)}</span>
                                  </div>
                                </div>
                                <span className="font-bold text-base-content text-sm">{rev.reviewer}</span>
                              </div>
                              <div className="flex text-orange-400">
                                {[...Array(5)].map((_, i) => (
                                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${i < rev.rating ? 'fill-current' : 'text-base-300 fill-current'}`} viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                                ))}
                              </div>
                            </div>
                            <p className="text-base-content/80 text-sm pl-11 italic">"{rev.comment}"</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center text-base-content/60 italic mb-8">No reviews yet. Be the first to share your thoughts!</div>
                    )}

                    {/* Review Submission or Thank You Message */}
                    {hasReviewed ? (
                      <div className="bg-primary/10 p-6 rounded-xl border border-primary/20 text-center">
                        <h3 className="text-lg font-bold text-primary mb-2">Thank you for your review!</h3>
                        <p className="text-base-content/70 text-sm mb-4">Your feedback helps others make great travel decisions.</p>
                        <button className="btn btn-outline btn-primary btn-sm rounded-lg" onClick={() => toast("Edit functionality coming soon!", {icon: '🚧'})}>
                          Edit My Review
                        </button>
                      </div>
                    ) : (
                      <div className="mt-8 pt-8 border-t border-base-300">
                        <h3 className="text-lg font-bold text-base-content mb-6 text-center">Share your thoughts on {name.split(' ')[0]}</h3>
                        <form onSubmit={handleSubmit}>
                          <div className="space-y-4">
                            {/* daisy rating */}
                            <div className="form-control bg-base-100 p-4 rounded-xl border border-base-200">
                              <label className="label mb-2">
                                <span className="label-text font-bold text-base-content">
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
                                <span className="label-text font-bold text-base-content">
                                  Comments
                                </span>
                              </label>
                              <input
                                type="text"
                                name="comment"
                                className="input input-bordered w-full bg-base-100 rounded-xl"
                                placeholder="Write your review here..."
                                required
                              />
                            </div>
                          </div>
                          <div className="form-control mt-8">
                            <button
                              className="btn btn-primary btn-block text-white rounded-xl shadow-lg hover:shadow-primary/50 transition-shadow uppercase tracking-widest font-bold"
                              type="submit"
                            >
                              Post Review
                            </button>
                          </div>
                        </form>
                      </div>
                    )}
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
