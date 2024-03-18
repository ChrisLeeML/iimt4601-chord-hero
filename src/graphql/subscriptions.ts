/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateReport = /* GraphQL */ `subscription OnCreateReport($filter: ModelSubscriptionReportFilterInput) {
  onCreateReport(filter: $filter) {
    id
    content
    teacherID
    ukuleleID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateReportSubscriptionVariables,
  APITypes.OnCreateReportSubscription
>;
export const onUpdateReport = /* GraphQL */ `subscription OnUpdateReport($filter: ModelSubscriptionReportFilterInput) {
  onUpdateReport(filter: $filter) {
    id
    content
    teacherID
    ukuleleID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateReportSubscriptionVariables,
  APITypes.OnUpdateReportSubscription
>;
export const onDeleteReport = /* GraphQL */ `subscription OnDeleteReport($filter: ModelSubscriptionReportFilterInput) {
  onDeleteReport(filter: $filter) {
    id
    content
    teacherID
    ukuleleID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteReportSubscriptionVariables,
  APITypes.OnDeleteReportSubscription
>;
export const onCreateOrder = /* GraphQL */ `subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
  onCreateOrder(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateOrderSubscriptionVariables,
  APITypes.OnCreateOrderSubscription
>;
export const onUpdateOrder = /* GraphQL */ `subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
  onUpdateOrder(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateOrderSubscriptionVariables,
  APITypes.OnUpdateOrderSubscription
>;
export const onDeleteOrder = /* GraphQL */ `subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
  onDeleteOrder(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteOrderSubscriptionVariables,
  APITypes.OnDeleteOrderSubscription
>;
export const onCreateProduct = /* GraphQL */ `subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
  onCreateProduct(filter: $filter) {
    id
    name
    price
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProductSubscriptionVariables,
  APITypes.OnCreateProductSubscription
>;
export const onUpdateProduct = /* GraphQL */ `subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
  onUpdateProduct(filter: $filter) {
    id
    name
    price
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProductSubscriptionVariables,
  APITypes.OnUpdateProductSubscription
>;
export const onDeleteProduct = /* GraphQL */ `subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
  onDeleteProduct(filter: $filter) {
    id
    name
    price
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProductSubscriptionVariables,
  APITypes.OnDeleteProductSubscription
>;
export const onCreateTeacher = /* GraphQL */ `subscription OnCreateTeacher($filter: ModelSubscriptionTeacherFilterInput) {
  onCreateTeacher(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTeacherSubscriptionVariables,
  APITypes.OnCreateTeacherSubscription
>;
export const onUpdateTeacher = /* GraphQL */ `subscription OnUpdateTeacher($filter: ModelSubscriptionTeacherFilterInput) {
  onUpdateTeacher(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTeacherSubscriptionVariables,
  APITypes.OnUpdateTeacherSubscription
>;
export const onDeleteTeacher = /* GraphQL */ `subscription OnDeleteTeacher($filter: ModelSubscriptionTeacherFilterInput) {
  onDeleteTeacher(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTeacherSubscriptionVariables,
  APITypes.OnDeleteTeacherSubscription
>;
export const onCreateUkulele = /* GraphQL */ `subscription OnCreateUkulele($filter: ModelSubscriptionUkuleleFilterInput) {
  onCreateUkulele(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUkuleleSubscriptionVariables,
  APITypes.OnCreateUkuleleSubscription
>;
export const onUpdateUkulele = /* GraphQL */ `subscription OnUpdateUkulele($filter: ModelSubscriptionUkuleleFilterInput) {
  onUpdateUkulele(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUkuleleSubscriptionVariables,
  APITypes.OnUpdateUkuleleSubscription
>;
export const onDeleteUkulele = /* GraphQL */ `subscription OnDeleteUkulele($filter: ModelSubscriptionUkuleleFilterInput) {
  onDeleteUkulele(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUkuleleSubscriptionVariables,
  APITypes.OnDeleteUkuleleSubscription
>;
export const onCreateStudent = /* GraphQL */ `subscription OnCreateStudent($filter: ModelSubscriptionStudentFilterInput) {
  onCreateStudent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateStudentSubscriptionVariables,
  APITypes.OnCreateStudentSubscription
>;
export const onUpdateStudent = /* GraphQL */ `subscription OnUpdateStudent($filter: ModelSubscriptionStudentFilterInput) {
  onUpdateStudent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateStudentSubscriptionVariables,
  APITypes.OnUpdateStudentSubscription
>;
export const onDeleteStudent = /* GraphQL */ `subscription OnDeleteStudent($filter: ModelSubscriptionStudentFilterInput) {
  onDeleteStudent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteStudentSubscriptionVariables,
  APITypes.OnDeleteStudentSubscription
>;
