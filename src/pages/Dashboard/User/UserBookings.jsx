import DashboardContainer from '../../../components/Dashboard/DashboardContainer';
import useBookings from '../../../hooks/useBookings';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';
import { MdCancel } from 'react-icons/md';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import Spinner from '../../../components/Shared/Spinner';

const UserBookings = () => {
  const { bookings, refetch, isPending } = useBookings();
  const axiosSecure = useAxiosSecure();
  console.log(bookings);
  const totalPrice = bookings?.reduce((acc, item) => acc + item.price, 0);
  //   console.log(totalPrice);

  if (isPending) {
    return <Spinner></Spinner>;
  }

  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to cancel this booking?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, cancel it!',
    }).then(result => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/bookings/${_id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: 'Cancelled!',
                text: 'Your booking has been cancelled.',
                icon: 'success',
              });
            }
          })
          .catch(err => toast.error(err.message));
      }
    });
  };

  return (
    <div>
      <DashboardContainer>
        <div className="my-16">
          <h2 className="md:text-4xl text-2xl font-semibold mb-10 text-error text-center">
            {' '}
            My Bookings{' '}
          </h2>
          <div className="w-[350px] md:w-[650px] lg:w-[750px]">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">
                Total Items: {bookings?.length}
              </h2>
              <h2 className="text-lg font-bold">Total Price: ${totalPrice}</h2>
              {/* top buttons */}
              {/* <div className="flex items-center gap-2">
                {bookings.length >= 3 ? (
                  <button className="btn btn-sm btn-secondary">Apply</button>
                ) : (
                  <button disabled className="btn btn-sm btn-secondary">
                    Apply
                  </button>
                )}
                {bookings.length ? (
                  <Link to="/dashboard/payment">
                    <button className="btn btn-sm btn-primary text-white">
                      pay
                    </button>
                  </Link>
                ) : (
                  <button
                    disabled
                    className="btn btn-sm btn-primary text-white"
                  >
                    pay
                  </button>
                )}
              </div> */}
            </div>
            <div className="mt-8">
              <div className="overflow-x-auto rounded-xl shadow-lg">
                <table className="table">
                  {/* head */}
                  <thead className="bg-[#f73378]">
                    <tr className="uppercase text-white">
                      <th>#</th>
                      <th>Package Name</th>
                      <th>Guide</th>
                      <th>Tour Date</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {bookings?.map((item, idx) => (
                      <tr key={item._id}>
                        <th>{idx + 1}</th>

                        <td>{item?.packageName || 'Not Given'}</td>
                        <td>{item?.guide}</td>
                        <td>{item?.tourDate}</td>
                        <td>${item?.price}</td>
                        <td>{item?.status}</td>
                        <th>
                          <div className="flex items-center gap-2">
                            {item?.status === 'In Review' ? (
                              <button
                                onClick={() => handleDelete(item._id)}
                                className="btn btn-xs text-lg btn-error text-white"
                              >
                                <MdCancel></MdCancel>
                              </button>
                            ) : (
                              <button
                                disabled
                                className="btn btn-xs text-lg btn-error text-white"
                              >
                                <MdCancel></MdCancel>
                              </button>
                            )}
                            {bookings.length >= 3 ? (
                              <button className="btn btn-xs uppercase btn-secondary">
                                Apply
                              </button>
                            ) : (
                              <button
                                disabled
                                className="btn btn-xs uppercase btn-secondary"
                              >
                                Apply
                              </button>
                            )}
                            {item?.status === 'Accepted' ? (
                              <Link to="/dashboard/payment">
                                <button className="btn btn-xs uppercase btn-primary text-white">
                                  pay
                                </button>
                              </Link>
                            ) : (
                              <button
                                disabled
                                className="btn btn-xs uppercase btn-primary text-white"
                              >
                                pay
                              </button>
                            )}
                          </div>
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
export default UserBookings;
