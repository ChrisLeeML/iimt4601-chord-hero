/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name?: string | null,
  authID?: string | null,
  isChordHero?: boolean | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  authID?: ModelStringInput | null,
  isChordHero?: ModelBooleanInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type User = {
  __typename: "User",
  id: string,
  name?: string | null,
  authID?: string | null,
  isChordHero?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  authID?: string | null,
  isChordHero?: boolean | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateSchoolInput = {
  id?: string | null,
  title?: string | null,
};

export type ModelSchoolConditionInput = {
  title?: ModelStringInput | null,
  and?: Array< ModelSchoolConditionInput | null > | null,
  or?: Array< ModelSchoolConditionInput | null > | null,
  not?: ModelSchoolConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type School = {
  __typename: "School",
  id: string,
  title?: string | null,
  Creators?: ModelCreatorConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCreatorConnection = {
  __typename: "ModelCreatorConnection",
  items:  Array<Creator | null >,
  nextToken?: string | null,
};

export type Creator = {
  __typename: "Creator",
  id: string,
  name?: string | null,
  Ukulele?: Ukulele | null,
  schoolID: string,
  createdAt: string,
  updatedAt: string,
  creatorUkuleleId?: string | null,
};

export type Ukulele = {
  __typename: "Ukulele",
  id: string,
  title?: string | null,
  tokenID?: string | null,
  contractAddress?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSchoolInput = {
  id: string,
  title?: string | null,
};

export type DeleteSchoolInput = {
  id: string,
};

export type CreateContentInput = {
  id?: string | null,
  title?: string | null,
  threshold?: number | null,
  type?: ContentType | null,
  videoLink?: string | null,
  textContent?: string | null,
};

export enum ContentType {
  VIDEO = "VIDEO",
  TEXT = "TEXT",
}


export type ModelContentConditionInput = {
  title?: ModelStringInput | null,
  threshold?: ModelIntInput | null,
  type?: ModelContentTypeInput | null,
  videoLink?: ModelStringInput | null,
  textContent?: ModelStringInput | null,
  and?: Array< ModelContentConditionInput | null > | null,
  or?: Array< ModelContentConditionInput | null > | null,
  not?: ModelContentConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelContentTypeInput = {
  eq?: ContentType | null,
  ne?: ContentType | null,
};

export type Content = {
  __typename: "Content",
  id: string,
  title?: string | null,
  threshold?: number | null,
  type?: ContentType | null,
  videoLink?: string | null,
  textContent?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateContentInput = {
  id: string,
  title?: string | null,
  threshold?: number | null,
  type?: ContentType | null,
  videoLink?: string | null,
  textContent?: string | null,
};

export type DeleteContentInput = {
  id: string,
};

export type CreateUkuleleInput = {
  id?: string | null,
  title?: string | null,
  tokenID?: string | null,
  contractAddress?: string | null,
  chain?: string | null,
};

export type ModelUkuleleConditionInput = {
  title?: ModelStringInput | null,
  tokenID?: ModelStringInput | null,
  contractAddress?: ModelStringInput | null,
  and?: Array< ModelUkuleleConditionInput | null > | null,
  or?: Array< ModelUkuleleConditionInput | null > | null,
  not?: ModelUkuleleConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateUkuleleInput = {
  id: string,
  title?: string | null,
  tokenID?: string | null,
  contractAddress?: string | null,
  chain?: string | null,
};

export type DeleteUkuleleInput = {
  id: string,
};

export type CreateCreatorInput = {
  id?: string | null,
  name?: string | null,
  schoolID: string,
  creatorUkuleleId?: string | null,
};

export type ModelCreatorConditionInput = {
  name?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  and?: Array< ModelCreatorConditionInput | null > | null,
  or?: Array< ModelCreatorConditionInput | null > | null,
  not?: ModelCreatorConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  creatorUkuleleId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCreatorInput = {
  id: string,
  name?: string | null,
  schoolID?: string | null,
  creatorUkuleleId?: string | null,
};

export type DeleteCreatorInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  authID?: ModelStringInput | null,
  isChordHero?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelSchoolFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSchoolFilterInput | null > | null,
  or?: Array< ModelSchoolFilterInput | null > | null,
  not?: ModelSchoolFilterInput | null,
};

export type ModelSchoolConnection = {
  __typename: "ModelSchoolConnection",
  items:  Array<School | null >,
  nextToken?: string | null,
};

export type ModelContentFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  threshold?: ModelIntInput | null,
  type?: ModelContentTypeInput | null,
  videoLink?: ModelStringInput | null,
  textContent?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelContentFilterInput | null > | null,
  or?: Array< ModelContentFilterInput | null > | null,
  not?: ModelContentFilterInput | null,
};

export type ModelContentConnection = {
  __typename: "ModelContentConnection",
  items:  Array<Content | null >,
  nextToken?: string | null,
};

export type ModelUkuleleFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  tokenID?: ModelStringInput | null,
  contractAddress?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUkuleleFilterInput | null > | null,
  or?: Array< ModelUkuleleFilterInput | null > | null,
  not?: ModelUkuleleFilterInput | null,
};

export type ModelUkuleleConnection = {
  __typename: "ModelUkuleleConnection",
  items:  Array<Ukulele | null >,
  nextToken?: string | null,
};

export type ModelCreatorFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCreatorFilterInput | null > | null,
  or?: Array< ModelCreatorFilterInput | null > | null,
  not?: ModelCreatorFilterInput | null,
  creatorUkuleleId?: ModelIDInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  authID?: ModelSubscriptionStringInput | null,
  isChordHero?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionSchoolFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSchoolFilterInput | null > | null,
  or?: Array< ModelSubscriptionSchoolFilterInput | null > | null,
};

export type ModelSubscriptionContentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  threshold?: ModelSubscriptionIntInput | null,
  type?: ModelSubscriptionStringInput | null,
  videoLink?: ModelSubscriptionStringInput | null,
  textContent?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionContentFilterInput | null > | null,
  or?: Array< ModelSubscriptionContentFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionUkuleleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  tokenID?: ModelSubscriptionStringInput | null,
  contractAddress?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUkuleleFilterInput | null > | null,
  or?: Array< ModelSubscriptionUkuleleFilterInput | null > | null,
};

export type ModelSubscriptionCreatorFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  schoolID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCreatorFilterInput | null > | null,
  or?: Array< ModelSubscriptionCreatorFilterInput | null > | null,
  creatorUkuleleId?: ModelSubscriptionIDInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    authID?: string | null,
    isChordHero?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    authID?: string | null,
    isChordHero?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    authID?: string | null,
    isChordHero?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSchoolMutationVariables = {
  input: CreateSchoolInput,
  condition?: ModelSchoolConditionInput | null,
};

export type CreateSchoolMutation = {
  createSchool?:  {
    __typename: "School",
    id: string,
    title?: string | null,
    Creators?:  {
      __typename: "ModelCreatorConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSchoolMutationVariables = {
  input: UpdateSchoolInput,
  condition?: ModelSchoolConditionInput | null,
};

export type UpdateSchoolMutation = {
  updateSchool?:  {
    __typename: "School",
    id: string,
    title?: string | null,
    Creators?:  {
      __typename: "ModelCreatorConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSchoolMutationVariables = {
  input: DeleteSchoolInput,
  condition?: ModelSchoolConditionInput | null,
};

export type DeleteSchoolMutation = {
  deleteSchool?:  {
    __typename: "School",
    id: string,
    title?: string | null,
    Creators?:  {
      __typename: "ModelCreatorConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateContentMutationVariables = {
  input: CreateContentInput,
  condition?: ModelContentConditionInput | null,
};

export type CreateContentMutation = {
  createContent?:  {
    __typename: "Content",
    id: string,
    title?: string | null,
    threshold?: number | null,
    type?: ContentType | null,
    videoLink?: string | null,
    textContent?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateContentMutationVariables = {
  input: UpdateContentInput,
  condition?: ModelContentConditionInput | null,
};

export type UpdateContentMutation = {
  updateContent?:  {
    __typename: "Content",
    id: string,
    title?: string | null,
    threshold?: number | null,
    type?: ContentType | null,
    videoLink?: string | null,
    textContent?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteContentMutationVariables = {
  input: DeleteContentInput,
  condition?: ModelContentConditionInput | null,
};

export type DeleteContentMutation = {
  deleteContent?:  {
    __typename: "Content",
    id: string,
    title?: string | null,
    threshold?: number | null,
    type?: ContentType | null,
    videoLink?: string | null,
    textContent?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUkuleleMutationVariables = {
  input: CreateUkuleleInput,
  condition?: ModelUkuleleConditionInput | null,
};

export type CreateUkuleleMutation = {
  createUkulele?:  {
    __typename: "Ukulele",
    id: string,
    title?: string | null,
    tokenID?: string | null,
    contractAddress?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUkuleleMutationVariables = {
  input: UpdateUkuleleInput,
  condition?: ModelUkuleleConditionInput | null,
};

export type UpdateUkuleleMutation = {
  updateUkulele?:  {
    __typename: "Ukulele",
    id: string,
    title?: string | null,
    tokenID?: string | null,
    contractAddress?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUkuleleMutationVariables = {
  input: DeleteUkuleleInput,
  condition?: ModelUkuleleConditionInput | null,
};

export type DeleteUkuleleMutation = {
  deleteUkulele?:  {
    __typename: "Ukulele",
    id: string,
    title?: string | null,
    tokenID?: string | null,
    contractAddress?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCreatorMutationVariables = {
  input: CreateCreatorInput,
  condition?: ModelCreatorConditionInput | null,
};

export type CreateCreatorMutation = {
  createCreator?:  {
    __typename: "Creator",
    id: string,
    name?: string | null,
    Ukulele?:  {
      __typename: "Ukulele",
      id: string,
      title?: string | null,
      tokenID?: string | null,
      contractAddress?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
    creatorUkuleleId?: string | null,
  } | null,
};

export type UpdateCreatorMutationVariables = {
  input: UpdateCreatorInput,
  condition?: ModelCreatorConditionInput | null,
};

export type UpdateCreatorMutation = {
  updateCreator?:  {
    __typename: "Creator",
    id: string,
    name?: string | null,
    Ukulele?:  {
      __typename: "Ukulele",
      id: string,
      title?: string | null,
      tokenID?: string | null,
      contractAddress?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
    creatorUkuleleId?: string | null,
  } | null,
};

export type DeleteCreatorMutationVariables = {
  input: DeleteCreatorInput,
  condition?: ModelCreatorConditionInput | null,
};

export type DeleteCreatorMutation = {
  deleteCreator?:  {
    __typename: "Creator",
    id: string,
    name?: string | null,
    Ukulele?:  {
      __typename: "Ukulele",
      id: string,
      title?: string | null,
      tokenID?: string | null,
      contractAddress?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
    creatorUkuleleId?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    authID?: string | null,
    isChordHero?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      authID?: string | null,
      isChordHero?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSchoolQueryVariables = {
  id: string,
};

export type GetSchoolQuery = {
  getSchool?:  {
    __typename: "School",
    id: string,
    title?: string | null,
    Creators?:  {
      __typename: "ModelCreatorConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSchoolsQueryVariables = {
  filter?: ModelSchoolFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSchoolsQuery = {
  listSchools?:  {
    __typename: "ModelSchoolConnection",
    items:  Array< {
      __typename: "School",
      id: string,
      title?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetContentQueryVariables = {
  id: string,
};

export type GetContentQuery = {
  getContent?:  {
    __typename: "Content",
    id: string,
    title?: string | null,
    threshold?: number | null,
    type?: ContentType | null,
    videoLink?: string | null,
    textContent?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListContentsQueryVariables = {
  filter?: ModelContentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContentsQuery = {
  listContents?:  {
    __typename: "ModelContentConnection",
    items:  Array< {
      __typename: "Content",
      id: string,
      title?: string | null,
      threshold?: number | null,
      type?: ContentType | null,
      videoLink?: string | null,
      textContent?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUkuleleQueryVariables = {
  id: string,
};

export type GetUkuleleQuery = {
  getUkulele?:  {
    __typename: "Ukulele",
    id: string,
    title?: string | null,
    tokenID?: string | null,
    contractAddress?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUkulelesQueryVariables = {
  filter?: ModelUkuleleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUkulelesQuery = {
  listUkuleles?:  {
    __typename: "ModelUkuleleConnection",
    items:  Array< {
      __typename: "Ukulele",
      id: string,
      title?: string | null,
      tokenID?: string | null,
      contractAddress?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCreatorQueryVariables = {
  id: string,
};

export type GetCreatorQuery = {
  getCreator?:  {
    __typename: "Creator",
    id: string,
    name?: string | null,
    Ukulele?:  {
      __typename: "Ukulele",
      id: string,
      title?: string | null,
      tokenID?: string | null,
      contractAddress?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
    creatorUkuleleId?: string | null,
  } | null,
};

export type ListCreatorsQueryVariables = {
  filter?: ModelCreatorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCreatorsQuery = {
  listCreators?:  {
    __typename: "ModelCreatorConnection",
    items:  Array< {
      __typename: "Creator",
      id: string,
      name?: string | null,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
      creatorUkuleleId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreatorsBySchoolIDQueryVariables = {
  schoolID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCreatorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CreatorsBySchoolIDQuery = {
  creatorsBySchoolID?:  {
    __typename: "ModelCreatorConnection",
    items:  Array< {
      __typename: "Creator",
      id: string,
      name?: string | null,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
      creatorUkuleleId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    authID?: string | null,
    isChordHero?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    authID?: string | null,
    isChordHero?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    authID?: string | null,
    isChordHero?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSchoolSubscriptionVariables = {
  filter?: ModelSubscriptionSchoolFilterInput | null,
};

export type OnCreateSchoolSubscription = {
  onCreateSchool?:  {
    __typename: "School",
    id: string,
    title?: string | null,
    Creators?:  {
      __typename: "ModelCreatorConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSchoolSubscriptionVariables = {
  filter?: ModelSubscriptionSchoolFilterInput | null,
};

export type OnUpdateSchoolSubscription = {
  onUpdateSchool?:  {
    __typename: "School",
    id: string,
    title?: string | null,
    Creators?:  {
      __typename: "ModelCreatorConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSchoolSubscriptionVariables = {
  filter?: ModelSubscriptionSchoolFilterInput | null,
};

export type OnDeleteSchoolSubscription = {
  onDeleteSchool?:  {
    __typename: "School",
    id: string,
    title?: string | null,
    Creators?:  {
      __typename: "ModelCreatorConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateContentSubscriptionVariables = {
  filter?: ModelSubscriptionContentFilterInput | null,
};

export type OnCreateContentSubscription = {
  onCreateContent?:  {
    __typename: "Content",
    id: string,
    title?: string | null,
    threshold?: number | null,
    type?: ContentType | null,
    videoLink?: string | null,
    textContent?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContentSubscriptionVariables = {
  filter?: ModelSubscriptionContentFilterInput | null,
};

export type OnUpdateContentSubscription = {
  onUpdateContent?:  {
    __typename: "Content",
    id: string,
    title?: string | null,
    threshold?: number | null,
    type?: ContentType | null,
    videoLink?: string | null,
    textContent?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContentSubscriptionVariables = {
  filter?: ModelSubscriptionContentFilterInput | null,
};

export type OnDeleteContentSubscription = {
  onDeleteContent?:  {
    __typename: "Content",
    id: string,
    title?: string | null,
    threshold?: number | null,
    type?: ContentType | null,
    videoLink?: string | null,
    textContent?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUkuleleSubscriptionVariables = {
  filter?: ModelSubscriptionUkuleleFilterInput | null,
};

export type OnCreateUkuleleSubscription = {
  onCreateUkulele?:  {
    __typename: "Ukulele",
    id: string,
    title?: string | null,
    tokenID?: string | null,
    contractAddress?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUkuleleSubscriptionVariables = {
  filter?: ModelSubscriptionUkuleleFilterInput | null,
};

export type OnUpdateUkuleleSubscription = {
  onUpdateUkulele?:  {
    __typename: "Ukulele",
    id: string,
    title?: string | null,
    tokenID?: string | null,
    contractAddress?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUkuleleSubscriptionVariables = {
  filter?: ModelSubscriptionUkuleleFilterInput | null,
};

export type OnDeleteUkuleleSubscription = {
  onDeleteUkulele?:  {
    __typename: "Ukulele",
    id: string,
    title?: string | null,
    tokenID?: string | null,
    contractAddress?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCreatorSubscriptionVariables = {
  filter?: ModelSubscriptionCreatorFilterInput | null,
};

export type OnCreateCreatorSubscription = {
  onCreateCreator?:  {
    __typename: "Creator",
    id: string,
    name?: string | null,
    Ukulele?:  {
      __typename: "Ukulele",
      id: string,
      title?: string | null,
      tokenID?: string | null,
      contractAddress?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
    creatorUkuleleId?: string | null,
  } | null,
};

export type OnUpdateCreatorSubscriptionVariables = {
  filter?: ModelSubscriptionCreatorFilterInput | null,
};

export type OnUpdateCreatorSubscription = {
  onUpdateCreator?:  {
    __typename: "Creator",
    id: string,
    name?: string | null,
    Ukulele?:  {
      __typename: "Ukulele",
      id: string,
      title?: string | null,
      tokenID?: string | null,
      contractAddress?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
    creatorUkuleleId?: string | null,
  } | null,
};

export type OnDeleteCreatorSubscriptionVariables = {
  filter?: ModelSubscriptionCreatorFilterInput | null,
};

export type OnDeleteCreatorSubscription = {
  onDeleteCreator?:  {
    __typename: "Creator",
    id: string,
    name?: string | null,
    Ukulele?:  {
      __typename: "Ukulele",
      id: string,
      title?: string | null,
      tokenID?: string | null,
      contractAddress?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
    creatorUkuleleId?: string | null,
  } | null,
};
