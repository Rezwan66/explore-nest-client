import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useTourGuides = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: tourGuides = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ['tourGuides'],
    queryFn: async () => {
      const res = await axiosPublic.get('/guides');
      return res.data;
    },
  });
  return { tourGuides, isPending, refetch };
};
export default useTourGuides;
