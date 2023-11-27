import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useGuide = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isGuide, isPending: isGuideLoading } = useQuery({
    queryKey: ['isGuide', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/role/${user?.email}`);
      // console.log(res.data);
      return res.data?.guide;
    },
  });
  return { isGuide, isGuideLoading };
};
export default useGuide;
