import { useQuery } from '@tanstack/react-query';
import DashboardContainer from '../../../components/Dashboard/DashboardContainer';
import Spinner from '../../../components/Shared/Spinner';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const ViewBookings = () => {
  // const axiosSecure = useAxiosSecure();
  const axiosSecure = useAxiosSecure();

  const { data: bookings = [], isPending } = useQuery({
    queryKey: ['adminBookings'],
    queryFn: async () => {
      const res = await axiosSecure.get('/bookingsAdmin');
      // console.log(res.data);
      return res.data;
    },
  });

  if (isPending) {
    return <Spinner></Spinner>;
  }

  return (
    <div>
      <DashboardContainer>
        <div className="my-16">
          <h2 className="md:text-4xl text-2xl font-bold mb-10 text-primary text-center">
            View All Bookings
          </h2>
          <div className="w-[350px] md:w-[650px] lg:w-[850px]">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-base-content/80">
                Total Bookings: {bookings?.length}
              </h2>
            </div>
            <div className="overflow-x-auto rounded-2xl shadow-lg border border-base-300">
              <table className="table w-full bg-base-100">
                {/* head */}
                <thead className="bg-base-200 text-base-content font-bold border-b border-base-300">
                  <tr className="uppercase text-sm">
                    <th className="rounded-tl-2xl">#</th>
                    <th>Package</th>
                    <th>Tourist</th>
                    <th>Guide</th>
                    <th>Date</th>
                    <th>Price</th>
                    <th className="rounded-tr-2xl">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings?.map((booking, idx) => (
                    <tr key={booking._id} className="hover:bg-base-200/50 transition-colors border-b border-base-200 last:border-0">
                      <th className="font-medium">{idx + 1}</th>
                      <td className="font-semibold text-primary">{booking?.packageName || "Tour Package"}</td>
                      <td>
                        <div className="flex flex-col">
                          <span className="font-medium">{booking?.touristName}</span>
                          <span className="text-xs text-base-content/60">{booking?.touristEmail}</span>
                        </div>
                      </td>
                      <td>{booking?.guide || "Tour Guide"}</td>
                      <td>{booking?.tourDate
}</td>
                      <td className="font-bold">${booking?.price}</td>
                      <td>
                        <span className={`badge badge-sm font-semibold uppercase ${
                          booking?.status === 'Accepted' ? 'badge-success text-white' : 
                          booking?.status === 'Rejected' ? 'badge-error text-white' : 
                          'badge-warning'
                        }`}>
                          {booking?.status || 'In Review'}
                        </span>
                      </td>
                    </tr>
                  ))}
                  
                  {bookings.length === 0 && (
                    <tr>
                      <td colSpan="7" className="text-center py-10 text-base-content/60 italic">
                        No bookings found on the platform yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </DashboardContainer>
    </div>
  );
};

export default ViewBookings;
