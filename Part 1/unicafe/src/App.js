import { useState } from "react";

const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, state }) => {
  if (text === "positive") {
    if (isNaN(state))
      return (
        <tr>
          <td>{text}</td>
          <td>0 %</td>
        </tr>
      );
    else
      return (
        <tr>
          <td>{text}</td>
          <td>{state} %</td>
        </tr>
      );
  } else {
    if (isNaN(state))
      return (
        <tr>
          <td>{text}</td>
          <td>0</td>
        </tr>
      );
    else
      return (
        <tr>
          <td>{text}</td>
          <td>{state}</td>
        </tr>
      );
  }
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  if (total === 0) return <div>No feedback given</div>;
  return (
    <table>
      <tbody>
        <StatisticLine text="good" state={good} />
        <StatisticLine text="neutral" state={neutral} />
        <StatisticLine text="bad" state={bad} />
        <StatisticLine text="all" state={total} />
        <StatisticLine text="average" state={(good - bad) / total} />
        <StatisticLine text="positive" state={(good / total) * 100} />
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedback = (feed) => () => {
    if (feed === good) return setGood(good + 1);
    else if (feed === neutral) return setNeutral(neutral + 1);
    else if (feed === bad) return setBad(bad + 1);
  };

  return (
    <div>
      <Header text="give feedback" />
      <Button text="good" onClick={feedback(good)} />
      <Button text="neutral" onClick={feedback(neutral)} />
      <Button text="bad" onClick={feedback(bad)} />
      <Header text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
