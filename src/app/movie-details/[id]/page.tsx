import Image from "next/image";
import { ChatWidget } from "../../components/chat-widget.component";
import { query } from "../../apollo/rsc-apollo-client/rsc-apollo-client";
import { MOVIE_BY_ID_QUERY } from "../../graphql/movie-by-id.query.gql";
import { Movie } from "@/__generated__/graphql";
import { formatDuration } from "@/app/utils/format-movie-duration";

interface MovieByIdQueryResult {
  movie?: Movie;
}

export default async function MovieDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { data } = await query<MovieByIdQueryResult>({
    query: MOVIE_BY_ID_QUERY,
    variables: { id: params.id },
  });

  const movie = data.movie;

  return (
    <>
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
                            <Image
                              alt=""
                              src={
                                movie?.posterUrl ||
                                "https://placehold.co/160x250.webp?text=No+Image+Available"
                              }
                              width={160}
                              height={250}
                              className="w-40"
                            />
                          </div>
                        </div>
                        <div>
                          <h1 className="text-2xl font-bold text-gray-900">
                            {movie?.title}
                          </h1>
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-medium text-gray-500">
                              {movie?.datePublished
                                ? new Date(movie?.datePublished).getFullYear()
                                : "-"}
                            </p>
                            <span aria-hidden="true">&middot;</span>
                            <p className="text-sm font-medium text-gray-500">
                              {movie?.rating}
                            </p>
                          </div>
                          <div className="mt-4">
                            <dt className="text-sm font-medium text-gray-500">
                              Summary
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {movie?.summary}
                            </dd>
                          </div>
                        </div>
                        <div className="w-40">
                          <p>
                            {movie?.ratingValue} / {movie?.bestRating}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Directors
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {movie?.directors?.join(", ") || "-"}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Writers
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {movie?.writers?.join(", ") || "-"}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Stars
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {movie?.mainActors?.join(", ") || "-"}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Realease Date
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {movie?.datePublished || "-"}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Duration
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {movie?.duration
                            ? formatDuration(movie?.duration)
                            : "-"}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </section>
            </div>

            <section className="lg:col-span-1 lg:col-start-3">
              <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
                <h2 className="text-lg font-medium text-gray-900">Movie Bot</h2>
                <ChatWidget movie={movie} />
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
