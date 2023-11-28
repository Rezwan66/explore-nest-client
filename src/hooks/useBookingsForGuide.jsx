import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useBookingsForGuide = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: guideBookings = [],
    refetch,
    isPending,
  } = useQuery({
    queryKey: ['guideBookings', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookingsGuide?email=${user?.email}`);
      return res.data;
    },
  });
  return { guideBookings, refetch, isPending };
};
export default useBookingsForGuide;
