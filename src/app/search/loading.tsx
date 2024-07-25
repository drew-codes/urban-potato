export default function Loading() {
  return (
    <div className="mt-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl mb-8 font-bold text-gray-900">Search Results</h1>
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
          <div>
            <h2 className="font-semibold text-lg text-gray-800">Movies</h2>
          </div>
          <div className="flex gap-4 items-center">
            <div className="relative flex items-center w-64">
              <div className="h-10 ms-2 mb-3 bg-gray-300 rounded-md animate-pulse dark:bg-gray-300 w-full"></div>
            </div>
            <div className="w-[115px]">
              <div className="h-10 ms-2 bg-gray-300 rounded-md animate-pulse dark:bg-gray-300 w-full"></div>
            </div>
          </div>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <div className="mt-8">
            <div className="h-10 ms-2 my-[14px] bg-gray-300 rounded-md animate-pulse dark:bg-gray-300 w-full"></div>
          </div>
          <div className="h-10 ms-2 my-[14px] bg-gray-300 rounded-md animate-pulse dark:bg-gray-300 w-full"></div>
          <div className="h-10 ms-2 my-[14px] bg-gray-300 rounded-md animate-pulse dark:bg-gray-300 w-full"></div>
          <div className="h-10 ms-2 my-[14px] bg-gray-300 rounded-md animate-pulse dark:bg-gray-300 w-full"></div>
        </div>
      </div>
    </div>
  );
}
