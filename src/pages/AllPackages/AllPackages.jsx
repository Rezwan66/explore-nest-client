import Container from '../../components/Container';
import PackagesCard from '../../components/Shared/PackagesCard';
import SharedBanner from '../../components/Shared/SharedBanner';
import usePackages from '../../hooks/usePackages';

const AllPackages = () => {
  const { packages } = usePackages();
  //   const { tourGuides } = useTourGuides();
  return (
    <div>
      <SharedBanner></SharedBanner>

      <div className="my-14">
        <Container>
          <h2 className="md:text-4xl text-2xl font-semibold mb-10 text-error text-center">
            {' '}
            All Our Packages{' '}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {packages?.map(item => (
              <PackagesCard key={item._id} item={item}></PackagesCard>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};
export default AllPackages;
