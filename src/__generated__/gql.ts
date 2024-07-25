/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment Movie on Movie {\n    id\n    title\n    posterUrl\n    summary\n    duration\n    directors\n    mainActors\n    datePublished\n    rating\n    ratingValue\n    bestRating\n    worstRating\n    writers\n    genres {\n      id\n      title\n    }\n  }\n": types.MovieFragmentDoc,
    "\n  query Genres {\n    genres {\n      nodes {\n        id\n        title\n      }\n      pagination {\n        page\n        perPage\n        totalPages\n      }\n    }\n  }\n": types.GenresDocument,
    "\n  \n  query MovieById($id: ID!) {\n    movie(id: $id) {\n      ...Movie\n    }\n  }\n": types.MovieByIdDocument,
    "\n  \n  query Movies($where: MovieFilterInput, $pagination: PaginationInput) {\n    movies(where: $where, pagination: $pagination) {\n      nodes {\n        ...Movie\n      }\n      pagination {\n        page\n        perPage\n        totalPages\n      }\n    }\n  }\n": types.MoviesDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment Movie on Movie {\n    id\n    title\n    posterUrl\n    summary\n    duration\n    directors\n    mainActors\n    datePublished\n    rating\n    ratingValue\n    bestRating\n    worstRating\n    writers\n    genres {\n      id\n      title\n    }\n  }\n"): (typeof documents)["\n  fragment Movie on Movie {\n    id\n    title\n    posterUrl\n    summary\n    duration\n    directors\n    mainActors\n    datePublished\n    rating\n    ratingValue\n    bestRating\n    worstRating\n    writers\n    genres {\n      id\n      title\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Genres {\n    genres {\n      nodes {\n        id\n        title\n      }\n      pagination {\n        page\n        perPage\n        totalPages\n      }\n    }\n  }\n"): (typeof documents)["\n  query Genres {\n    genres {\n      nodes {\n        id\n        title\n      }\n      pagination {\n        page\n        perPage\n        totalPages\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  \n  query MovieById($id: ID!) {\n    movie(id: $id) {\n      ...Movie\n    }\n  }\n"): (typeof documents)["\n  \n  query MovieById($id: ID!) {\n    movie(id: $id) {\n      ...Movie\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  \n  query Movies($where: MovieFilterInput, $pagination: PaginationInput) {\n    movies(where: $where, pagination: $pagination) {\n      nodes {\n        ...Movie\n      }\n      pagination {\n        page\n        perPage\n        totalPages\n      }\n    }\n  }\n"): (typeof documents)["\n  \n  query Movies($where: MovieFilterInput, $pagination: PaginationInput) {\n    movies(where: $where, pagination: $pagination) {\n      nodes {\n        ...Movie\n      }\n      pagination {\n        page\n        perPage\n        totalPages\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;