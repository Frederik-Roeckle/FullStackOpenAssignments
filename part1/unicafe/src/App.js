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
      <Button label="good" handleFunction={() => handleButtonGood()} />
      <Button label="neutral" handleFunction={() => handleButtonNeutral()} />
      <Button label="bad" handleFunction={() => handleButtonBad()} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  function average() {
    return (good - bad) / all();
  }

  function all() {
    return good + bad + neutral;
  }

  function positve() {
    return ((good / all()) * 100).toString() + "%";
  }

  if (all() === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine label="good" value={good} />
          <StatisticLine label="neutral" value={neutral} />
          <StatisticLine label="bad" value={bad} />
          <StatisticLine label="all" value={all()} />
          <StatisticLine label="average" value={average()} />
          <StatisticLine label="positive" value={positve()} />
        </tbody>
      </table>
    </div>
  );
};

const StatisticLine = (props) => {
  const { label, value } = props;

  return (
    <tr>
      <td>{label}</td>
      <td>{value}</td>
    </tr>
  );
};

const Button = (props) => {
  const { label, handleFunction } = props;

  return <button onClick={handleFunction}>{label}</button>;
};

export default App;
