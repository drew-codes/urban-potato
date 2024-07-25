"use client";

import { useSuspenseQuery } from "@apollo/client";
import { MOVIE_BY_ID_QUERY } from "../graphql/movie-by-id.query.gql";
import {
  Movie,
  MovieByIdQuery,
  MovieByIdQueryVariables,
} from "@/__generated__/graphql";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const RecentMovies = () => {
  const [recentMovies, setRecentMovies] = useState<string[]>([]);

  useEffect(() => {
    const storedMovies = JSON.parse(
      localStorage.getItem("recentMovies") as string
    );
    if (storedMovies) {
      setRecentMovies(storedMovies);
    }
  }, []);

  if (!recentMovies || recentMovies.length === 0) {
    return null;
  }

  return (
    <div className="bg-green-400">
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Recents
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Picked up where you left off on these movies.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {recentMovies.map((id: string) => (
              <RecentMovieItem key={id} id={id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const RecentMovieItem = ({ id }: { id: string }) => {
  const { data } = useSuspenseQuery<MovieByIdQuery, MovieByIdQueryVariables>(
    MOVIE_BY_ID_QUERY,
    {
      variables: {
        id,
      },
    }
  );

  const movie: Movie | null | undefined = data.movie;

  return (
    <article
      key={movie?.id}
      className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
    >
      <Image
        alt=""
        src={
          movie?.posterUrl ||
          "https://placehold.co/160x250.webp?text=No+Image+Available"
        }
        width={160}
        height={250}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
      <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

      <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
        <Link href={`/movie-details/${id}`}>
          <span className="absolute inset-0" />
          {movie?.title}
        </Link>
      </h3>
      <div className="flex flex-wrap items-center gap-1 overflow-hidden text-sm leading-6 text-gray-300">
        <p className="text-sm font-medium ">
          {movie?.datePublished
            ? new Date(movie?.datePublished).getFullYear()
            : "-"}
        </p>
        <span aria-hidden="true">&middot;</span>
        <p className="text-sm font-medium ">{movie?.rating}</p>
      </div>
    </article>
  );
};
