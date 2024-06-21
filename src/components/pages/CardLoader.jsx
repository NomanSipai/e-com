const CardLoader = () => {
  return (
    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl bg-gray-200 animate-pulse"></div>
      <div className="absolute top-0 left-0 m-2 rounded-full bg-gray-300 px-2 py-1 text-center text-sm font-medium text-gray-300 capitalize animate-pulse"></div>
      <div className="mt-4 px-5 pb-5">
        <div className="w-3/4 h-6 bg-gray-200 animate-pulse"></div>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <div className="w-1/3 h-8 bg-gray-200 animate-pulse"></div>
          <div className="flex items-center">
            <div className="w-10 h-4 bg-gray-200 animate-pulse rounded-full"></div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-10 bg-gray-200 rounded-md animate-pulse"></div>
      </div>
    </div>
  );
};

export default CardLoader;
