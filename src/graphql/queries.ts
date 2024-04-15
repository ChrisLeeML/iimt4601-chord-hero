/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    authID
    isChordHero
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      authID
      isChordHero
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getSchool = /* GraphQL */ `query GetSchool($id: ID!) {
  getSchool(id: $id) {
    id
    title
    Creators {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetSchoolQueryVariables, APITypes.GetSchoolQuery>;
export const listSchools = /* GraphQL */ `query ListSchools(
  $filter: ModelSchoolFilterInput
  $limit: Int
  $nextToken: String
) {
  listSchools(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSchoolsQueryVariables,
  APITypes.ListSchoolsQuery
>;
export const getContent = /* GraphQL */ `query GetContent($id: ID!) {
  getContent(id: $id) {
    id
    title
    threshold
    type
    videoLink
    textContent
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetContentQueryVariables,
  APITypes.GetContentQuery
>;
export const listContents = /* GraphQL */ `query ListContents(
  $filter: ModelContentFilterInput
  $limit: Int
  $nextToken: String
) {
  listContents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      threshold
      type
      videoLink
      textContent
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListContentsQueryVariables,
  APITypes.ListContentsQuery
>;
export const getUkulele = /* GraphQL */ `query GetUkulele($id: ID!) {
  getUkulele(id: $id) {
    id
    title
    tokenID
    contractAddress
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUkuleleQueryVariables,
  APITypes.GetUkuleleQuery
>;
export const listUkuleles = /* GraphQL */ `query ListUkuleles(
  $filter: ModelUkuleleFilterInput
  $limit: Int
  $nextToken: String
) {
  listUkuleles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      tokenID
      contractAddress
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUkulelesQueryVariables,
  APITypes.ListUkulelesQuery
>;
export const getCreator = /* GraphQL */ `query GetCreator($id: ID!) {
  getCreator(id: $id) {
    id
    name
    Ukulele {
      id
      title
      tokenID
      contractAddress
      createdAt
      updatedAt
      __typename
    }
    schoolID
    createdAt
    updatedAt
    creatorUkuleleId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCreatorQueryVariables,
  APITypes.GetCreatorQuery
>;
export const listCreators = /* GraphQL */ `query ListCreators(
  $filter: ModelCreatorFilterInput
  $limit: Int
  $nextToken: String
) {
  listCreators(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      schoolID
      createdAt
      updatedAt
      creatorUkuleleId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCreatorsQueryVariables,
  APITypes.ListCreatorsQuery
>;
export const creatorsBySchoolID = /* GraphQL */ `query CreatorsBySchoolID(
  $schoolID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCreatorFilterInput
  $limit: Int
  $nextToken: String
) {
  creatorsBySchoolID(
    schoolID: $schoolID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      schoolID
      createdAt
      updatedAt
      creatorUkuleleId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CreatorsBySchoolIDQueryVariables,
  APITypes.CreatorsBySchoolIDQuery
>;
