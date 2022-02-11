import React, { Fragment, useEffect, useMemo, useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowfunction(number)
  }, [number]);


  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark]);

  useEffect(() => {
    console.log("theme changed");
  }, [themeStyles]);

  return (
    <Fragment>
      <input type='number' value={ number } onChange={ e => setNumber(parseInt(e.target.value)) }></input>
      <button onClick={ () => setDark(prevDark => !prevDark) }>Change Theme</button>
      <div style={ themeStyles }>{ doubleNumber }</div>
    </Fragment>
  );
}

function slowfunction(number) {
  console.log("calling slow function");
  for (let i = 0; i <= 1000000000; i++) { }
  return number * 2;
}

export default App;
