/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    name
    authID
    isChordHero
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    name
    authID
    isChordHero
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    name
    authID
    isChordHero
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createSchool = /* GraphQL */ `mutation CreateSchool(
  $input: CreateSchoolInput!
  $condition: ModelSchoolConditionInput
) {
  createSchool(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSchoolMutationVariables,
  APITypes.CreateSchoolMutation
>;
export const updateSchool = /* GraphQL */ `mutation UpdateSchool(
  $input: UpdateSchoolInput!
  $condition: ModelSchoolConditionInput
) {
  updateSchool(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSchoolMutationVariables,
  APITypes.UpdateSchoolMutation
>;
export const deleteSchool = /* GraphQL */ `mutation DeleteSchool(
  $input: DeleteSchoolInput!
  $condition: ModelSchoolConditionInput
) {
  deleteSchool(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSchoolMutationVariables,
  APITypes.DeleteSchoolMutation
>;
export const createContent = /* GraphQL */ `mutation CreateContent(
  $input: CreateContentInput!
  $condition: ModelContentConditionInput
) {
  createContent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateContentMutationVariables,
  APITypes.CreateContentMutation
>;
export const updateContent = /* GraphQL */ `mutation UpdateContent(
  $input: UpdateContentInput!
  $condition: ModelContentConditionInput
) {
  updateContent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateContentMutationVariables,
  APITypes.UpdateContentMutation
>;
export const deleteContent = /* GraphQL */ `mutation DeleteContent(
  $input: DeleteContentInput!
  $condition: ModelContentConditionInput
) {
  deleteContent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteContentMutationVariables,
  APITypes.DeleteContentMutation
>;
export const createUkulele = /* GraphQL */ `mutation CreateUkulele(
  $input: CreateUkuleleInput!
  $condition: ModelUkuleleConditionInput
) {
  createUkulele(input: $input, condition: $condition) {
    id
    title
    tokenID
    contractAddress
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUkuleleMutationVariables,
  APITypes.CreateUkuleleMutation
>;
export const updateUkulele = /* GraphQL */ `mutation UpdateUkulele(
  $input: UpdateUkuleleInput!
  $condition: ModelUkuleleConditionInput
) {
  updateUkulele(input: $input, condition: $condition) {
    id
    title
    tokenID
    contractAddress
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUkuleleMutationVariables,
  APITypes.UpdateUkuleleMutation
>;
export const deleteUkulele = /* GraphQL */ `mutation DeleteUkulele(
  $input: DeleteUkuleleInput!
  $condition: ModelUkuleleConditionInput
) {
  deleteUkulele(input: $input, condition: $condition) {
    id
    title
    tokenID
    contractAddress
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUkuleleMutationVariables,
  APITypes.DeleteUkuleleMutation
>;
export const createCreator = /* GraphQL */ `mutation CreateCreator(
  $input: CreateCreatorInput!
  $condition: ModelCreatorConditionInput
) {
  createCreator(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCreatorMutationVariables,
  APITypes.CreateCreatorMutation
>;
export const updateCreator = /* GraphQL */ `mutation UpdateCreator(
  $input: UpdateCreatorInput!
  $condition: ModelCreatorConditionInput
) {
  updateCreator(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCreatorMutationVariables,
  APITypes.UpdateCreatorMutation
>;
export const deleteCreator = /* GraphQL */ `mutation DeleteCreator(
  $input: DeleteCreatorInput!
  $condition: ModelCreatorConditionInput
) {
  deleteCreator(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCreatorMutationVariables,
  APITypes.DeleteCreatorMutation
>;
