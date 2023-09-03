// {} significa que importamos una funcion

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
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

