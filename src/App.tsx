import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import logo from './logo.svg';
import { withAuthenticator, AmplifySignOut, AmplifyAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react';
import './App.css';
import { FormRenderer, Schema } from '@data-driven-forms/react-form-renderer';
import { FormTemplate } from '@data-driven-forms/mui-component-mapper';
import componentMapper from '@data-driven-forms/mui-component-mapper/component-mapper';
import componentTypes from '@data-driven-forms/react-form-renderer/component-types';
import { Container, Box } from '@material-ui/core';
import { DataStore } from '@aws-amplify/datastore';
import { Package, Task } from './models';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { onUpdateTask } from './graphql/subscriptions';
import { updateDecorator } from 'typescript';


const schema: Schema = {
  fields: [
    { component: componentTypes.SELECT, name: "Connection", label: "Connection",
      options: [
        { label: "EHR", value: "EHR" },
        { label: "DWH", value: "DWH" }]
    },
    { component: componentTypes.TEXT_FIELD, name: "TableName", label: "Table Name" },
    { component: componentTypes.SELECT, name: "Package", label: "Package", options: [] }
]
}

const taskColumns = [
  {field: 'Connection', headerName: 'Connection', flex: 1 },
  {field: 'TableName', headerName: 'Table Name', flex: 1 }
  ];


function App() {

  const [tasks, setTasks] = useState<any[]>([]);
  const [task, setTask] = useState<any>();

  useEffect( () => { fetchTasks() }, [] );
  useEffect( () => { startSubscription() }, [] );

  async function fetchTasks() {
    try {
      const tasks: Task[] = await DataStore.query(Task);
      const packages: Package[] = await DataStore.query(Package);

      setTasks(tasks);
      console.log("Tasks are set to", tasks);

    } catch (err) { console.log('error') }
  }

  function startSubscription() {
    const subscription = DataStore.observe(Task).subscribe(msg => {

      if (msg.opType === 'UPDATE') {

        const newTask = msg.element;

        setTask(newTask);

        setTasks( (tasks) => {
          console.log(msg.element);
          const idx = tasks.findIndex(o => o.id === newTask.id);

          let newTasks = [...tasks];

          if (idx >= 0) {
            newTasks[idx] = newTask;
          }

          return newTasks;
        }
        );
      }
    });

    return () => { subscription.unsubscribe() };
  }



  const submit = (data: any): void => {
    const updated = Task.copyOf( task, t => {
      t.TableName = data.TableName;
      t.Connection = data.Connection;
    })
    DataStore.save( updated );

    setTask(updated);
  }

  return (
    <AmplifyAuthenticator >
      <AmplifySignIn slot="sign-in" hideSignUp={true}/>

      <Container maxWidth="sm">

        <Box sx={{ my: 4 }}>
          <DataGrid
            rows={tasks}
            columns={taskColumns}
            components={{Toolbar: GridToolbar}}
            onRowClick={(e) => setTask(e.row)}
            autoHeight
            />
        </Box>

        <Box sx={{ my: 4 }}>
          <FormRenderer
            schema={schema}
            onSubmit={submit}
            FormTemplate={FormTemplate}
            componentMapper={componentMapper}
            initialValues={task}
          />
        </Box>
        <Box sx={{ my: 4 }}>
          <AmplifySignOut />
        </Box>
      </Container>
    </AmplifyAuthenticator>
  );
}

export default App;
