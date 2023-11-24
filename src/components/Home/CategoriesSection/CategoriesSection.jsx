import { categories } from './CategoriesData';
import Container from '../../Container';
import './CategoriesSection.css';
import CategoryCard from './CategoryCard';

const CategoriesSection = () => {
  console.log(categories);
  return (
    <div className="my-14">
      <Container>
        <h2 className="md:text-4xl text-2xl font-semibold mb-10 text-error text-center">
          {' '}
          Browse by Tour Types{' '}
        </h2>
      </Container>
      <div className="cat-tab bg-fixed py-40 mt-2">
        <Container>
          <div className="flex items-center justify-between gap-6 overflow-x-auto py-6">
            {categories?.map(item => (
              <CategoryCard
                key={item.name}
                name={item.name}
                symbol={item.symbol}
              ></CategoryCard>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};
export default CategoriesSection;
