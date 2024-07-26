"use client";
import { GenreDropdown } from "./genre-dropdown.component";
import { MOVIES_QUERY } from "../graphql/movies.query.gql";
import { useQuery, useSuspenseQuery } from "@apollo/client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { use, useCallback, useEffect, useState } from "react";
import {
  Movie,
  MoviesQuery,
  MoviesQueryVariables,
} from "@/__generated__/graphql";

export const SearchResults = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q");
  const [searchInputValue, setSearchInputValue] = useState(searchQuery);
  const router = useRouter();
  const pathname = usePathname();
  const [currPage, setCurrPage] = useState(1);
  const [genreFilter, setGenreFilter] = useState<string | null>(null);
  const RESULTS_PER_PAGE = 15;

  const { data } = useSuspenseQuery<MoviesQuery, MoviesQueryVariables>(
    MOVIES_QUERY,
    {
      variables: {
        where: {
          search: searchQuery,
          genre: genreFilter,
        },
        pagination: {
          page: currPage,
          perPage: RESULTS_PER_PAGE,
        },
      },
    }
  );

  const { page, totalPages } = data?.movies?.pagination || {};

  const hasNextPage = (page ?? 0) < (totalPages ?? 0);
  const hasPreviousPage = (page ?? 0) > 1;

  const movies = data?.movies?.nodes || [];

  const handlePrevClick = () => {
    setCurrPage((prevPage) => prevPage - 1);
  };

  const handleNextClick = () => {
    setCurrPage((prevPage) => prevPage + 1);
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    const currentSearchParams = new URLSearchParams(
      Array.from(searchParams.entries())
    );
    setSearchInputValue(searchValue);

    if (searchValue) {
      currentSearchParams.set("q", searchValue);
    } else {
      currentSearchParams.delete("q");
    }

    router.push(`${pathname}?${currentSearchParams.toString()}`);
  };

  const handleDropdownChange = useCallback((genre: string | null) => {
    setCurrPage(1);
    setGenreFilter(genre);
  }, []);

  const updateRecentMoves = useCallback((id: string | null | undefined) => {
    if (!id) return;
    const recentMovies = JSON.parse(
      localStorage.getItem("recentMovies") || "[]"
    );
    recentMovies.push(id);
    localStorage.setItem("recentMovies", JSON.stringify(recentMovies));
  }, []);

  return (
    <>
      <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
        <div>
          <h2 className="font-semibold text-lg text-gray-800">Movies</h2>
        </div>
        <div className="flex gap-4 items-center">
          <div className="relative flex items-center w-64">
            <input
              id="search"
              name="search"
              value={searchInputValue || ""}
              onChange={handleSearchInputChange}
              type="text"
              className="block w-full rounded-md border-0 py-2 pl-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <div className="absolute inset-y-0 left-0 flex py-1.5 pl-1.5">
              <kbd className="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </kbd>
            </div>
          </div>
          <div>
            <GenreDropdown onChange={handleDropdownChange} />
          </div>
        </div>
      </div>
      <div className="px-4 py-5 sm:p-6">
        {movies.length === 0 ? (
          <div className="flex items-center justify-center">
            <p className="text-gray-500">No movies found</p>
          </div>
        ) : (
          <div className="mt-8 flow-root">
            <div className="overflow-x-auto min-h-14">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Movie Title
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Genres
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Rating
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Year Released
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                    >
                      <span className="sr-only">View Details</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {movies.map((movie: Movie) => (
                    <tr key={movie.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        {movie.title}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {movie?.genres
                          ?.map((genre) => genre?.title)
                          .join(", ") || "-"}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {movie.rating || "-"}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {movie.datePublished || "-"}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <Link
                          href={`/movie-details/${movie.id}`}
                          onClick={() => updateRecentMoves(movie?.id)}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          View Details
                          <span className="sr-only">, {movie.title}</span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
      {movies.length > 0 && (
        <div className="py-4">
          <nav
            aria-label="Pagination"
            className="flex items-center justify-between bg-white px-4 py-3 sm:px-6"
          >
            <div className="hidden sm:block">
              <p className="text-sm text-gray-700">
                Showing page <span className="font-medium">{currPage}</span> of{" "}
                <span className="font-medium">{totalPages}</span>
              </p>
            </div>
            <div className="flex flex-1 justify-between sm:justify-end">
              <button
                disabled={!hasPreviousPage}
                onClick={handlePrevClick}
                className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 disabled:text-gray-400 disabled:hover:bg-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
              >
                Previous
              </button>
              <button
                disabled={!hasNextPage}
                onClick={handleNextClick}
                className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 disabled:text-gray-400 disabled:hover:bg-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
              >
                Next
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
