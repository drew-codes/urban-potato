export default function Loading() {
  return (
    <div className="min-h-full">
      <main className="py-10">
        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2 lg:col-start-1">
            <section aria-labelledby="applicant-information-title">
              <div className="bg-white shadow sm:rounded-lg">
                <div className="py-5">
                  <div className="mx-auto max-w-3xl px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
                    <div className="flex space-x-5">
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="h-[250px] w-[160px] ms-2 mb-3 bg-gray-300 rounded-md animate-pulse dark:bg-gray-300"></div>
                        </div>
                      </div>
                      <div>
                        <div className="h-8 ms-2 mb-3 bg-gray-300 rounded-md animate-pulse dark:bg-gray-300 w-72"></div>

                        <div className="flex items-center gap-2">
                          <div className="h-8 ms-2 mb-3 bg-gray-300 rounded-md animate-pulse dark:bg-gray-300 w-20"></div>
                          <span aria-hidden="true">&middot;</span>
                          <div className="h-8 ms-2 mb-3 bg-gray-300 rounded-md animate-pulse dark:bg-gray-300 w-20"></div>
                        </div>
                        <div className="mt-4">
                          <div className="h-8 ms-2 mb-3 bg-gray-300 rounded-md animate-pulse dark:bg-gray-300 w-96"></div>
                        </div>
                      </div>
                      <div className="w-40">
                        <div className="h-8 ms-2 mb-3 bg-gray-300 rounded-md animate-pulse dark:bg-gray-300 w-20"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <div className="h-8 ms-2 mb-3 bg-gray-300 rounded-md animate-pulse dark:bg-gray-300 w-20"></div>
                    </div>
                    <div className="sm:col-span-1">
                      <div className="h-8 ms-2 mb-3 bg-gray-300 rounded-md animate-pulse dark:bg-gray-300 w-20"></div>
                    </div>
                    <div className="sm:col-span-1">
                      <div className="h-8 ms-2 mb-3 bg-gray-300 rounded-md animate-pulse dark:bg-gray-300 w-20"></div>
                    </div>
                    <div className="sm:col-span-1">
                      <div className="h-8 ms-2 mb-3 bg-gray-300 rounded-md animate-pulse dark:bg-gray-300 w-20"></div>
                    </div>
                    <div className="sm:col-span-1">
                      <div className="h-8 ms-2 mb-3 bg-gray-300 rounded-md animate-pulse dark:bg-gray-300 w-20"></div>
                    </div>
                  </dl>
                </div>
              </div>
            </section>
          </div>

          <section className="lg:col-span-1 lg:col-start-3">
            <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
              <h2 className="text-lg font-medium text-gray-900">Movie Bot</h2>
              <div className="mt-6">
                <div className="h-[550px] ms-2 mb-3 bg-gray-300 rounded-md animate-pulse dark:bg-gray-300"></div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
