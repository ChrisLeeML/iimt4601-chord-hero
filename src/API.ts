/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateReportInput = {
  id?: string | null,
  content?: string | null,
  teacherID: string,
  ukuleleID: string,
};

export type ModelReportConditionInput = {
  content?: ModelStringInput | null,
  teacherID?: ModelIDInput | null,
  ukuleleID?: ModelIDInput | null,
  and?: Array< ModelReportConditionInput | null > | null,
  or?: Array< ModelReportConditionInput | null > | null,
  not?: ModelReportConditionInput | null,
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

export type Report = {
  __typename: "Report",
  id: string,
  content?: string | null,
  teacherID: string,
  ukuleleID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateReportInput = {
  id: string,
  content?: string | null,
  teacherID?: string | null,
  ukuleleID?: string | null,
};

export type DeleteReportInput = {
  id: string,
};

export type CreateOrderInput = {
  id?: string | null,
  teacherID: string,
};

export type ModelOrderConditionInput = {
  teacherID?: ModelIDInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
};

export type Order = {
  __typename: "Order",
  id: string,
  teacherID: string,
  Ukuleles?: ModelUkuleleConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelUkuleleConnection = {
  __typename: "ModelUkuleleConnection",
  items:  Array<Ukulele | null >,
  nextToken?: string | null,
};

export type Ukulele = {
  __typename: "Ukulele",
  id: string,
  teacherID: string,
  Reports?: ModelReportConnection | null,
  orderID: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelReportConnection = {
  __typename: "ModelReportConnection",
  items:  Array<Report | null >,
  nextToken?: string | null,
};

export type UpdateOrderInput = {
  id: string,
  teacherID?: string | null,
};

export type DeleteOrderInput = {
  id: string,
};

export type CreateProductInput = {
  id?: string | null,
  name?: string | null,
  price?: string | null,
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null,
  price?: ModelStringInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  name?: string | null,
  price?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProductInput = {
  id: string,
  name?: string | null,
  price?: string | null,
};

export type DeleteProductInput = {
  id: string,
};

export type CreateTeacherInput = {
  id?: string | null,
  name?: string | null,
};

export type ModelTeacherConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelTeacherConditionInput | null > | null,
  or?: Array< ModelTeacherConditionInput | null > | null,
  not?: ModelTeacherConditionInput | null,
};

export type Teacher = {
  __typename: "Teacher",
  id: string,
  name?: string | null,
  Students?: ModelStudentConnection | null,
  Ukuleles?: ModelUkuleleConnection | null,
  Orders?: ModelOrderConnection | null,
  Reports?: ModelReportConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelStudentConnection = {
  __typename: "ModelStudentConnection",
  items:  Array<Student | null >,
  nextToken?: string | null,
};

export type Student = {
  __typename: "Student",
  id: string,
  name?: string | null,
  teacherID: string,
  Ukulele?: Ukulele | null,
  createdAt: string,
  updatedAt: string,
  studentUkuleleId?: string | null,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
};

export type UpdateTeacherInput = {
  id: string,
  name?: string | null,
};

export type DeleteTeacherInput = {
  id: string,
};

export type CreateUkuleleInput = {
  id?: string | null,
  teacherID: string,
  orderID: string,
};

export type ModelUkuleleConditionInput = {
  teacherID?: ModelIDInput | null,
  orderID?: ModelIDInput | null,
  and?: Array< ModelUkuleleConditionInput | null > | null,
  or?: Array< ModelUkuleleConditionInput | null > | null,
  not?: ModelUkuleleConditionInput | null,
};

export type UpdateUkuleleInput = {
  id: string,
  teacherID?: string | null,
  orderID?: string | null,
};

export type DeleteUkuleleInput = {
  id: string,
};

export type CreateStudentInput = {
  id?: string | null,
  name?: string | null,
  teacherID: string,
  studentUkuleleId?: string | null,
};

export type ModelStudentConditionInput = {
  name?: ModelStringInput | null,
  teacherID?: ModelIDInput | null,
  and?: Array< ModelStudentConditionInput | null > | null,
  or?: Array< ModelStudentConditionInput | null > | null,
  not?: ModelStudentConditionInput | null,
  studentUkuleleId?: ModelIDInput | null,
};

export type UpdateStudentInput = {
  id: string,
  name?: string | null,
  teacherID?: string | null,
  studentUkuleleId?: string | null,
};

export type DeleteStudentInput = {
  id: string,
};

export type ModelReportFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  teacherID?: ModelIDInput | null,
  ukuleleID?: ModelIDInput | null,
  and?: Array< ModelReportFilterInput | null > | null,
  or?: Array< ModelReportFilterInput | null > | null,
  not?: ModelReportFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  teacherID?: ModelIDInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  price?: ModelStringInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
};

export type ModelTeacherFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelTeacherFilterInput | null > | null,
  or?: Array< ModelTeacherFilterInput | null > | null,
  not?: ModelTeacherFilterInput | null,
};

export type ModelTeacherConnection = {
  __typename: "ModelTeacherConnection",
  items:  Array<Teacher | null >,
  nextToken?: string | null,
};

export type ModelUkuleleFilterInput = {
  id?: ModelIDInput | null,
  teacherID?: ModelIDInput | null,
  orderID?: ModelIDInput | null,
  and?: Array< ModelUkuleleFilterInput | null > | null,
  or?: Array< ModelUkuleleFilterInput | null > | null,
  not?: ModelUkuleleFilterInput | null,
};

export type ModelStudentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  teacherID?: ModelIDInput | null,
  and?: Array< ModelStudentFilterInput | null > | null,
  or?: Array< ModelStudentFilterInput | null > | null,
  not?: ModelStudentFilterInput | null,
  studentUkuleleId?: ModelIDInput | null,
};

export type ModelSubscriptionReportFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  teacherID?: ModelSubscriptionIDInput | null,
  ukuleleID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionReportFilterInput | null > | null,
  or?: Array< ModelSubscriptionReportFilterInput | null > | null,
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

export type ModelSubscriptionOrderFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  teacherID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionOrderFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrderFilterInput | null > | null,
};

export type ModelSubscriptionProductFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProductFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductFilterInput | null > | null,
};

export type ModelSubscriptionTeacherFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTeacherFilterInput | null > | null,
  or?: Array< ModelSubscriptionTeacherFilterInput | null > | null,
};

export type ModelSubscriptionUkuleleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  teacherID?: ModelSubscriptionIDInput | null,
  orderID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUkuleleFilterInput | null > | null,
  or?: Array< ModelSubscriptionUkuleleFilterInput | null > | null,
};

export type ModelSubscriptionStudentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  teacherID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionStudentFilterInput | null > | null,
  or?: Array< ModelSubscriptionStudentFilterInput | null > | null,
};

export type CreateReportMutationVariables = {
  input: CreateReportInput,
  condition?: ModelReportConditionInput | null,
};

export type CreateReportMutation = {
  createReport?:  {
    __typename: "Report",
    id: string,
    content?: string | null,
    teacherID: string,
    ukuleleID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateReportMutationVariables = {
  input: UpdateReportInput,
  condition?: ModelReportConditionInput | null,
};

export type UpdateReportMutation = {
  updateReport?:  {
    __typename: "Report",
    id: string,
    content?: string | null,
    teacherID: string,
    ukuleleID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteReportMutationVariables = {
  input: DeleteReportInput,
  condition?: ModelReportConditionInput | null,
};

export type DeleteReportMutation = {
  deleteReport?:  {
    __typename: "Report",
    id: string,
    content?: string | null,
    teacherID: string,
    ukuleleID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    teacherID: string,
    Ukuleles?:  {
      __typename: "ModelUkuleleConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    teacherID: string,
    Ukuleles?:  {
      __typename: "ModelUkuleleConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    teacherID: string,
    Ukuleles?:  {
      __typename: "ModelUkuleleConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    price?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    price?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    price?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTeacherMutationVariables = {
  input: CreateTeacherInput,
  condition?: ModelTeacherConditionInput | null,
};

export type CreateTeacherMutation = {
  createTeacher?:  {
    __typename: "Teacher",
    id: string,
    name?: string | null,
    Students?:  {
      __typename: "ModelStudentConnection",
      nextToken?: string | null,
    } | null,
    Ukuleles?:  {
      __typename: "ModelUkuleleConnection",
      nextToken?: string | null,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    Reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTeacherMutationVariables = {
  input: UpdateTeacherInput,
  condition?: ModelTeacherConditionInput | null,
};

export type UpdateTeacherMutation = {
  updateTeacher?:  {
    __typename: "Teacher",
    id: string,
    name?: string | null,
    Students?:  {
      __typename: "ModelStudentConnection",
      nextToken?: string | null,
    } | null,
    Ukuleles?:  {
      __typename: "ModelUkuleleConnection",
      nextToken?: string | null,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    Reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTeacherMutationVariables = {
  input: DeleteTeacherInput,
  condition?: ModelTeacherConditionInput | null,
};

export type DeleteTeacherMutation = {
  deleteTeacher?:  {
    __typename: "Teacher",
    id: string,
    name?: string | null,
    Students?:  {
      __typename: "ModelStudentConnection",
      nextToken?: string | null,
    } | null,
    Ukuleles?:  {
      __typename: "ModelUkuleleConnection",
      nextToken?: string | null,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    Reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
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
    teacherID: string,
    Reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    orderID: string,
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
    teacherID: string,
    Reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    orderID: string,
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
    teacherID: string,
    Reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    orderID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStudentMutationVariables = {
  input: CreateStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type CreateStudentMutation = {
  createStudent?:  {
    __typename: "Student",
    id: string,
    name?: string | null,
    teacherID: string,
    Ukulele?:  {
      __typename: "Ukulele",
      id: string,
      teacherID: string,
      orderID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    studentUkuleleId?: string | null,
  } | null,
};

export type UpdateStudentMutationVariables = {
  input: UpdateStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type UpdateStudentMutation = {
  updateStudent?:  {
    __typename: "Student",
    id: string,
    name?: string | null,
    teacherID: string,
    Ukulele?:  {
      __typename: "Ukulele",
      id: string,
      teacherID: string,
      orderID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    studentUkuleleId?: string | null,
  } | null,
};

export type DeleteStudentMutationVariables = {
  input: DeleteStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type DeleteStudentMutation = {
  deleteStudent?:  {
    __typename: "Student",
    id: string,
    name?: string | null,
    teacherID: string,
    Ukulele?:  {
      __typename: "Ukulele",
      id: string,
      teacherID: string,
      orderID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    studentUkuleleId?: string | null,
  } | null,
};

export type GetReportQueryVariables = {
  id: string,
};

export type GetReportQuery = {
  getReport?:  {
    __typename: "Report",
    id: string,
    content?: string | null,
    teacherID: string,
    ukuleleID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListReportsQueryVariables = {
  filter?: ModelReportFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReportsQuery = {
  listReports?:  {
    __typename: "ModelReportConnection",
    items:  Array< {
      __typename: "Report",
      id: string,
      content?: string | null,
      teacherID: string,
      ukuleleID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ReportsByTeacherIDQueryVariables = {
  teacherID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelReportFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ReportsByTeacherIDQuery = {
  reportsByTeacherID?:  {
    __typename: "ModelReportConnection",
    items:  Array< {
      __typename: "Report",
      id: string,
      content?: string | null,
      teacherID: string,
      ukuleleID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ReportsByUkuleleIDQueryVariables = {
  ukuleleID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelReportFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ReportsByUkuleleIDQuery = {
  reportsByUkuleleID?:  {
    __typename: "ModelReportConnection",
    items:  Array< {
      __typename: "Report",
      id: string,
      content?: string | null,
      teacherID: string,
      ukuleleID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    teacherID: string,
    Ukuleles?:  {
      __typename: "ModelUkuleleConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      teacherID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OrdersByTeacherIDQueryVariables = {
  teacherID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrdersByTeacherIDQuery = {
  ordersByTeacherID?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      teacherID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    price?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name?: string | null,
      price?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTeacherQueryVariables = {
  id: string,
};

export type GetTeacherQuery = {
  getTeacher?:  {
    __typename: "Teacher",
    id: string,
    name?: string | null,
    Students?:  {
      __typename: "ModelStudentConnection",
      nextToken?: string | null,
    } | null,
    Ukuleles?:  {
      __typename: "ModelUkuleleConnection",
      nextToken?: string | null,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    Reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTeachersQueryVariables = {
  filter?: ModelTeacherFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTeachersQuery = {
  listTeachers?:  {
    __typename: "ModelTeacherConnection",
    items:  Array< {
      __typename: "Teacher",
      id: string,
      name?: string | null,
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
    teacherID: string,
    Reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    orderID: string,
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
      teacherID: string,
      orderID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UkulelesByTeacherIDQueryVariables = {
  teacherID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUkuleleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UkulelesByTeacherIDQuery = {
  ukulelesByTeacherID?:  {
    __typename: "ModelUkuleleConnection",
    items:  Array< {
      __typename: "Ukulele",
      id: string,
      teacherID: string,
      orderID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UkulelesByOrderIDQueryVariables = {
  orderID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUkuleleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UkulelesByOrderIDQuery = {
  ukulelesByOrderID?:  {
    __typename: "ModelUkuleleConnection",
    items:  Array< {
      __typename: "Ukulele",
      id: string,
      teacherID: string,
      orderID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStudentQueryVariables = {
  id: string,
};

export type GetStudentQuery = {
  getStudent?:  {
    __typename: "Student",
    id: string,
    name?: string | null,
    teacherID: string,
    Ukulele?:  {
      __typename: "Ukulele",
      id: string,
      teacherID: string,
      orderID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    studentUkuleleId?: string | null,
  } | null,
};

export type ListStudentsQueryVariables = {
  filter?: ModelStudentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStudentsQuery = {
  listStudents?:  {
    __typename: "ModelStudentConnection",
    items:  Array< {
      __typename: "Student",
      id: string,
      name?: string | null,
      teacherID: string,
      createdAt: string,
      updatedAt: string,
      studentUkuleleId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type StudentsByTeacherIDQueryVariables = {
  teacherID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStudentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StudentsByTeacherIDQuery = {
  studentsByTeacherID?:  {
    __typename: "ModelStudentConnection",
    items:  Array< {
      __typename: "Student",
      id: string,
      name?: string | null,
      teacherID: string,
      createdAt: string,
      updatedAt: string,
      studentUkuleleId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateReportSubscriptionVariables = {
  filter?: ModelSubscriptionReportFilterInput | null,
};

export type OnCreateReportSubscription = {
  onCreateReport?:  {
    __typename: "Report",
    id: string,
    content?: string | null,
    teacherID: string,
    ukuleleID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateReportSubscriptionVariables = {
  filter?: ModelSubscriptionReportFilterInput | null,
};

export type OnUpdateReportSubscription = {
  onUpdateReport?:  {
    __typename: "Report",
    id: string,
    content?: string | null,
    teacherID: string,
    ukuleleID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteReportSubscriptionVariables = {
  filter?: ModelSubscriptionReportFilterInput | null,
};

export type OnDeleteReportSubscription = {
  onDeleteReport?:  {
    __typename: "Report",
    id: string,
    content?: string | null,
    teacherID: string,
    ukuleleID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    teacherID: string,
    Ukuleles?:  {
      __typename: "ModelUkuleleConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    teacherID: string,
    Ukuleles?:  {
      __typename: "ModelUkuleleConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    teacherID: string,
    Ukuleles?:  {
      __typename: "ModelUkuleleConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    price?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    price?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    price?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTeacherSubscriptionVariables = {
  filter?: ModelSubscriptionTeacherFilterInput | null,
};

export type OnCreateTeacherSubscription = {
  onCreateTeacher?:  {
    __typename: "Teacher",
    id: string,
    name?: string | null,
    Students?:  {
      __typename: "ModelStudentConnection",
      nextToken?: string | null,
    } | null,
    Ukuleles?:  {
      __typename: "ModelUkuleleConnection",
      nextToken?: string | null,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    Reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTeacherSubscriptionVariables = {
  filter?: ModelSubscriptionTeacherFilterInput | null,
};

export type OnUpdateTeacherSubscription = {
  onUpdateTeacher?:  {
    __typename: "Teacher",
    id: string,
    name?: string | null,
    Students?:  {
      __typename: "ModelStudentConnection",
      nextToken?: string | null,
    } | null,
    Ukuleles?:  {
      __typename: "ModelUkuleleConnection",
      nextToken?: string | null,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    Reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTeacherSubscriptionVariables = {
  filter?: ModelSubscriptionTeacherFilterInput | null,
};

export type OnDeleteTeacherSubscription = {
  onDeleteTeacher?:  {
    __typename: "Teacher",
    id: string,
    name?: string | null,
    Students?:  {
      __typename: "ModelStudentConnection",
      nextToken?: string | null,
    } | null,
    Ukuleles?:  {
      __typename: "ModelUkuleleConnection",
      nextToken?: string | null,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    Reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
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
    teacherID: string,
    Reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    orderID: string,
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
    teacherID: string,
    Reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    orderID: string,
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
    teacherID: string,
    Reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    orderID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStudentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentFilterInput | null,
};

export type OnCreateStudentSubscription = {
  onCreateStudent?:  {
    __typename: "Student",
    id: string,
    name?: string | null,
    teacherID: string,
    Ukulele?:  {
      __typename: "Ukulele",
      id: string,
      teacherID: string,
      orderID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    studentUkuleleId?: string | null,
  } | null,
};

export type OnUpdateStudentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentFilterInput | null,
};

export type OnUpdateStudentSubscription = {
  onUpdateStudent?:  {
    __typename: "Student",
    id: string,
    name?: string | null,
    teacherID: string,
    Ukulele?:  {
      __typename: "Ukulele",
      id: string,
      teacherID: string,
      orderID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    studentUkuleleId?: string | null,
  } | null,
};

export type OnDeleteStudentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentFilterInput | null,
};

export type OnDeleteStudentSubscription = {
  onDeleteStudent?:  {
    __typename: "Student",
    id: string,
    name?: string | null,
    teacherID: string,
    Ukulele?:  {
      __typename: "Ukulele",
      id: string,
      teacherID: string,
      orderID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    studentUkuleleId?: string | null,
  } | null,
};
