import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Container from '../../components/Container';
import PackagesCard from '../../components/Shared/PackagesCard';
import SharedBanner from '../../components/Shared/SharedBanner';
import usePackages from '../../hooks/usePackages';
import PackagesCardSkeleton from '../../components/Shared/PackagesCardSkeleton';
import { FaSearch, FaFilter, FaSortAmountDown } from 'react-icons/fa';

const AllPackages = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';

  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);

  // Update URL when category changes
  useEffect(() => {
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  }, [category, setSearchParams]);

  const { packages, isPending, totalPages } = usePackages({
    search,
    category,
    sort,
    page,
    limit: 8
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchInput);
    setPage(1);
  };

  const handleReset = () => {
    setSearch('');
    setSearchInput('');
    setCategory('');
    setSort('');
    setPage(1);
  };

  return (
    <div>
      <SharedBanner></SharedBanner>

      <div className="my-14">
        <Container>
          <div className="flex flex-col items-center mb-10">
            <h2 className="md:text-4xl text-2xl font-semibold text-primary text-center tracking-wide mb-2">
              Explore All Packages
            </h2>
            <p className="text-gray-500 max-w-2xl text-center">
              Find your perfect getaway from our wide selection of premium travel experiences.
            </p>
          </div>

          {/* Controls Section */}
          <div className="bg-base-200 p-4 rounded-2xl mb-8 flex flex-col lg:flex-row gap-4 items-center justify-between border border-base-300 shadow-sm">
            {/* Search */}
            <form onSubmit={handleSearch} className="w-full lg:w-1/3 relative">
              <input
                type="text"
                placeholder="Search destinations, titles..."
                className="input input-bordered w-full pr-12 rounded-xl"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button 
                type="submit" 
                className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-ghost btn-sm btn-circle text-primary"
              >
                <FaSearch />
              </button>
            </form>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              {/* Filter */}
              <div className="relative w-full sm:w-auto">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
                  <FaFilter />
                </div>
                <select
                  className="select select-bordered w-full sm:w-48 pl-10 rounded-xl"
                  value={category}
                  onChange={(e) => { setCategory(e.target.value); setPage(1); }}
                >
                  <option value="">All Types</option>
                  <option value="Sports">Sports</option>
                  <option value="Beach">Beach</option>
                  <option value="Hiking">Hiking</option>
                  <option value="Countryside">Countryside</option>
                  <option value="Wildlife">Wildlife</option>
                  <option value="Islands">Islands</option>
                  <option value="Castles">Castles</option>
                  <option value="Desert">Desert</option>
                  <option value="Scuba Diving">Scuba Diving</option>
                  <option value="Camping">Camping</option>
                </select>
              </div>

              {/* Sort */}
              <div className="relative w-full sm:w-auto">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
                  <FaSortAmountDown />
                </div>
                <select
                  className="select select-bordered w-full sm:w-48 pl-10 rounded-xl"
                  value={sort}
                  onChange={(e) => { setSort(e.target.value); setPage(1); }}
                >
                  <option value="">Sort By</option>
                  <option value="price_asc">Price: Low to High</option>
                  <option value="price_desc">Price: High to Low</option>
                </select>
              </div>

              {/* Reset */}
              <button 
                onClick={handleReset}
                className="btn btn-outline btn-error rounded-xl w-full sm:w-auto"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {isPending ? (
              Array.from({ length: 8 }).map((_, i) => (
                <PackagesCardSkeleton key={i} />
              ))
            ) : packages?.length > 0 ? (
              packages.map(item => (
                <PackagesCard key={item._id} item={item}></PackagesCard>
              ))
            ) : (
              <div className="col-span-1 md:col-span-2 lg:col-span-4 text-center py-20 text-gray-500 bg-base-200 rounded-2xl">
                <h3 className="text-2xl font-bold mb-2">No Packages Found</h3>
                <p>Try adjusting your search or filters.</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {!isPending && totalPages > 1 && (
            <div className="flex justify-center mt-8">
              <div className="join shadow-md">
                <button
                  className="join-item btn bg-base-100 hover:bg-primary hover:text-white"
                  onClick={() => setPage(Math.max(1, page - 1))}
                  disabled={page === 1}
                >
                  «
                </button>
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    className={`join-item btn ${page === idx + 1 ? 'btn-primary text-white' : 'bg-base-100 hover:bg-primary/20'}`}
                    onClick={() => setPage(idx + 1)}
                  >
                    {idx + 1}
                  </button>
                ))}
                <button
                  className="join-item btn bg-base-100 hover:bg-primary hover:text-white"
                  onClick={() => setPage(Math.min(totalPages, page + 1))}
                  disabled={page === totalPages}
                >
                  »
                </button>
              </div>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

export default AllPackages;
