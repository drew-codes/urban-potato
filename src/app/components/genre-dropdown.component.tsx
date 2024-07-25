import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { GENRES_QUERY } from "../graphql/genres.query.gql";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GenreWithoutMovies } from "@/__generated__/graphql";

export const GenreDropdown = ({
  onChange,
}: {
  onChange: (id: string | null) => void;
}) => {
  const [currentGenre, setCurrentGenre] = useState<GenreWithoutMovies | null>(
    null
  );
  const { data } = useQuery(GENRES_QUERY);

  const genres = data?.genres?.nodes || [];

  const handleGenreClick = (genre: GenreWithoutMovies | null) => {
    onChange(genre?.title || null);
    setCurrentGenre(genre);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {currentGenre?.title || "All Genres"}
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 h-5 w-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in max-h-60 overflow-y-auto"
      >
        <div className="py-1">
          <MenuItem>
            <button
              onClick={() => handleGenreClick(null)}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              All Genres
            </button>
          </MenuItem>
          {genres.map((genre: GenreWithoutMovies) => (
            <MenuItem key={genre.id}>
              <button
                onClick={() => handleGenreClick(genre)}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                {genre.title}
              </button>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
};
