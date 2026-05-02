import { useEffect, useState } from 'react';
import Container from '../../Container';
import PackagesCard from '../../Shared/PackagesCard';
import usePackages from '../../../hooks/usePackages';
import PackagesCardSkeleton from '../../Shared/PackagesCardSkeleton';
import { FaWandMagicSparkles } from 'react-icons/fa6';

const RecommendedForYou = () => {
  const { packages, isPending } = usePackages();
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    if (packages?.length > 0) {
      // Get viewed categories from localStorage (simulated AI logic)
      const storedCategories = localStorage.getItem('viewedCategories');
      let preferredCategories = [];
      
      if (storedCategories) {
        preferredCategories = JSON.parse(storedCategories);
      }

      // Logic: Filter packages by preferred categories. If none exist, show random/popular ones.
      let filtered = [];
      
      if (preferredCategories.length > 0) {
        filtered = packages.filter(pkg => 
          preferredCategories.includes(pkg.tourType)
        );
      }

      // If we don't have enough personalized recommendations, fill with others
      if (filtered.length < 4) {
        const others = packages.filter(pkg => !filtered.find(f => f._id === pkg._id));
        // Shuffle and take remaining needed
        const shuffledOthers = [...others].sort(() => 0.5 - Math.random());
        filtered = [...filtered, ...shuffledOthers.slice(0, 4 - filtered.length)];
      }

      setRecommended(filtered.slice(0, 4));
    }
  }, [packages]);

  return (
    <div className="py-20 bg-gradient-to-b from-base-200 to-base-100">
      <Container>
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="flex items-center gap-3 text-primary mb-2">
            <FaWandMagicSparkles className="text-2xl" />
            <span className="font-bold tracking-widest uppercase text-sm">Smart Recommendations</span>
          </div>
          <h2 className="md:text-4xl text-2xl font-semibold text-base-content tracking-wide">
            Recommended For You
          </h2>
          <p className="text-gray-500 max-w-2xl mt-4">
            Based on your viewing history and preferences, we think you'll love these hand-picked destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {isPending ? (
            Array.from({ length: 4 }).map((_, i) => (
              <PackagesCardSkeleton key={i} />
            ))
          ) : (
            recommended.map(item => (
              <PackagesCard key={item._id} item={item}></PackagesCard>
            ))
          )}
        </div>
      </Container>
    </div>
  );
};

export default RecommendedForYou;
