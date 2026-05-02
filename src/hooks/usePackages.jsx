import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const usePackages = ({ search = '', category = '', minPrice = '', maxPrice = '', sort = '', page = 1, limit = 8 } = {}) => {
  const axiosPublic = useAxiosPublic();
  
  // Construct query params
  const params = new URLSearchParams();
  if (search) params.append('search', search);
  if (category) params.append('category', category);
  if (minPrice) params.append('minPrice', minPrice);
  if (maxPrice) params.append('maxPrice', maxPrice);
  if (sort) params.append('sort', sort);
  if (page) params.append('page', page);
  if (limit) params.append('limit', limit);

  const {
    data = { packages: [], totalPages: 1, currentPage: 1 },
    isPending,
    refetch,
  } = useQuery({
    queryKey: ['packages', search, category, minPrice, maxPrice, sort, page, limit],
    queryFn: async () => {
      const res = await axiosPublic.get(`/allPackages?${params.toString()}`);
      return res.data;
    },
  });
  
  return { 
    packages: data.packages || data, 
    totalPages: data.totalPages || 1, 
    currentPage: data.currentPage || 1,
    isPending, 
    refetch 
  };
};
export default usePackages;
