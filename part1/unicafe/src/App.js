import React, { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleButtonBad = () => setBad(bad + 1);
  const handleButtonGood = () => setGood(good + 1);
  const handleButtonNeutral = () => setNeutral(neutral + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleButtonGood}>good</button>
      <button onClick={handleButtonNeutral}>neutral</button>
      <button onClick={handleButtonBad}>bad</button>
      <br />
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  );
};

export default App;
