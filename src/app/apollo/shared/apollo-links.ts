import { HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_API_TOKEN}`,
    },
  };
});

export const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_MOVIE_API_URI}`,
});
