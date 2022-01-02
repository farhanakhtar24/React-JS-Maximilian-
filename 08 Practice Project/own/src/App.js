import React, { useState } from 'react';
import classes from './App.module.css';
import Form from './Components/Input Form/Form';

import ItemListRenderer from './Components/Item List/ItemListRenderer';

const Inputlabels = ['Username', 'Age (in Years)']

const DummyUserist = [
  {
    key: 'u1',
    username: 'Farhan Akhtar',
    age: 19
  },
  {
    key: 'u2',
    username: 'Farhan Akhtar',
    age: 19
  },
  {
    key: 'u3',
    username: 'Farhan Akhtar',
    age: 19
  },
];

function App() {

  const [A, setA] = useState([]);

  const updateA = function (userName, Age) {
    setA(
      [...A, {
        key: Math.random(),
        username: userName,
        age: Age,
      }]
    );
  }


  return (
    <div className={ classes.AppDiv }>
      <Form InputArray={ Inputlabels } onAdd={ updateA }></Form>
      <ItemListRenderer UserList={ A } ></ItemListRenderer>
    </div>
  );
}

export default App;


// A.push({
// key: Math.random(),
//   username: userName,
//     age: Age,
// })