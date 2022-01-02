import React from 'react';
import classes from './App.module.css';
import Form from './Components/Input Form/Form';

import ItemListRenderer from './Components/Item List/ItemListRenderer';

const Inputlabels = ['Username', 'Age (in Years)']

const DummyUserist = [
  {
    id: 'u1',
    username: 'Farhan Akhtar',
    age: 19
  },
  {
    id: 'u2',
    username: 'Farhan Akhtar',
    age: 19
  },
  {
    id: 'u3',
    username: 'Farhan Akhtar',
    age: 19
  },
];

function App() {
  return (
    <div className={ classes.AppDiv }>
      <Form InputArray={ Inputlabels }></Form>
      <ItemListRenderer UserList={ DummyUserist }></ItemListRenderer>
    </div>
  );
}

export default App;
