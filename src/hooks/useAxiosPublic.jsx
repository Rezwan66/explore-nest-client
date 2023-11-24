import axios from 'axios';

const axiosPublic = axios.create({
  //   baseURL: '/packages.json',
});

const useAxiosPublic = () => {
  return axiosPublic;
};
export default useAxiosPublic;
