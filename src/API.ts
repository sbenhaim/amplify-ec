/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePackageInput = {
  id?: string | null,
  Name: string,
  org?: string | null,
  _version?: number | null,
};

export type ModelPackageConditionInput = {
  Name?: ModelStringInput | null,
  and?: Array< ModelPackageConditionInput | null > | null,
  or?: Array< ModelPackageConditionInput | null > | null,
  not?: ModelPackageConditionInput | null,
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

export type Package = {
  __typename: "Package",
  id: string,
  Name: string,
  org?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePackageInput = {
  id: string,
  Name?: string | null,
  org?: string | null,
  _version?: number | null,
};

export type DeletePackageInput = {
  id: string,
  _version?: number | null,
};

export type CreateTaskInput = {
  id?: string | null,
  TableName: string,
  Connection?: string | null,
  _version?: number | null,
  taskPackageId: string,
};

export type ModelTaskConditionInput = {
  TableName?: ModelStringInput | null,
  Connection?: ModelStringInput | null,
  and?: Array< ModelTaskConditionInput | null > | null,
  or?: Array< ModelTaskConditionInput | null > | null,
  not?: ModelTaskConditionInput | null,
};

export type Task = {
  __typename: "Task",
  id: string,
  TableName: string,
  Connection?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  Package: Package,
};

export type UpdateTaskInput = {
  id: string,
  TableName?: string | null,
  Connection?: string | null,
  _version?: number | null,
  taskPackageId?: string | null,
};

export type DeleteTaskInput = {
  id: string,
  _version?: number | null,
};

export type ModelPackageFilterInput = {
  id?: ModelIDInput | null,
  Name?: ModelStringInput | null,
  org?: ModelStringInput | null,
  and?: Array< ModelPackageFilterInput | null > | null,
  or?: Array< ModelPackageFilterInput | null > | null,
  not?: ModelPackageFilterInput | null,
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

export type ModelPackageConnection = {
  __typename: "ModelPackageConnection",
  items?:  Array<Package | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelTaskFilterInput = {
  id?: ModelIDInput | null,
  TableName?: ModelStringInput | null,
  Connection?: ModelStringInput | null,
  and?: Array< ModelTaskFilterInput | null > | null,
  or?: Array< ModelTaskFilterInput | null > | null,
  not?: ModelTaskFilterInput | null,
};

export type ModelTaskConnection = {
  __typename: "ModelTaskConnection",
  items?:  Array<Task | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreatePackageMutationVariables = {
  input: CreatePackageInput,
  condition?: ModelPackageConditionInput | null,
};

export type CreatePackageMutation = {
  createPackage?:  {
    __typename: "Package",
    id: string,
    Name: string,
    org?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePackageMutationVariables = {
  input: UpdatePackageInput,
  condition?: ModelPackageConditionInput | null,
};

export type UpdatePackageMutation = {
  updatePackage?:  {
    __typename: "Package",
    id: string,
    Name: string,
    org?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePackageMutationVariables = {
  input: DeletePackageInput,
  condition?: ModelPackageConditionInput | null,
};

export type DeletePackageMutation = {
  deletePackage?:  {
    __typename: "Package",
    id: string,
    Name: string,
    org?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTaskMutationVariables = {
  input: CreateTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type CreateTaskMutation = {
  createTask?:  {
    __typename: "Task",
    id: string,
    TableName: string,
    Connection?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Package:  {
      __typename: "Package",
      id: string,
      Name: string,
      org?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type UpdateTaskMutationVariables = {
  input: UpdateTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type UpdateTaskMutation = {
  updateTask?:  {
    __typename: "Task",
    id: string,
    TableName: string,
    Connection?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Package:  {
      __typename: "Package",
      id: string,
      Name: string,
      org?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type DeleteTaskMutationVariables = {
  input: DeleteTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type DeleteTaskMutation = {
  deleteTask?:  {
    __typename: "Task",
    id: string,
    TableName: string,
    Connection?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Package:  {
      __typename: "Package",
      id: string,
      Name: string,
      org?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type GetPackageQueryVariables = {
  id: string,
};

export type GetPackageQuery = {
  getPackage?:  {
    __typename: "Package",
    id: string,
    Name: string,
    org?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPackagesQueryVariables = {
  filter?: ModelPackageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPackagesQuery = {
  listPackages?:  {
    __typename: "ModelPackageConnection",
    items?:  Array< {
      __typename: "Package",
      id: string,
      Name: string,
      org?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPackagesQueryVariables = {
  filter?: ModelPackageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPackagesQuery = {
  syncPackages?:  {
    __typename: "ModelPackageConnection",
    items?:  Array< {
      __typename: "Package",
      id: string,
      Name: string,
      org?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTaskQueryVariables = {
  id: string,
};

export type GetTaskQuery = {
  getTask?:  {
    __typename: "Task",
    id: string,
    TableName: string,
    Connection?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Package:  {
      __typename: "Package",
      id: string,
      Name: string,
      org?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type ListTasksQueryVariables = {
  filter?: ModelTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTasksQuery = {
  listTasks?:  {
    __typename: "ModelTaskConnection",
    items?:  Array< {
      __typename: "Task",
      id: string,
      TableName: string,
      Connection?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTasksQueryVariables = {
  filter?: ModelTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTasksQuery = {
  syncTasks?:  {
    __typename: "ModelTaskConnection",
    items?:  Array< {
      __typename: "Task",
      id: string,
      TableName: string,
      Connection?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreatePackageSubscription = {
  onCreatePackage?:  {
    __typename: "Package",
    id: string,
    Name: string,
    org?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePackageSubscription = {
  onUpdatePackage?:  {
    __typename: "Package",
    id: string,
    Name: string,
    org?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePackageSubscription = {
  onDeletePackage?:  {
    __typename: "Package",
    id: string,
    Name: string,
    org?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTaskSubscription = {
  onCreateTask?:  {
    __typename: "Task",
    id: string,
    TableName: string,
    Connection?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Package:  {
      __typename: "Package",
      id: string,
      Name: string,
      org?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnUpdateTaskSubscription = {
  onUpdateTask?:  {
    __typename: "Task",
    id: string,
    TableName: string,
    Connection?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Package:  {
      __typename: "Package",
      id: string,
      Name: string,
      org?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnDeleteTaskSubscription = {
  onDeleteTask?:  {
    __typename: "Task",
    id: string,
    TableName: string,
    Connection?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Package:  {
      __typename: "Package",
      id: string,
      Name: string,
      org?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};
