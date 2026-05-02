const PackagesCardSkeleton = () => {
  return (
    <div className="group relative flex w-full flex-col h-full rounded-2xl bg-base-100 border border-base-200 shadow-md animate-pulse">
      <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-gray-300 dark:bg-gray-700 h-60">
        {/* Image skeleton */}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <div className="rounded-full bg-gray-300 dark:bg-gray-700 h-6 w-20"></div>
          <div className="h-8 w-16 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>
        
        <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
        <div className="h-6 w-1/2 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
        
        <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded mb-2 mt-auto"></div>
        <div className="h-4 w-5/6 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>

        <div className="w-full h-12 bg-gray-300 dark:bg-gray-700 rounded-xl mt-auto"></div>
      </div>
    </div>
  );
};

export default PackagesCardSkeleton;
