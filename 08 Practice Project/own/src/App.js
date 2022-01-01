import React from 'react';
import classes from './App.module.css';
import Form from './Components/Input Form/Form';

const InputItems = ['Username', 'Age (in Years)']

function App() {
  return (
    <div className={ classes.AppDiv }>
      <Form InputArray={ InputItems }></Form>
    </div>
  );
}

export default App;
