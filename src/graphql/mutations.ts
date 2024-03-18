/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createReport = /* GraphQL */ `mutation CreateReport(
  $input: CreateReportInput!
  $condition: ModelReportConditionInput
) {
  createReport(input: $input, condition: $condition) {
    id
    content
    teacherID
    ukuleleID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateReportMutationVariables,
  APITypes.CreateReportMutation
>;
export const updateReport = /* GraphQL */ `mutation UpdateReport(
  $input: UpdateReportInput!
  $condition: ModelReportConditionInput
) {
  updateReport(input: $input, condition: $condition) {
    id
    content
    teacherID
    ukuleleID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateReportMutationVariables,
  APITypes.UpdateReportMutation
>;
export const deleteReport = /* GraphQL */ `mutation DeleteReport(
  $input: DeleteReportInput!
  $condition: ModelReportConditionInput
) {
  deleteReport(input: $input, condition: $condition) {
    id
    content
    teacherID
    ukuleleID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteReportMutationVariables,
  APITypes.DeleteReportMutation
>;
export const createOrder = /* GraphQL */ `mutation CreateOrder(
  $input: CreateOrderInput!
  $condition: ModelOrderConditionInput
) {
  createOrder(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateOrderMutationVariables,
  APITypes.CreateOrderMutation
>;
export const updateOrder = /* GraphQL */ `mutation UpdateOrder(
  $input: UpdateOrderInput!
  $condition: ModelOrderConditionInput
) {
  updateOrder(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateOrderMutationVariables,
  APITypes.UpdateOrderMutation
>;
export const deleteOrder = /* GraphQL */ `mutation DeleteOrder(
  $input: DeleteOrderInput!
  $condition: ModelOrderConditionInput
) {
  deleteOrder(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteOrderMutationVariables,
  APITypes.DeleteOrderMutation
>;
export const createProduct = /* GraphQL */ `mutation CreateProduct(
  $input: CreateProductInput!
  $condition: ModelProductConditionInput
) {
  createProduct(input: $input, condition: $condition) {
    id
    name
    price
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateProductMutationVariables,
  APITypes.CreateProductMutation
>;
export const updateProduct = /* GraphQL */ `mutation UpdateProduct(
  $input: UpdateProductInput!
  $condition: ModelProductConditionInput
) {
  updateProduct(input: $input, condition: $condition) {
    id
    name
    price
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateProductMutationVariables,
  APITypes.UpdateProductMutation
>;
export const deleteProduct = /* GraphQL */ `mutation DeleteProduct(
  $input: DeleteProductInput!
  $condition: ModelProductConditionInput
) {
  deleteProduct(input: $input, condition: $condition) {
    id
    name
    price
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteProductMutationVariables,
  APITypes.DeleteProductMutation
>;
export const createTeacher = /* GraphQL */ `mutation CreateTeacher(
  $input: CreateTeacherInput!
  $condition: ModelTeacherConditionInput
) {
  createTeacher(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTeacherMutationVariables,
  APITypes.CreateTeacherMutation
>;
export const updateTeacher = /* GraphQL */ `mutation UpdateTeacher(
  $input: UpdateTeacherInput!
  $condition: ModelTeacherConditionInput
) {
  updateTeacher(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTeacherMutationVariables,
  APITypes.UpdateTeacherMutation
>;
export const deleteTeacher = /* GraphQL */ `mutation DeleteTeacher(
  $input: DeleteTeacherInput!
  $condition: ModelTeacherConditionInput
) {
  deleteTeacher(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTeacherMutationVariables,
  APITypes.DeleteTeacherMutation
>;
export const createUkulele = /* GraphQL */ `mutation CreateUkulele(
  $input: CreateUkuleleInput!
  $condition: ModelUkuleleConditionInput
) {
  createUkulele(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUkuleleMutationVariables,
  APITypes.DeleteUkuleleMutation
>;
export const createStudent = /* GraphQL */ `mutation CreateStudent(
  $input: CreateStudentInput!
  $condition: ModelStudentConditionInput
) {
  createStudent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateStudentMutationVariables,
  APITypes.CreateStudentMutation
>;
export const updateStudent = /* GraphQL */ `mutation UpdateStudent(
  $input: UpdateStudentInput!
  $condition: ModelStudentConditionInput
) {
  updateStudent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateStudentMutationVariables,
  APITypes.UpdateStudentMutation
>;
export const deleteStudent = /* GraphQL */ `mutation DeleteStudent(
  $input: DeleteStudentInput!
  $condition: ModelStudentConditionInput
) {
  deleteStudent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteStudentMutationVariables,
  APITypes.DeleteStudentMutation
>;
