import { gql } from "@apollo/client";

export const GENRES_QUERY = gql`
  query Genres {
    genres {
      nodes {
        id
        title
      }
      pagination {
        page
        perPage
        totalPages
      }
    }
  }
`;
