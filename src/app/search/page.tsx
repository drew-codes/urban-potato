import { SearchResults } from "../components/search-results.component";

export default function SearchPage() {
  return (
    <div className="mt-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl mb-8 font-bold text-gray-900">Search Results</h1>
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
        <SearchResults />
      </div>
    </div>
  );
}
