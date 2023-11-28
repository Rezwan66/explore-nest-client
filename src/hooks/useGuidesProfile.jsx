import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useGuidesProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: tourGuideProfile = {},
    isPending,
    refetch,
  } = useQuery({
    queryKey: ['tourGuide'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/guidesProfile?email=${user?.email}`);
      return res.data;
    },
  });
  return { tourGuideProfile, isPending, refetch };
};
export default useGuidesProfile;
