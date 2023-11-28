import DashboardContainer from '../../../components/Dashboard/DashboardContainer';
import Spinner from '../../../components/Shared/Spinner';
import useAllUsers from '../../../hooks/useAllUsers';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import noPic from '../../../assets/images/icons8-test-account-64.png';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const ManageUsers = () => {
  const { users, refetch, isPending } = useAllUsers();
  const axiosSecure = useAxiosSecure();

  if (isPending) {
    return <Spinner></Spinner>;
  }

  const handleMakeAdmin = user => {
    // console.log(user);
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to make ${user?.name} an Admin?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, make Admin!',
    }).then(result => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/users/admin/${user._id}`)
          .then(res => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                title: 'Done!',
                text: `${user.name} is an Admin now!`,
                icon: 'success',
              });
            }
          })
          .catch(err => toast.error(err.message));
      }
    });
  };
  const handleMakeGuide = user => {
    // console.log(user);
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to make ${user?.name} a Tour Guide?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, make Guide!',
    }).then(result => {
      if (result.isConfirmed) {
        const guide = {
          contact: user?.email,
          name: user?.name,
          photo:
            user?.photo ||
            'https://i.ibb.co/ww0mFQx/icons8-test-account-64.png',
        };
        axiosSecure
          .patch(`/users/guide/${user._id}`, guide)
          .then(res => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                title: 'Done!',
                text: `${user.name} is a Guide now!`,
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
            Manage Users{' '}
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
                      <th>Photo</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Change role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {users?.map((item, idx) => (
                      <tr key={item._id}>
                        <th>{idx + 1}</th>

                        {/* <td>{item?.photo}</td> */}
                        <td>
                          <div className="avatar">
                            <div className="mask mask-circle w-8 h-8">
                              <img
                                src={item?.photo || noPic}
                                className="object-cover"
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </td>
                        <td>{item?.name}</td>
                        <td>{item?.email}</td>
                        <td>{item?.role || 'Tourist'}</td>
                        <th>
                          <div className="flex items-center gap-2">
                            {item?.role === 'Guide' ||
                            item?.role === 'Admin' ? (
                              <button
                                disabled
                                className="btn btn-xs text-xs uppercase btn-primary text-white"
                              >
                                guide
                              </button>
                            ) : (
                              <button
                                onClick={() => handleMakeGuide(item)}
                                className="btn btn-xs text-xs uppercase btn-primary text-white"
                              >
                                guide
                              </button>
                            )}
                            {item?.role === 'Admin' ||
                            item?.role === 'Guide' ? (
                              <button
                                // onClick={() => handleMakeAdmin(item)}
                                disabled
                                className="btn btn-xs text-xs uppercase btn-error text-white"
                              >
                                admin
                              </button>
                            ) : (
                              <button
                                onClick={() => handleMakeAdmin(item)}
                                className="btn btn-xs text-xs uppercase btn-error text-white"
                              >
                                admin
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
export default ManageUsers;
