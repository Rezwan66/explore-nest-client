import { useLoaderData } from 'react-router-dom';
import Container from '../../components/Container';
import { FaQuoteLeft } from 'react-icons/fa';
import CustomizedAccordions from '../../components/AllPackages/CustomizedAccordions';
import useTourGuides from '../../hooks/useTourGuides';
import GuideProfileCard from '../../components/Shared/GuideProfileCard';
import './PackageDetails.css';

const PackageDetails = () => {
  const loadedPackage = useLoaderData();
  const { tourGuides } = useTourGuides();
  //   console.log(Object.keys(loadedPackage).join(','));

  const { _id, photo, tourType, tripTitle, price, gallery, about, tourPlan } =
    loadedPackage || {};

  return (
    <div>
      <div className="my-14">
        <Container>
          <h2 className="md:text-4xl text-2xl font-semibold mb-10 text-error text-center">
            {tripTitle}
          </h2>
          {/* gallery section */}
          <div className="grid gap-4">
            <div>
              <img
                className="lg:h-96 md:h-72 h-52 w-full rounded-lg object-cover"
                src={photo}
                alt=""
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {gallery?.map((item, idx) => (
                <div key={idx}>
                  <img
                    className="lg:h-40 md:h-28 h-14 w-full rounded-lg object-cover"
                    src={item}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
          {/* about */}
          <h2 className="md:text-xl text-sm font-medium italic my-10 text-slate-600">
            <FaQuoteLeft></FaQuoteLeft>
            {about}
          </h2>
          {/* tour plan */}
          <div className="my-10">
            {/* mui accordion */}
            <h2 className="md:text-2xl text-base text-[#f50057] tracking-widest font-bold mb-6">
              Trip Itinerary:
            </h2>
            <CustomizedAccordions tourPlan={tourPlan}></CustomizedAccordions>
          </div>
        </Container>
        {/* tour guides */}
        <div className="guide-bg bg-fixed my-10 py-20">
          <Container>
            <h2 className="md:text-3xl text-base text-white italic text-center tracking-widest font-bold mb-6">
              Our Guides:
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {tourGuides?.map(guide => (
                <GuideProfileCard
                  key={guide._id}
                  guide={guide}
                ></GuideProfileCard>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};
export default PackageDetails;
