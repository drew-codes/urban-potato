import { gql } from "@apollo/client";

export const MOVIE_FRAGMENT = gql`
  fragment Movie on Movie {
    id
    title
    posterUrl
    summary
    duration
    directors
    mainActors
    datePublished
    rating
    ratingValue
    bestRating
    worstRating
    writers
    genres {
      id
      title
    }
  }
`;
