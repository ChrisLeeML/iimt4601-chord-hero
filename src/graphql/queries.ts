/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getReport = /* GraphQL */ `query GetReport($id: ID!) {
  getReport(id: $id) {
    id
    content
    teacherID
    ukuleleID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetReportQueryVariables, APITypes.GetReportQuery>;
export const listReports = /* GraphQL */ `query ListReports(
  $filter: ModelReportFilterInput
  $limit: Int
  $nextToken: String
) {
  listReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      teacherID
      ukuleleID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReportsQueryVariables,
  APITypes.ListReportsQuery
>;
export const reportsByTeacherID = /* GraphQL */ `query ReportsByTeacherID(
  $teacherID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelReportFilterInput
  $limit: Int
  $nextToken: String
) {
  reportsByTeacherID(
    teacherID: $teacherID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      content
      teacherID
      ukuleleID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ReportsByTeacherIDQueryVariables,
  APITypes.ReportsByTeacherIDQuery
>;
export const reportsByUkuleleID = /* GraphQL */ `query ReportsByUkuleleID(
  $ukuleleID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelReportFilterInput
  $limit: Int
  $nextToken: String
) {
  reportsByUkuleleID(
    ukuleleID: $ukuleleID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      content
      teacherID
      ukuleleID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ReportsByUkuleleIDQueryVariables,
  APITypes.ReportsByUkuleleIDQuery
>;
export const getOrder = /* GraphQL */ `query GetOrder($id: ID!) {
  getOrder(id: $id) {
    id
    teacherID
    Ukuleles {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetOrderQueryVariables, APITypes.GetOrderQuery>;
export const listOrders = /* GraphQL */ `query ListOrders(
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      teacherID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrdersQueryVariables,
  APITypes.ListOrdersQuery
>;
export const ordersByTeacherID = /* GraphQL */ `query OrdersByTeacherID(
  $teacherID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  ordersByTeacherID(
    teacherID: $teacherID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      teacherID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OrdersByTeacherIDQueryVariables,
  APITypes.OrdersByTeacherIDQuery
>;
export const getProduct = /* GraphQL */ `query GetProduct($id: ID!) {
  getProduct(id: $id) {
    id
    name
    price
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProductQueryVariables,
  APITypes.GetProductQuery
>;
export const listProducts = /* GraphQL */ `query ListProducts(
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      price
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProductsQueryVariables,
  APITypes.ListProductsQuery
>;
export const getTeacher = /* GraphQL */ `query GetTeacher($id: ID!) {
  getTeacher(id: $id) {
    id
    name
    Students {
      nextToken
      __typename
    }
    Ukuleles {
      nextToken
      __typename
    }
    Orders {
      nextToken
      __typename
    }
    Reports {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTeacherQueryVariables,
  APITypes.GetTeacherQuery
>;
export const listTeachers = /* GraphQL */ `query ListTeachers(
  $filter: ModelTeacherFilterInput
  $limit: Int
  $nextToken: String
) {
  listTeachers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTeachersQueryVariables,
  APITypes.ListTeachersQuery
>;
export const getUkulele = /* GraphQL */ `query GetUkulele($id: ID!) {
  getUkulele(id: $id) {
    id
    teacherID
    Reports {
      nextToken
      __typename
    }
    orderID
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
      teacherID
      orderID
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
export const ukulelesByTeacherID = /* GraphQL */ `query UkulelesByTeacherID(
  $teacherID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUkuleleFilterInput
  $limit: Int
  $nextToken: String
) {
  ukulelesByTeacherID(
    teacherID: $teacherID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      teacherID
      orderID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UkulelesByTeacherIDQueryVariables,
  APITypes.UkulelesByTeacherIDQuery
>;
export const ukulelesByOrderID = /* GraphQL */ `query UkulelesByOrderID(
  $orderID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUkuleleFilterInput
  $limit: Int
  $nextToken: String
) {
  ukulelesByOrderID(
    orderID: $orderID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      teacherID
      orderID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UkulelesByOrderIDQueryVariables,
  APITypes.UkulelesByOrderIDQuery
>;
export const getStudent = /* GraphQL */ `query GetStudent($id: ID!) {
  getStudent(id: $id) {
    id
    name
    teacherID
    Ukulele {
      id
      teacherID
      orderID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    studentUkuleleId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetStudentQueryVariables,
  APITypes.GetStudentQuery
>;
export const listStudents = /* GraphQL */ `query ListStudents(
  $filter: ModelStudentFilterInput
  $limit: Int
  $nextToken: String
) {
  listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      teacherID
      createdAt
      updatedAt
      studentUkuleleId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStudentsQueryVariables,
  APITypes.ListStudentsQuery
>;
export const studentsByTeacherID = /* GraphQL */ `query StudentsByTeacherID(
  $teacherID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelStudentFilterInput
  $limit: Int
  $nextToken: String
) {
  studentsByTeacherID(
    teacherID: $teacherID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      teacherID
      createdAt
      updatedAt
      studentUkuleleId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StudentsByTeacherIDQueryVariables,
  APITypes.StudentsByTeacherIDQuery
>;
