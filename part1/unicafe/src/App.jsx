

import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistic = ({text, number }) => (
  <p> { text } {number} </p>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleSetGood = () => {
    setGood(good + 1)
  }
  const handleSetNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleSetBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1> Give feedback </h1>
      <Button onClick={handleSetGood} text='good' />
      <Button onClick={handleSetNeutral} text='neutral' />
      <Button onClick={handleSetBad} text='bad' />

      <h1> Statistics </h1>
      <Statistic text = 'good' number = {good} ></Statistic>
      <Statistic text = 'neutral' number = {neutral} ></Statistic>
      <Statistic text = 'bad' number = {bad} ></Statistic>

    </div>
  )
}

export default App