import Banner from '../../components/Home/Banner';
import CategoriesSection from '../../components/Home/CategoriesSection/CategoriesSection';
import TourismGuideSection from '../../components/Home/TourismGuideSection/TourismGuideSection';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TourismGuideSection></TourismGuideSection>
      <CategoriesSection></CategoriesSection>
    </div>
  );
};
export default Home;
