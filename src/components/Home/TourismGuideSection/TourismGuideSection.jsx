import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Container from '../../Container';
import usePackages from '../../../hooks/usePackages';
import './TourismGuideSection.css';
import PackagesCard from '../../Shared/PackagesCard';
import { Link } from 'react-router-dom';
import useTourGuides from '../../../hooks/useTourGuides';
import GuideProfileCard from '../../Shared/GuideProfileCard';

const TourismGuideSection = () => {
  const { packages } = usePackages();
  const { tourGuides } = useTourGuides();
  // console.log(packages, tourGuides);
  return (
    <div className="my-14">
      <Container>
        <h2 className="md:text-4xl text-2xl font-semibold mb-10 text-error text-center">
          {' '}
          Follow our Tour Guide{' '}
        </h2>
      </Container>
      <Tabs>
        <TabList className={`text-center`}>
          <Tab>Overview</Tab>
          <Tab>Our Packages</Tab>
          <Tab>Meet Our Tour Guides</Tab>
        </TabList>

        <TabPanel>
          <div className="video-tab bg-fixed py-6 mt-2">
            <Container>
              <div className="flex justify-center items-center gap-6 flex-col md:flex-row mb-6">
                <iframe
                  // width="560"
                  // height="315"
                  className="rounded-xl lg:h-72 md:w-[520px] h-44 w-80"
                  src="https://www.youtube.com/embed/JLjvEYMBGzQ?si=AsnEaHAWu-gV1DZU"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <iframe
                  className="rounded-xl lg:h-72 md:w-[520px] h-44 w-80"
                  src="https://www.youtube.com/embed/4FrPZoofdBQ?si=VSCNUy0g-jT14BZO"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex justify-center items-center gap-6 flex-col md:flex-row">
                <iframe
                  className="rounded-xl lg:h-72 md:w-[520px] h-44 w-80"
                  src="https://www.youtube.com/embed/sFoJBWkDnO8?si=jkJMgD9tPvP2CiXW"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <iframe
                  className="rounded-xl lg:h-72 md:w-[520px] h-44 w-80"
                  src="https://www.youtube.com/embed/V2jk8PclZwg?si=KOo178_icHMcDaAl"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </Container>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="video-tab bg-fixed py-6 mt-2">
            <Container>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {packages?.slice(0, 3).map(item => (
                  <PackagesCard key={item._id} item={item}></PackagesCard>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Link to="/allPackages">
                  <button className="btn btn-wide btn-secondary">
                    Show All
                  </button>
                </Link>
              </div>
            </Container>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="video-tab bg-fixed py-20 mt-2">
            <Container>
              <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {tourGuides?.map(guide => (
                  <GuideProfileCard
                    key={guide._id}
                    guide={guide}
                  ></GuideProfileCard>
                ))}
              </div>
            </Container>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};
export default TourismGuideSection;
