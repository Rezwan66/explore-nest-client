import Swal from 'sweetalert2';
import DashboardContainer from '../../../components/Dashboard/DashboardContainer';
import { categories } from '../../../components/Home/CategoriesSection/CategoriesData';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const AddPackage = () => {
  // console.log(categories);
  const axiosSecure = useAxiosSecure();

  const handleAddPackage = e => {
    e.preventDefault();
    const form = e.target;
    // Accessing form data
    const photo = form.photo.value || '';
    const tourType = form.tourType.value;
    const tripTitle = form.tripTitle.value || 'Not Given';
    const price = parseInt(form.price.value);
    const location = form.location.value || 'Not Given';
    const about = form.about.value || 'Not Given';
    const day1 = form.day1.value || 'Not Given';
    const day2 = form.day2.value || 'Not Given';
    const day3 = form.day3.value || 'Not Given';
    const day4 = form.day4.value || 'Not Given';
    const gallery1 = form.gallery1.value || '';
    const gallery2 = form.gallery2.value || '';
    const gallery3 = form.gallery3.value || '';
    const gallery4 = form.gallery4.value || '';

    const newPackage = {
      photo,
      tourType,
      tripTitle,
      price,
      location,
      about,
      tourPlan: [
        { day: 1, description: day1 },
        { day: 2, description: day2 },
        { day: 3, description: day3 },
        { day: 4, description: day4 },
      ],
      gallery: [gallery1, gallery2, gallery3, gallery4],
    };
    console.log(newPackage);

    axiosSecure
      .post('/allPackages', newPackage)
      .then(res => {
        console.log(res.data);
        if (res?.data?.insertedId) {
          form.reset();
          Swal.fire({
            title: 'Package Added!',
            text: 'A new package has been added.',
            icon: 'success',
          });
        }
      })
      .catch(err => toast.error(err.message));
  };

  return (
    <div>
      <DashboardContainer>
        <div className="my-10">
          <h2 className="md:text-4xl text-2xl font-semibold mb-6 text-error text-center">
            {' '}
            Add A Package{' '}
          </h2>
          <div className="w-[350px] md:w-[650px] lg:w-[750px] ">
            {/* add package form */}
            <div className="">
              {/* TODO: booking form */}
              <div className="card w-full p-8 shadow-2xl bg-[#f9c8d9]">
                {/* <div className="text-center">
                  <h1 className="text-lg md:text-3xl mb-8 font-bold text-[#f50057]">
                    Post A Story
                  </h1>
                </div> */}
                <form onSubmit={handleAddPackage}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* photo */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xs font-bold">
                          Primary Photo *
                        </span>
                      </label>
                      <input
                        type="text"
                        name="photo"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    {/* tourtype dropdown */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xs font-bold">
                          Pick a Category *
                        </span>
                      </label>
                      <select
                        defaultValue="no choice"
                        className="select select-bordered"
                        name="tourType"
                        required
                      >
                        <option disabled value="no choice">
                          Select a category
                        </option>
                        {categories?.map(item => (
                          <option key={item.name} value={item.name}>
                            {item?.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    {/* package title  */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xs font-bold">
                          Package Name *
                        </span>
                      </label>
                      <input
                        type="text"
                        name="tripTitle"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    {/* price  */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xs font-bold">
                          Price (in dollars $) *
                        </span>
                      </label>
                      <input
                        type="number"
                        name="price"
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
                        name="location"
                        className="input input-bordered"
                      />
                    </div>
                    {/* about */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xs font-bold">
                          Package Description
                        </span>
                      </label>
                      <textarea
                        type="text"
                        name="about"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="divider md:col-span-2 text-xs font-bold">
                      Tour Plan
                    </div>
                    {/* Tour Plan1 */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xs font-bold">
                          Day 1
                        </span>
                      </label>
                      <textarea
                        type="text"
                        name="day1"
                        className="input input-bordered"
                      />
                    </div>
                    {/* Tour Plan2 */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xs font-bold">
                          Day 2
                        </span>
                      </label>
                      <textarea
                        type="text"
                        name="day2"
                        className="input input-bordered"
                      />
                    </div>
                    {/* Tour Plan3 */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xs font-bold">
                          Day 3
                        </span>
                      </label>
                      <textarea
                        type="text"
                        name="day3"
                        className="input input-bordered"
                      />
                    </div>
                    {/* Tour Plan4 */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xs font-bold">
                          Day 4
                        </span>
                      </label>
                      <textarea
                        type="text"
                        name="day4"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="divider md:col-span-2 text-xs font-bold">
                      Photo Gallery
                    </div>
                    {/* photo1 */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xs font-bold">
                          Photo 1
                        </span>
                      </label>
                      <input
                        type="text"
                        name="gallery1"
                        className="input input-bordered"
                      />
                    </div>
                    {/* photo2 */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xs font-bold">
                          Photo 2
                        </span>
                      </label>
                      <input
                        type="text"
                        name="gallery2"
                        className="input input-bordered"
                      />
                    </div>
                    {/* photo3 */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xs font-bold">
                          Photo 3
                        </span>
                      </label>
                      <input
                        type="text"
                        name="gallery3"
                        className="input input-bordered"
                      />
                    </div>
                    {/* photo4 */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xs font-bold">
                          Photo 4
                        </span>
                      </label>
                      <input
                        type="text"
                        name="gallery4"
                        className="input input-bordered"
                      />
                    </div>
                  </div>
                  {/* submit btn */}
                  <div className="form-control mt-10">
                    <input
                      className="btn btn-secondary btn-block text-white"
                      type="submit"
                      value="Add Package"
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
export default AddPackage;
