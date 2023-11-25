import { Link, useParams } from 'react-router-dom';
import Container from '../../components/Container';
import PackagesCard from '../../components/Shared/PackagesCard';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import NoDataAnimation from '../../components/Shared/NoDataAnimation';
import Spinner from '../../components/Shared/Spinner';

const PackageCategory = () => {
  const { category } = useParams();
  const axiosPublic = useAxiosPublic();
  //   console.log(category);

  const {
    data: packages = [],
    isPending,
    isLoading,
  } = useQuery({
    queryKey: ['packages'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/allPackages?category=${category}`);
      return res.data;
    },
  });

  if (isPending || isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div>
      <div className="my-14">
        <Container>
          <h2 className="md:text-4xl text-2xl font-semibold mb-10 text-error text-center">
            {' '}
            Package Type: {category}{' '}
          </h2>
          {packages?.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {packages?.map(item => (
                <PackagesCard key={item._id} item={item}></PackagesCard>
              ))}
            </div>
          ) : (
            <div className="mt-24 ">
              <h2 className="text-[#f50057] italic text-center mb-6">
                Sorry, no &apos;{category}&apos; package available at the
                moment. Please try again later.
              </h2>
              <NoDataAnimation></NoDataAnimation>
            </div>
          )}
          <div className="flex justify-center mt-12 mb-60">
            <Link to="/allPackages">
              <button className="btn btn-wide btn-secondary">
                Show All Packages
              </button>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default PackageCategory;
