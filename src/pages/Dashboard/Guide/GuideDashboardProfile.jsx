import Swal from 'sweetalert2';
import DashboardContainer from '../../../components/Dashboard/DashboardContainer';
import useAuth from '../../../hooks/useAuth';
import useGuidesProfile from '../../../hooks/useGuidesProfile';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const GuideDashboardProfile = () => {
  const { user } = useAuth();
  const { tourGuideProfile, refetch } = useGuidesProfile();
  const axiosSecure = useAxiosSecure();
  // console.log(Object.keys(tourGuideProfile).join(','));
  const { _id, contact, name, photo, bio, education, skills, experience } =
    tourGuideProfile || {};
  const handleUpdateProfile = e => {
    e.preventDefault();
    const form = e.target;
    const guideName = form.name.value || user?.displayName;
    const guidePhoto = form.photo.value || user?.photoURL;
    const guideBio = form.bio.value || '';
    const guideEducation = form.education.value || '';
    const guideSkills = form.skills.value || '';
    const guideExperience = form.experience.value || '';
    const updatedInfo = {
      guideName,
      guidePhoto,
      guideBio,
      guideEducation,
      guideSkills,
      guideExperience,
    };
    // console.log(updatedInfo);

    axiosSecure
      .patch(`/guidesProfile/${_id}`, updatedInfo)
      .then(res => {
        console.log(res.data);
        if (res?.data?.modifiedCount > 0) {
          refetch();
          form.reset();
          Swal.fire({
            title: 'Profile Updated!',
            text: 'Your profile has been updated.',
            icon: 'success',
          });
        }
      })
      .catch(err => toast.error(err.message));
  };
  return (
    <div>
      <DashboardContainer>
        <div className="my-16">
          <h2 className="md:text-4xl text-2xl font-semibold mb-10 text-error text-center">
            {' '}
            My Profile{' '}
          </h2>
          <div className="w-[350px] md:w-[600px] lg:w-[700px] md:px-6">
            <div className="flex shadow-lg px-4 py-10 rounded-xl flex-col items-center justify-between lg:flex-row-reverse gap-6">
              <div>
                <img
                  src={photo}
                  className="w-24 h-24 rounded-full shadow-2xl object-cover"
                />
              </div>
              <div className="">
                <h1 className="text-3xl font-bold">{name}</h1>
                <p className="italic">{user?.email}</p>
                <p className="mt-2 text-lg">
                  <strong>Role: </strong>
                  {'Guide'}
                </p>
                {/* <button className="btn btn-primary">Get Started</button> */}
              </div>
            </div>
            {/* add story form */}
            <div className="my-16">
              {/* done: story post form */}

              <div className="card w-full p-8 shadow-2xl bg-[#f9c8d9]">
                <div className="text-center">
                  <h1 className="text-lg md:text-3xl mb-8 font-bold text-[#f50057]">
                    Update Guide Profile
                  </h1>
                </div>
                <form onSubmit={handleUpdateProfile}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* name */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xs font-bold">
                          Guide Profile Name *
                        </span>
                      </label>
                      <input
                        type="text"
                        defaultValue={name}
                        name="name"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    {/* photo  */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xs font-bold">
                          Guide Profile Photo *
                        </span>
                      </label>
                      <input
                        type="text"
                        defaultValue={photo}
                        name="photo"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    {/* bio  */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xs font-bold">
                          Bio
                        </span>
                      </label>
                      <input
                        type="text"
                        name="bio"
                        defaultValue={bio}
                        className="input input-bordered"
                      />
                    </div>
                    {/* contact */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xs font-bold">
                          Contact Details *
                        </span>
                      </label>
                      <input
                        type="text"
                        defaultValue={contact}
                        name="contact"
                        readOnly
                        className="input input-bordered"
                      />
                    </div>
                    {/* education */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xs font-bold">
                          Education
                        </span>
                      </label>
                      <input
                        type="text"
                        defaultValue={education}
                        name="education"
                        className="input input-bordered"
                      />
                    </div>
                    {/* skills */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xs font-bold">
                          Skills (using commas)
                        </span>
                      </label>
                      <input
                        type="text"
                        defaultValue={skills}
                        name="skills"
                        className="input input-bordered"
                      />
                    </div>
                    {/* experience */}
                    <div className="form-control md:col-span-2">
                      <label className="label">
                        <span className="label-text text-xs font-bold">
                          Experience
                        </span>
                      </label>
                      <textarea
                        type="text"
                        defaultValue={experience}
                        name="experience"
                        className="textarea textarea-bordered"
                      />
                    </div>
                  </div>
                  {/* submit btn */}
                  <div className="form-control mt-10">
                    <input
                      className="btn btn-secondary btn-block text-white"
                      type="submit"
                      value="Update Profile"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </DashboardContainer>
    </div>
  );
};
export default GuideDashboardProfile;
