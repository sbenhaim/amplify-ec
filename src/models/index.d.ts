import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PackageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TaskMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Package {
  readonly id: string;
  readonly Name: string;
  readonly org?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Package, PackageMetaData>);
  static copyOf(source: Package, mutator: (draft: MutableModel<Package, PackageMetaData>) => MutableModel<Package, PackageMetaData> | void): Package;
}

export declare class Task {
  readonly id: string;
  readonly TableName: string;
  readonly Package: Package;
  readonly Connection?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Task, TaskMetaData>);
  static copyOf(source: Task, mutator: (draft: MutableModel<Task, TaskMetaData>) => MutableModel<Task, TaskMetaData> | void): Task;
}