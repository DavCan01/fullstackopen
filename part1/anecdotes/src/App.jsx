import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const VotedAnecdote = ({text, points}) => {
  return (
    <div>
      <p>{text}<br></br>
      This anecdote has {points} points  
      </p>
    </div>
  )
}

const App = () => {
  const [selected, setSelected] = useState(0)
  const [points,setPoints] = useState(Array(8).fill(0))

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  // ! REMEMBER - Treat arrays and objects as read-only. That means that we have to make a new array to assign the new values. 
  const vote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  const mostVotedAnecdoteIndexOf = () => {
    return points.indexOf(Math.max(...points))
  }
   
  return (
    <div>

      <h1> Anecdote of the day</h1>
      <p>{anecdotes[selected]}<br></br></p>
      <p>This anectode has {points[selected]} points </p>
      <Button onClick={() => vote()} text = "Vote"/>
      <Button onClick={() => setSelected(Math.floor(Math.random() * (anecdotes.length - 1)))} text = "Next anecdote"/>

      <h1> Anecdote with the most votes</h1>
      <VotedAnecdote text = {anecdotes[mostVotedAnecdoteIndexOf()]} points = {points[mostVotedAnecdoteIndexOf()]}/>
      
    </div>
  )
}

export default App