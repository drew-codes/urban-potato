import {
  MagnifyingGlassIcon,
  FunnelIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";

const features = [
  {
    name: "Search movies.",
    description:
      "Enter a movie title and get a list of movies that match your search.",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "Filter by Genre",
    description:
      "Filter movies by genre to find the perfect movie for your mood.",
    icon: FunnelIcon,
  },
  {
    name: "Use the AI chatbot",
    description: "Ask the AI chatbot for more details and recommendations.",
    icon: ChatBubbleLeftRightIcon,
  },
];

export const Features = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-4 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 md:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-gray-600">
                Save money
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Because no one wants another subscription.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                CheapFlix allows you to look up your favorite movies for free.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-gray-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <Image
                  src="/movie-bot.webp"
                  width={900}
                  height={900}
                  alt="My profile"
                  className="object-fill rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
