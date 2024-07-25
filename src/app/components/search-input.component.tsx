"use client";
import { useRouter } from "next/navigation";
import { KeyboardEvent } from "react";

export const SearchInput = () => {
  const router = useRouter();

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const search = formData.get("search");
    router.push(`/search?q=${search}`);
  };

  return (
    <div className="relative mt-2 flex items-center w-[30rem]">
      <form onSubmit={handleSearchSubmit} className="w-full">
        <input
          name="search"
          required
          autoComplete="off"
          placeholder="Search movies..."
          type="text"
          className="block w-full rounded-md border-0 py-3 pl-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </form>
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
  );
};
