import React, { Fragment, useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const inputRef = useRef('');
  const nameref = useRef();
  useEffect(() => {
    nameref.current = name;
  });

  // const focus = function () {
  //   inputRef.current.focus();
  // }

  return (
    <Fragment>
      <input ref={ inputRef } type='text' value={ name } onChange={ e => setName(e.target.value) }></input>
      <div>My name is { name } it used to be { nameref.current }</div>
      {/* <button onClick={ focus }>Focus</button> */ }
    </Fragment>
  );
}

export default App;
