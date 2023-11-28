import Swal from 'sweetalert2';
import DashboardContainer from '../../../components/Dashboard/DashboardContainer';
import Spinner from '../../../components/Shared/Spinner';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useBookingsForGuide from '../../../hooks/useBookingsForGuide';
import toast from 'react-hot-toast';

const GuideAssignedTours = () => {
  const { guideBookings, isPending, refetch } = useBookingsForGuide();
  const axiosSecure = useAxiosSecure();
  //   console.log(guideBookings);
  if (isPending) {
    return <Spinner></Spinner>;
  }

  const handleClick = (_id, value) => {
    // console.log(_id, value);
    axiosSecure
      .patch(`/bookingsGuide/${_id}`, { value })
      .then(res => {
        console.log(res?.data);
        if (res?.data?.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: 'Done!',
            text: `Booking ${value}!`,
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
            My Assigned Tours{' '}
          </h2>
          <div className="w-[350px] md:w-[650px] lg:w-[750px]">
            <div className="flex justify-end items-center">
              <h2 className="text-lg font-bold">
                {/* Total Items in you Wishlist: {wishlist?.length} */}
              </h2>
            </div>
            <div className="mt-8">
              <div className="overflow-x-auto rounded-xl shadow-lg">
                <table className="table">
                  {/* head */}
                  <thead className="bg-[#f73378]">
                    <tr className="uppercase text-white">
                      <th>#</th>
                      <th>Package</th>
                      <th>Tourist Name</th>
                      <th>Tour Date</th>
                      <th>Price</th>
                      <th>Accept/Reject</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {guideBookings?.map((item, idx) => (
                      <tr key={item._id}>
                        <th>{idx + 1}</th>

                        <td>{item?.packageName}</td>
                        <td>{item?.touristName}</td>
                        <td>{item?.tourDate}</td>
                        <td>${item?.price}</td>
                        <th>
                          {item?.status === 'In Review' ? (
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() =>
                                  handleClick(item?._id, 'Accepted')
                                }
                                className="btn btn-xs text-xs uppercase btn-success text-white"
                              >
                                accept
                              </button>
                              <button
                                onClick={() =>
                                  handleClick(item?._id, 'Rejected')
                                }
                                className="btn btn-xs text-xs uppercase btn-error text-white"
                              >
                                reject
                              </button>
                            </div>
                          ) : (
                            <p
                              className={`${
                                item?.status === 'Accepted'
                                  ? 'text-green-600'
                                  : item?.status === 'Rejected'
                                  ? 'text-red-600'
                                  : ''
                              } text-xs italic font-bold ml-6`}
                            >
                              {item?.status}
                            </p>
                          )}
                        </th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </DashboardContainer>
    </div>
  );
};
export default GuideAssignedTours;
