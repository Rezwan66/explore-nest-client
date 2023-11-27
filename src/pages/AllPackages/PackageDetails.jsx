import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import Container from '../../components/Container';
import { FaQuoteLeft } from 'react-icons/fa';
import CustomizedAccordions from '../../components/AllPackages/CustomizedAccordions';
import useTourGuides from '../../hooks/useTourGuides';
import GuideProfileCard from '../../components/Shared/GuideProfileCard';
import './PackageDetails.css';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const PackageDetails = () => {
  const [startDate, setStartDate] = useState(new Date());
  const loadedPackage = useLoaderData();
  const { user } = useAuth();
  const { tourGuides } = useTourGuides();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();
  //   console.log(Object.keys(loadedPackage).join(','));
  // console.log(startDate.toLocaleDateString('en-GB'));
  // console.log(startDate);
  // console.log(tourGuides);
  const { _id, photo, tourType, tripTitle, price, gallery, about, tourPlan } =
    loadedPackage || {};

  const handleSubmit = e => {
    e.preventDefault();
    const touristName = e.target.touristName.value;
    const guideName = e.target.guideName.value;
    const { contact: guideEmail } =
      tourGuides?.find(g => g.name === guideName) || {};
    console.log(guideName, touristName, _id, guideEmail);
    if (!user?.email) {
      return navigate('/login', { state: { from: location }, replace: true });
    }

    const booking = {
      package_id: _id,
      packageName: tripTitle,
      touristName: touristName,
      touristEmail: user?.email,
      touristPhoto: user?.photoURL,
      price: price,
      tourDate: startDate.toLocaleDateString('en-GB'),
      guide: guideName || 'no choice',
      guideEmail: guideEmail || 'not given',
      status: 'In Review',
    };
    console.log(booking);

    if (booking?.touristEmail === booking?.guideEmail) {
      return Swal.fire({
        title: 'Oops!',
        text: 'You cannot book yourself as a guide!',
        icon: 'error',
        confirmButtonText: 'Cool',
      });
    }

    Swal.fire({
      title: 'Confirm Booking!',
      text: 'Click to confirm booking!',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Book Now!',
    }).then(result => {
      if (result.isConfirmed) {
        axiosSecure
          .post('/bookings', booking)
          .then(res => {
            console.log(res.data);
            if (res?.data?.insertedId) {
              Swal.fire({
                title: 'Booked!',
                text: 'Your Trip has been booked.',
                icon: 'success',
                html: '<a href="/dashboard/userBookings" style="color: #007BFF; text-decoration: underline; cursor: pointer;">Go to Bookings</a>',
              });
            }
          })
          .catch(err => toast.error(err.message));
      }
    });
  };

  return (
    <div>
      <div className="my-14">
        <Container>
          <div className="flex flex-col items-center gap-4 justify-center">
            <h2 className="md:text-4xl text-2xl font-semibold text-error text-center">
              {tripTitle}
            </h2>
            <div className="z-50 whitespace-normal break-words rounded-lg bg-pink-500 py-1 px-3 font-sans text-xs font-medium text-white focus:outline-none w-fit cursor-pointer mb-8">
              <span className="uppercase tracking-widest">{tourType}</span>
            </div>
          </div>
          {/* gallery section */}
          <div className="grid gap-4">
            <div>
              <img
                className="lg:h-96 md:h-72 h-52 w-full rounded-lg object-cover"
                src={photo}
                alt=""
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {gallery?.map((item, idx) => (
                <div key={idx}>
                  <img
                    className="lg:h-40 md:h-28 h-14 w-full rounded-lg object-cover"
                    src={item}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
          {/* about */}
          <h2 className="md:text-xl text-sm font-medium italic my-10 text-slate-600">
            <FaQuoteLeft></FaQuoteLeft>
            {about}
          </h2>
          {/* tour plan */}
          <div className="my-10">
            {/* mui accordion */}
            <h2 className="md:text-2xl text-base text-[#f50057] tracking-widest font-bold mb-6">
              Trip Itinerary:
            </h2>
            <CustomizedAccordions tourPlan={tourPlan}></CustomizedAccordions>
          </div>
        </Container>
        {/* tour guides */}
        <div className="guide-bg bg-fixed my-10 py-20">
          <Container>
            <h2 className="md:text-3xl text-base text-white italic text-center tracking-widest font-bold mb-6">
              Our Guides:
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {tourGuides?.map(guide => (
                <GuideProfileCard
                  key={guide._id}
                  guide={guide}
                ></GuideProfileCard>
              ))}
            </div>
          </Container>
        </div>
        {/* booking form */}
        <div className="my-10">
          {/* TODO: booking form */}
          <Container>
            <div className="card w-full p-8 shadow-2xl bg-[#f9c8d9]">
              <div className="text-center">
                <h1 className="text-lg md:text-3xl mb-8 font-bold text-[#f50057]">
                  Book Package : {tripTitle}
                </h1>
              </div>
              <form onSubmit={handleSubmit}>
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
                      name="touristName"
                      className="input input-bordered"
                      defaultValue={user?.displayName}
                    />
                  </div>
                  {/* tourist email */}
                  <div className="form-control">
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
                  </div>
                  {/* tourist image */}
                  <div className="form-control">
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
                  </div>
                  {/* price */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xs font-bold">
                        Package Price (in dollars $)
                      </span>
                    </label>
                    <input
                      type="text"
                      defaultValue={price}
                      readOnly
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
                    {/* <input
                      type="number"
                      name="date"
                      className="input input-bordered"
                      required
                    /> */}
                    <DatePicker
                      className="input input-bordered w-full"
                      showIcon
                      dateFormat="dd/MM/yyyy"
                      selected={startDate}
                      onChange={date => setStartDate(date)}
                      // inline
                    />
                  </div>
                  {/* guide name dropdown */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xs font-bold">
                        Pick a Guide
                      </span>
                    </label>
                    {/* <input
                      type="text"
                      name="guide"
                      className="input input-bordered"
                    /> */}
                    <select
                      defaultValue="no choice"
                      className="select select-bordered"
                      name="guideName"
                      required
                    >
                      <option disabled value="no choice">
                        Select a category
                      </option>
                      {tourGuides?.map(guide => (
                        <option key={guide._id} value={guide.name}>
                          {guide?.name}
                        </option>
                      ))}
                      {/* <option value="salad">Salad</option>
                      <option value="pizza">Pizza</option>
                      <option value="soup">Soup</option>
                      <option value="dessert">Dessert</option>
                      <option value="drinks">Drinks</option> */}
                    </select>
                  </div>
                </div>
                {/* submit btn */}
                <div className="form-control mt-10">
                  <input
                    className="btn btn-secondary btn-block text-white"
                    type="submit"
                    value="Book Package"
                  />
                </div>
              </form>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

// MUI colors
// text pink: #f50057
// bg pink: #f9c8d9
// bg dark pink: #f73378

export default PackageDetails;
