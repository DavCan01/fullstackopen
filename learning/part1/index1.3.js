
// {} significa que importamos una funcion

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Forma simplificada de Display
const Display = ({ counter }) => <div>{counter}</div>

/*
const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
} 
*/

// Forma simplificada de Button
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

/* 
const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}*/

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button handleClick={increaseByOne} text='plus'/>
      <Button handleClick={decreaseByOne} text='minus'/>
      <Button handleClick={setToZero} text='zero'/>
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)

/* INCORRECT FORM OF RE-RENDERING ELEMENTS

setInterval(() => {
  refresh()
  counter += 1
}, 1000)

const refresh = () => {
  ReactDOM.render(<App counter={counter} />, 
  document.getElementById('root'))
}

*/
