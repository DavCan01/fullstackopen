

import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const StatisticLine = ({text, statistic}) => {
  return (
      <tr>
        <td>{text}</td>
        <td>{statistic}</td>
      </tr>
  )
}

const Statistics = ({good,bad,neutral}) => {

  const total = () => good + bad + neutral;
  const average = () => (good - bad) / total();
  const positive = () => (good / total()) * 100;
  
  if (total() === 0) {
    return (
    <div>    
      <h1> Statistics </h1>
      <p> No feedback given </p>
    </div>
    )
  }

  return (
  <div>
    <h1> Statistics </h1>
    <table>
      <tbody>
        <StatisticLine text={"good"} statistic={good} />
        <StatisticLine text={"neutral"} statistic={neutral} />
        <StatisticLine text={"bad"} statistic={bad} />
        <StatisticLine text={"all"} statistic={total()} />
        <StatisticLine text={"average"} statistic={average()} />
        <StatisticLine text={"positive"} statistic={positive() + '%'} />
      </tbody>
    </table>
  </div>
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1> Give feedback </h1>
      <Button onClick={() => setGood(good => good + 1)} text='good' />
      <Button onClick={() => setNeutral(neutral => neutral + 1)} text='neutral' />
      <Button onClick={() => setBad(bad => bad + 1)} text='bad' />
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

export default App