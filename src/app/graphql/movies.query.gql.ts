import { gql } from "@apollo/client";
import { MOVIE_FRAGMENT } from "./fragments/movie.fragment.gql";

export const MOVIES_QUERY = gql`
  ${MOVIE_FRAGMENT}
  query Movies($where: MovieFilterInput, $pagination: PaginationInput) {
    movies(where: $where, pagination: $pagination) {
      nodes {
        ...Movie
      }
      pagination {
        page
        perPage
        totalPages
      }
    }
  }
`;
