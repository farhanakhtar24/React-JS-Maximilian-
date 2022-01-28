import React, { useCallback, useState } from 'react';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button';

function App() {
  const [showPara, setshowPara] = useState(false);
  useCallback();
  console.log("App running");

  const togglePara = function () {
    setshowPara(prevShowPara => !prevShowPara);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={ showPara }></DemoOutput>
      <Button onClick={ togglePara }>Toggle Para</Button>
    </div>
  );
}

export default App;
