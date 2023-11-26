import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useWishList = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: wishlist = [],
    refetch,
    isPending,
  } = useQuery({
    queryKey: ['wishlist', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/wishlist?email=${user?.email}`);
      return res.data;
    },
  });
  return { wishlist, refetch, isPending };
};
export default useWishList;
