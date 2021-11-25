import React, { useState } from "react";

const App = () => {
  const [history, setHistory] = useState([]);
  const [counter, setCounter] = useState(0);

  const handleLeft = () => {
    setCounter(counter + 1);
    setHistory(history.concat("L"));
  };

  const handleRight = () => {
    setCounter(counter + 1);
    setHistory(history.concat("R"));
  };

  const ResetCounter = () => {
    setCounter(0);
    setHistory([]);
  };

  return (
    <div>
      <h1>Test</h1>

      <p>Wert: {counter}</p>
      <button onMouseOver={handleLeft}>left</button>
      <button onMouseOver={handleRight}>right</button>
      <button onClick={ResetCounter}>rst</button>

      <p>Historie: {history}</p>
    </div>
  );
};

export default App;
