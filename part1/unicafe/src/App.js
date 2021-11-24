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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

const Statistics = (prop) => {
  const { good, neutral, bad } = prop;
  function average() {
    return (good - bad) / all();
  }

  function all() {
    return good + bad + neutral;
  }

  function positve() {
    return (good / all()) * 100;
  }

  return (
    <div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all()}</p>
      <p>average {average()}</p>
      <p>positve {positve()}% </p>
    </div>
  );
};

export default App;
