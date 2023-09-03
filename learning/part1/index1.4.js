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
  // const ["nombre variable", "funcion a la que se llama para cambiarla"] = useState ([ elementos de la variable ])
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClick = () =>
  setClicks({ ...clicks, left: clicks.left + 1 })

  const handleRightClick = () =>
  setClicks({ ...clicks, right: clicks.right + 1 })

  /* 
  ! ESTA PROHIBIDO HACERLO ASI: 

  En React no podemos alterar el estado del objeto directamente, aunque en la practica funciona, es peligroso
  SIEMPRE debemos asignar un nuevo objeto 

  const handleLeftClick = () => {
    clicks.left++
    setClicks(clicks)
  }

  */

  /* Esto se puede hacer de esta forma larga y EXPRESA
  const handleLeftClick = () => {
    const newClicks = { 
      left: clicks.left + 1, 
      right: clicks.right 
    }
    setClicks(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = { 
      left: clicks.left, 
      right: clicks.right + 1 
    }
    setClicks(newClicks)
  }
  */

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  )
}

const App2 = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([]) // * Creamos una matriz vacia
  // ! CUIDADO - Se debe hacer con "concat()" no con "push()" ya que internamente concat devuelve un nuevo array
  // ! con el elemento añadido, mientras que push devuelve el mismo. No podemos modificar el elemento original como hemos
  // ! mencionado anteriormente

  /* 
  * Como hacer un setter 
  ? Despues, indicamos el valor que sea y punto
  ? RECUERDA - Solo se puede cambiar el valor del estado de la variable con su funcion asociada
  const setToValue = (newValue) => () => {
    setValue(newValue)
  }*/

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
    </div>
  )
}

const App3 = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([]) // * Creamos una matriz vacia
  // ! CUIDADO - Se debe hacer con "concat()" no con "push()" ya que internamente concat devuelve un nuevo array
  // ! con el elemento añadido, mientras que push devuelve el mismo. No podemos modificar el elemento original como hemos
  // ! mencionado anteriormente

  /* 
  * Como hacer un setter 
  ? Despues, indicamos el valor que sea y punto
  ? RECUERDA - Solo se puede cambiar el valor del estado de la variable con su funcion asociada
 
  const setToValue = (newValue) => () => {
    setValue(newValue)
  } */
  
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text='left' />
      <Button onClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)

