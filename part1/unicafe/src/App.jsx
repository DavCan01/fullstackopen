

import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = () => good + bad + neutral;
  const average = () => (good - bad) / total();
  const positive = () => (good / total()) * 100;

  const increaseFeedback = (statistic) => {

    switch (statistic) {
      case "good":
        setGood(good => good + 1);
      break;

      case "neutral":
        setNeutral(neutral => neutral + 1);
      break;

      case "bad":
        setBad(bad => bad + 1);
      break;

    }
  }

  return (
    <div>
      <h1> Give feedback </h1>
      <Button onClick={() => increaseFeedback("good")} text='good' />
      <Button onClick={() => increaseFeedback("neutral")} text='neutral' />
      <Button onClick={() => increaseFeedback("bad")} text='bad' />

      <h1> Statistics </h1>
      <p> good {good} </p>
      <p> neutral {neutral} </p>
      <p> bad {bad} </p>

      <p> all {total()} </p>
      <p> average {average()} </p>
      <p> positive {positive()} % </p>
    </div>
  )
}

export default App