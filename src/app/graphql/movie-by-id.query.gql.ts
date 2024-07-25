import { gql } from "@apollo/client";
import { MOVIE_FRAGMENT } from "./fragments/movie.fragment.gql";

export const MOVIE_BY_ID_QUERY = gql`
  ${MOVIE_FRAGMENT}
  query MovieById($id: ID!) {
    movie(id: $id) {
      ...Movie
    }
  }
`;
