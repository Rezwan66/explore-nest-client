import { Link } from 'react-router-dom';

const CategoryCard = ({ name, symbol: Symbol }) => {
  return (
    <Link to={`/packages/${name}`}>
      <div className="group">
        <div className="flex flex-col items-center w-24 h-24 rounded-full glass justify-center gap-2 text-white  transition cursor-pointer">
          <div className="flex items-center rounded-full">
            <Symbol size={26} />
          </div>

          <h2 className="text-sm font-medium text-center group-hover:scale-110">
            {name}
          </h2>
        </div>
      </div>
    </Link>
  );
};
export default CategoryCard;
