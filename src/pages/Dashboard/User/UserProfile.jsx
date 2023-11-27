import { useState } from 'react';
import DashboardContainer from '../../../components/Dashboard/DashboardContainer';
import useAuth from '../../../hooks/useAuth';
import DatePicker from 'react-datepicker';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const UserProfile = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const handleAddStory = e => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value || user?.displayName;
    const location = form.location.value;
    const title = form.title.value;
    const content = form.content.value;
    const spotPhoto = form.spotPhoto.value;

    const story = {
      userName,
      userPhoto: user?.photoURL,
      userEmail: user?.email,
      location,
      date: startDate.toLocaleDateString('en-GB'),
      title,
      content,
      spotPhoto,
    };
    // console.log(story);
    axiosSecure
      .post('/stories', story)
      .then(res => {
        console.log(res.data);
        if (res?.data?.insertedId) {
          form.reset();
          Swal.fire({
            title: 'Story Added!',
            text: 'Your story has been added.',
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
            <div className="flex flex-col items-center justify-between lg:flex-row-reverse gap-6">
              <div>
                <img
                  src={user?.photoURL}
                  className="w-24 h-24 rounded-full shadow-2xl"
                />
              </div>
              <div className="">
                <h1 className="text-3xl font-bold">{user?.displayName}</h1>
                <p className="italic">{user?.email}</p>
                {/* <button className="btn btn-primary">Get Started</button> */}
              </div>
            </div>
            {/* add story form */}
            <div className="my-16">
              {/* TODO: booking form */}
              <div className="card w-full p-8 shadow-2xl bg-[#f9c8d9]">
                <div className="text-center">
                  <h1 className="text-lg md:text-3xl mb-8 font-bold text-[#f50057]">
                    Add A Story
                  </h1>
                </div>
                <form onSubmit={handleAddStory}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* tourist name */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xs font-bold">
                          Your Full Name
                        </span>
                      </label>
                      <input
                        type="text"
                        name="userName"
                        className="input input-bordered"
                        defaultValue={user?.displayName}
                        required
                      />
                    </div>
                    {/* tourist email */}
                    {/* <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xs font-bold">
                          Your Email
                        </span>
                      </label>
                      <input
                        type="text"
                        className="input input-bordered"
                        required
                        defaultValue={user?.email}
                        readOnly
                      />
                    </div> */}
                    {/* tourist image */}
                    {/* <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xs font-bold">
                          Profile Pic
                        </span>
                      </label>
                      <input
                        type="text"
                        defaultValue={user?.photoURL}
                        readOnly
                        className="input input-bordered"
                        disabled
                      />
                    </div> */}
                    {/* story title  */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xs font-bold">
                          Story Title
                        </span>
                      </label>
                      <input
                        type="text"
                        name="title"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    {/* location */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xs font-bold">
                          Location
                        </span>
                      </label>
                      <input
                        type="text"
                        //   defaultValue={price}
                        name="location"
                        required
                        className="input input-bordered"
                      />
                    </div>
                    {/* date react-datepicker */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xs font-bold">
                          Pick a trip date
                        </span>
                      </label>
                      <DatePicker
                        className="input input-bordered w-full"
                        showIcon
                        dateFormat="dd/MM/yyyy"
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                      />
                    </div>

                    {/* content */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xs font-bold">
                          Story Description
                        </span>
                      </label>
                      <textarea
                        type="text"
                        name="content"
                        className="input input-bordered"
                      />
                    </div>
                    {/* photo */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xs font-bold">
                          Photo URL
                        </span>
                      </label>
                      <input
                        type="text"
                        name="spotPhoto"
                        className="input input-bordered"
                        required
                      />
                    </div>
                  </div>
                  {/* submit btn */}
                  <div className="form-control mt-10">
                    <input
                      className="btn btn-secondary btn-block text-white"
                      type="submit"
                      value="Add Story"
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
export default UserProfile;
