import { FaEye, FaTrashAlt } from 'react-icons/fa';
import DashboardContainer from '../../../components/Dashboard/DashboardContainer';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useWishList from '../../../hooks/useWishList';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import Spinner from '../../../components/Shared/Spinner';

const UserWishlist = () => {
  const { wishlist, refetch, isPending } = useWishList();
  const axiosSecure = useAxiosSecure();

  if (isPending) {
    return <Spinner></Spinner>;
  }

  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to remove this product from wishlist?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/wishlist/${_id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: 'Deleted!',
                text: 'The package has been removed.',
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
            My Wishlist{' '}
          </h2>
          <div className="w-[350px] md:w-[650px] lg:w-[750px]">
            <div className="flex justify-end items-center">
              <h2 className="text-lg font-bold">
                Total Items in you Wishlist: {wishlist?.length}
              </h2>
            </div>
            <div className="mt-8">
              <div className="overflow-x-auto rounded-xl shadow-lg">
                <table className="table">
                  {/* head */}
                  <thead className="bg-[#f73378]">
                    <tr className="uppercase text-white">
                      <th>#</th>
                      <th>Photo</th>
                      <th>Title</th>
                      <th>Tour Type</th>
                      <th>Price</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {wishlist?.map((item, idx) => (
                      <tr key={item._id}>
                        <th>{idx + 1}</th>

                        {/* <td>{item?.photo}</td> */}
                        <td>
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={item?.photo}
                                className="object-cover"
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </td>
                        <td>{item?.tripTitle}</td>
                        <td>{item?.tourType}</td>
                        <td>${item?.price}</td>
                        <th>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleDelete(item._id)}
                              className="btn btn-xs btn-error text-white"
                            >
                              <FaTrashAlt></FaTrashAlt>
                            </button>

                            {/* view product btn */}
                            <Link
                              className="group relative"
                              to={`/package/${item?.package_id}`}
                            >
                              <button className="btn btn-xs uppercase btn-primary text-white">
                                <FaEye></FaEye>
                              </button>
                              <p className="hidden text-xs group-hover:block bg-pink-200 text-gray-800 py-1 px-2 rounded absolute -top-11 left-7 transform -translate-x-1/2 z-50">
                                View package
                              </p>
                            </Link>
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
export default UserWishlist;
