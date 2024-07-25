/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Genre = {
  __typename?: 'Genre';
  id?: Maybe<Scalars['ID']['output']>;
  movies?: Maybe<Array<Maybe<Movie>>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type GenreConnection = {
  __typename?: 'GenreConnection';
  nodes?: Maybe<Array<Genre>>;
  pagination?: Maybe<Pagination>;
};

export type GenreWithoutMovies = {
  __typename?: 'GenreWithoutMovies';
  id?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Movie = {
  __typename?: 'Movie';
  bestRating?: Maybe<Scalars['Float']['output']>;
  datePublished?: Maybe<Scalars['String']['output']>;
  directors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  duration?: Maybe<Scalars['String']['output']>;
  genres?: Maybe<Array<Maybe<GenreWithoutMovies>>>;
  id?: Maybe<Scalars['ID']['output']>;
  mainActors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  posterUrl?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['String']['output']>;
  ratingValue?: Maybe<Scalars['Float']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  worstRating?: Maybe<Scalars['Float']['output']>;
  writers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type MovieConnection = {
  __typename?: 'MovieConnection';
  nodes?: Maybe<Array<Movie>>;
  pagination?: Maybe<Pagination>;
};

export type MovieFilterInput = {
  genre?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  perPage: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginationInput = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  /** Single Genre by ID */
  genre?: Maybe<Genre>;
  /** Paginated list of Genres */
  genres?: Maybe<GenreConnection>;
  /** Single Movie by ID */
  movie?: Maybe<Movie>;
  /** Paginated list of Movies with simple search */
  movies?: Maybe<MovieConnection>;
};


export type QueryGenreArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGenresArgs = {
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryMovieArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMoviesArgs = {
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<MovieFilterInput>;
};

export type MovieFragment = { __typename?: 'Movie', id?: string | null, title?: string | null, posterUrl?: string | null, summary?: string | null, duration?: string | null, directors?: Array<string | null> | null, mainActors?: Array<string | null> | null, datePublished?: string | null, rating?: string | null, ratingValue?: number | null, bestRating?: number | null, worstRating?: number | null, writers?: Array<string | null> | null, genres?: Array<{ __typename?: 'GenreWithoutMovies', id?: string | null, title?: string | null } | null> | null } & { ' $fragmentName'?: 'MovieFragment' };

export type GenresQueryVariables = Exact<{ [key: string]: never; }>;


export type GenresQuery = { __typename?: 'Query', genres?: { __typename?: 'GenreConnection', nodes?: Array<{ __typename?: 'Genre', id?: string | null, title?: string | null }> | null, pagination?: { __typename?: 'Pagination', page: number, perPage: number, totalPages: number } | null } | null };

export type MovieByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type MovieByIdQuery = { __typename?: 'Query', movie?: (
    { __typename?: 'Movie' }
    & { ' $fragmentRefs'?: { 'MovieFragment': MovieFragment } }
  ) | null };

export type MoviesQueryVariables = Exact<{
  where?: InputMaybe<MovieFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
}>;


export type MoviesQuery = { __typename?: 'Query', movies?: { __typename?: 'MovieConnection', nodes?: Array<(
      { __typename?: 'Movie' }
      & { ' $fragmentRefs'?: { 'MovieFragment': MovieFragment } }
    )> | null, pagination?: { __typename?: 'Pagination', page: number, perPage: number, totalPages: number } | null } | null };

export const MovieFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Movie"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Movie"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"posterUrl"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"directors"}},{"kind":"Field","name":{"kind":"Name","value":"mainActors"}},{"kind":"Field","name":{"kind":"Name","value":"datePublished"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"ratingValue"}},{"kind":"Field","name":{"kind":"Name","value":"bestRating"}},{"kind":"Field","name":{"kind":"Name","value":"worstRating"}},{"kind":"Field","name":{"kind":"Name","value":"writers"}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<MovieFragment, unknown>;
export const GenresDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"perPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]}}]} as unknown as DocumentNode<GenresQuery, GenresQueryVariables>;
export const MovieByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MovieById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"movie"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Movie"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Movie"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Movie"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"posterUrl"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"directors"}},{"kind":"Field","name":{"kind":"Name","value":"mainActors"}},{"kind":"Field","name":{"kind":"Name","value":"datePublished"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"ratingValue"}},{"kind":"Field","name":{"kind":"Name","value":"bestRating"}},{"kind":"Field","name":{"kind":"Name","value":"worstRating"}},{"kind":"Field","name":{"kind":"Name","value":"writers"}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<MovieByIdQuery, MovieByIdQueryVariables>;
export const MoviesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Movies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"MovieFilterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"movies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Movie"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"perPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Movie"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Movie"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"posterUrl"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"directors"}},{"kind":"Field","name":{"kind":"Name","value":"mainActors"}},{"kind":"Field","name":{"kind":"Name","value":"datePublished"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"ratingValue"}},{"kind":"Field","name":{"kind":"Name","value":"bestRating"}},{"kind":"Field","name":{"kind":"Name","value":"worstRating"}},{"kind":"Field","name":{"kind":"Name","value":"writers"}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<MoviesQuery, MoviesQueryVariables>;