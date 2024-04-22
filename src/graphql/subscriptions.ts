/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateOwner = /* GraphQL */ `subscription OnCreateOwner($filter: ModelSubscriptionOwnerFilterInput) {
  onCreateOwner(filter: $filter) {
    id
    walletAddress
    nickname
    notes
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateOwnerSubscriptionVariables,
  APITypes.OnCreateOwnerSubscription
>;
export const onUpdateOwner = /* GraphQL */ `subscription OnUpdateOwner($filter: ModelSubscriptionOwnerFilterInput) {
  onUpdateOwner(filter: $filter) {
    id
    walletAddress
    nickname
    notes
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateOwnerSubscriptionVariables,
  APITypes.OnUpdateOwnerSubscription
>;
export const onDeleteOwner = /* GraphQL */ `subscription OnDeleteOwner($filter: ModelSubscriptionOwnerFilterInput) {
  onDeleteOwner(filter: $filter) {
    id
    walletAddress
    nickname
    notes
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteOwnerSubscriptionVariables,
  APITypes.OnDeleteOwnerSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
    id
    name
    authID
    isChordHero
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
    id
    name
    authID
    isChordHero
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
    id
    name
    authID
    isChordHero
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateSchool = /* GraphQL */ `subscription OnCreateSchool($filter: ModelSubscriptionSchoolFilterInput) {
  onCreateSchool(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSchoolSubscriptionVariables,
  APITypes.OnCreateSchoolSubscription
>;
export const onUpdateSchool = /* GraphQL */ `subscription OnUpdateSchool($filter: ModelSubscriptionSchoolFilterInput) {
  onUpdateSchool(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSchoolSubscriptionVariables,
  APITypes.OnUpdateSchoolSubscription
>;
export const onDeleteSchool = /* GraphQL */ `subscription OnDeleteSchool($filter: ModelSubscriptionSchoolFilterInput) {
  onDeleteSchool(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSchoolSubscriptionVariables,
  APITypes.OnDeleteSchoolSubscription
>;
export const onCreateContent = /* GraphQL */ `subscription OnCreateContent($filter: ModelSubscriptionContentFilterInput) {
  onCreateContent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateContentSubscriptionVariables,
  APITypes.OnCreateContentSubscription
>;
export const onUpdateContent = /* GraphQL */ `subscription OnUpdateContent($filter: ModelSubscriptionContentFilterInput) {
  onUpdateContent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateContentSubscriptionVariables,
  APITypes.OnUpdateContentSubscription
>;
export const onDeleteContent = /* GraphQL */ `subscription OnDeleteContent($filter: ModelSubscriptionContentFilterInput) {
  onDeleteContent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteContentSubscriptionVariables,
  APITypes.OnDeleteContentSubscription
>;
export const onCreateUkulele = /* GraphQL */ `subscription OnCreateUkulele($filter: ModelSubscriptionUkuleleFilterInput) {
  onCreateUkulele(filter: $filter) {
    id
    title
    tokenID
    contractAddress
    chain
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUkuleleSubscriptionVariables,
  APITypes.OnCreateUkuleleSubscription
>;
export const onUpdateUkulele = /* GraphQL */ `subscription OnUpdateUkulele($filter: ModelSubscriptionUkuleleFilterInput) {
  onUpdateUkulele(filter: $filter) {
    id
    title
    tokenID
    contractAddress
    chain
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUkuleleSubscriptionVariables,
  APITypes.OnUpdateUkuleleSubscription
>;
export const onDeleteUkulele = /* GraphQL */ `subscription OnDeleteUkulele($filter: ModelSubscriptionUkuleleFilterInput) {
  onDeleteUkulele(filter: $filter) {
    id
    title
    tokenID
    contractAddress
    chain
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUkuleleSubscriptionVariables,
  APITypes.OnDeleteUkuleleSubscription
>;
export const onCreateCreator = /* GraphQL */ `subscription OnCreateCreator($filter: ModelSubscriptionCreatorFilterInput) {
  onCreateCreator(filter: $filter) {
    id
    name
    Ukulele {
      id
      title
      tokenID
      contractAddress
      chain
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
` as GeneratedSubscription<
  APITypes.OnCreateCreatorSubscriptionVariables,
  APITypes.OnCreateCreatorSubscription
>;
export const onUpdateCreator = /* GraphQL */ `subscription OnUpdateCreator($filter: ModelSubscriptionCreatorFilterInput) {
  onUpdateCreator(filter: $filter) {
    id
    name
    Ukulele {
      id
      title
      tokenID
      contractAddress
      chain
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
` as GeneratedSubscription<
  APITypes.OnUpdateCreatorSubscriptionVariables,
  APITypes.OnUpdateCreatorSubscription
>;
export const onDeleteCreator = /* GraphQL */ `subscription OnDeleteCreator($filter: ModelSubscriptionCreatorFilterInput) {
  onDeleteCreator(filter: $filter) {
    id
    name
    Ukulele {
      id
      title
      tokenID
      contractAddress
      chain
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
` as GeneratedSubscription<
  APITypes.OnDeleteCreatorSubscriptionVariables,
  APITypes.OnDeleteCreatorSubscription
>;
