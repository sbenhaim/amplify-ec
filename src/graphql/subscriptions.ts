/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePackage = /* GraphQL */ `
  subscription OnCreatePackage {
    onCreatePackage {
      id
      Name
      org
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePackage = /* GraphQL */ `
  subscription OnUpdatePackage {
    onUpdatePackage {
      id
      Name
      org
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePackage = /* GraphQL */ `
  subscription OnDeletePackage {
    onDeletePackage {
      id
      Name
      org
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
      id
      TableName
      Connection
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Package {
        id
        Name
        org
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
      id
      TableName
      Connection
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Package {
        id
        Name
        org
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
      id
      TableName
      Connection
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Package {
        id
        Name
        org
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
