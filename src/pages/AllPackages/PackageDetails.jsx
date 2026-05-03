import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import Container from '../../components/Container';
import { FaQuoteLeft } from 'react-icons/fa';
import CustomizedAccordions from '../../components/AllPackages/CustomizedAccordions';
import useTourGuides from '../../hooks/useTourGuides';
import GuideProfileCard from '../../components/Shared/GuideProfileCard';
import './PackageDetails.css';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useState, useEffect } from 'react';
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

  // Track viewing history for personalized recommendations and scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
    if (tourType) {
      const storedCategories = localStorage.getItem('viewedCategories');
      let preferredCategories = storedCategories ? JSON.parse(storedCategories) : [];
      
      if (!preferredCategories.includes(tourType)) {
        preferredCategories.push(tourType);
        // Keep only the 5 most recent categories to avoid bloat
        if (preferredCategories.length > 5) {
          preferredCategories.shift();
        }
        localStorage.setItem('viewedCategories', JSON.stringify(preferredCategories));
      }
    }
  }, [tourType]);

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
    <div className="bg-base-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <img
          className="h-full w-full object-cover brightness-50"
          src={photo}
          alt={tripTitle}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="mb-4">
            <span className="badge badge-primary badge-lg uppercase tracking-widest text-white border-none shadow-md">
              {tourType}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white drop-shadow-lg tracking-wider mb-6">
            {tripTitle}
          </h1>
          <p className="text-3xl font-bold text-secondary drop-shadow-md bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full">
            ${price}
          </p>
        </div>
      </div>

      <Container>
        <div className="py-14 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content (Left) */}
          <div className="col-span-1 lg:col-span-2 space-y-12">
            
            {/* Gallery Section */}
            {gallery?.length > 0 && (
              <section>
                <h3 className="text-2xl font-bold text-primary mb-6 border-b-2 border-primary/20 pb-2">Tour Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {gallery?.map((item, idx) => (
                    <div key={idx} className="overflow-hidden rounded-xl h-32 md:h-40">
                      <img
                        className="h-full w-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"
                        src={item}
                        alt={`Gallery ${idx}`}
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Overview Section */}
            <section>
              <h3 className="text-2xl font-bold text-primary mb-6 border-b-2 border-primary/20 pb-2">Overview</h3>
              <div className="bg-base-200 p-8 rounded-2xl border border-base-300 relative">
                <FaQuoteLeft className="text-4xl text-primary/20 absolute top-4 left-4" />
                <p className="text-base-content/80 leading-relaxed relative z-10 italic pl-8 text-lg">
                  {about}
                </p>
              </div>
            </section>

            {/* Itinerary Section */}
            <section>
              <h3 className="text-2xl font-bold text-primary mb-6 border-b-2 border-primary/20 pb-2">Trip Itinerary</h3>
              <div className="bg-base-100 rounded-2xl overflow-hidden shadow-sm">
                <CustomizedAccordions tourPlan={tourPlan}></CustomizedAccordions>
              </div>
            </section>

            {/* Guides Section */}
            <section>
              <h3 className="text-2xl font-bold text-primary mb-6 border-b-2 border-primary/20 pb-2">Meet Our Guides</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {tourGuides?.slice(0, 3).map(guide => (
                  <GuideProfileCard
                    key={guide._id}
                    guide={guide}
                  ></GuideProfileCard>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar / Booking Form (Right) */}
          <div className="col-span-1">
            <div className="sticky top-24 bg-base-200 p-8 rounded-3xl shadow-xl border border-base-300">
              <h3 className="text-2xl font-bold text-primary text-center mb-2">Book This Tour</h3>
              <p className="text-center text-sm text-gray-500 mb-8">Secure your spot today.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="form-control">
                  <label className="label"><span className="label-text font-semibold">Full Name</span></label>
                  <input type="text" name="touristName" className="input input-bordered bg-base-100 rounded-xl" defaultValue={user?.displayName} required />
                </div>
                
                <div className="form-control">
                  <label className="label"><span className="label-text font-semibold">Email</span></label>
                  <input type="email" className="input input-bordered bg-base-100 rounded-xl text-gray-500" defaultValue={user?.email} readOnly />
                </div>

                <div className="form-control">
                  <label className="label"><span className="label-text font-semibold">Price ($)</span></label>
                  <input type="text" className="input input-bordered bg-base-100 rounded-xl text-primary font-bold text-lg" defaultValue={price} readOnly />
                </div>

                <div className="form-control">
                  <label className="label"><span className="label-text font-semibold">Trip Date</span></label>
                  <DatePicker
                    className="input input-bordered w-full bg-base-100 rounded-xl"
                    showIcon
                    dateFormat="dd/MM/yyyy"
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    minDate={new Date()}
                  />
                </div>

                <div className="form-control mb-6">
                  <label className="label"><span className="label-text font-semibold">Select Guide</span></label>
                  <select defaultValue="no choice" className="select select-bordered bg-base-100 rounded-xl" name="guideName" required>
                    <option disabled value="no choice">Select your guide</option>
                    {tourGuides?.map(guide => (
                      <option key={guide._id} value={guide.name}>{guide?.name}</option>
                    ))}
                  </select>
                </div>

                <button type="submit" className="btn btn-primary btn-block rounded-xl text-white font-bold text-lg uppercase tracking-widest shadow-lg hover:shadow-primary/50 transition-shadow">
                  Confirm Booking
                </button>
              </form>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};

// MUI colors
// text pink: #f50057
// bg pink: #f9c8d9
// bg dark pink: #f73378

export default PackageDetails;
