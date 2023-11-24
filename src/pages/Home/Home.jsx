import Banner from '../../components/Home/Banner';
import CategoriesSection from '../../components/Home/CategoriesSection/CategoriesSection';
import TourismGuideSection from '../../components/Home/TourismGuideSection/TourismGuideSection';
import TouristStorySection from '../../components/Home/TouristStorySection/TouristStorySection';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TourismGuideSection></TourismGuideSection>
      <CategoriesSection></CategoriesSection>
      <TouristStorySection></TouristStorySection>
    </div>
  );
};
export default Home;
