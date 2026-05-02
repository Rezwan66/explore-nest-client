import Banner from '../../components/Home/Banner';
import FeaturesSection from '../../components/Home/FeaturesSection/FeaturesSection';
import CategoriesSection from '../../components/Home/CategoriesSection/CategoriesSection';
import RecommendedForYou from '../../components/Home/RecommendedForYou/RecommendedForYou';
import TourismGuideSection from '../../components/Home/TourismGuideSection/TourismGuideSection';
import TouristStorySection from '../../components/Home/TouristStorySection/TouristStorySection';
import StatisticsSection from '../../components/Home/StatisticsSection/StatisticsSection';
import TestimonialsSection from '../../components/Home/TestimonialsSection/TestimonialsSection';
import FAQSection from '../../components/Home/FAQSection/FAQSection';
import NewsletterSection from '../../components/Home/NewsletterSection/NewsletterSection';
import CTASection from '../../components/Home/CTASection/CTASection';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <RecommendedForYou />
      <FeaturesSection />
      <CategoriesSection></CategoriesSection>
      <TourismGuideSection></TourismGuideSection>
      <StatisticsSection />
      <TouristStorySection></TouristStorySection>
      <TestimonialsSection />
      <FAQSection />
      <NewsletterSection />
      <CTASection />
    </div>
  );
};
export default Home;
