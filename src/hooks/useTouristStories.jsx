import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useTouristStories = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: stories = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ['stories'],
    queryFn: async () => {
      const res = await axiosPublic.get('/touristStories.json');
      return res.data;
    },
  });
  return { stories, isPending, refetch };
};
export default useTouristStories;
