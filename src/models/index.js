// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Package, Task } = initSchema(schema);

export {
  Package,
  Task
};