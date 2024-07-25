import { Features } from "./components/features.component";
import { RecentMovies } from "./components/recent-movies.component";
import { SearchInput } from "./components/search-input.component";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="flex mt-48">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-8">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              CheapFlix
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Just like Netflix, but you have to use your imagination.
            </p>
          </div>
          <div className="flex justify-center max-w-3xl">
            <SearchInput />
          </div>
        </div>
      </div>
      <RecentMovies />
      <Features />
    </div>
  );
}
