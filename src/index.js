import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

const Button = ({onClick, text}) => {
    return(
        <button onClick={onClick}>{text}</button>
    )
}

const App = ({anecdotes}) => {
    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState(new Array(6).fill(0)) 
    const newAnecdote = () => {
        const randomAnecdote = Math.floor(Math.random() * anecdotes.length)
        setSelected(randomAnecdote)
    }

    const castVote = () => {
        const copy = [...points]
        copy[selected] += 1
        setPoints(copy)
    }
    const sortedVotes =  Math.max(...points) 
    const mostVotes= points.indexOf(sortedVotes)

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{anecdotes[selected]}</p>
            <p>has {points[selected]} votes</p>
            <Button onClick={() => newAnecdote()} text="New anecdote"/>   
            <Button onClick={() => castVote()} text="Vote"/>  
            <h1>Anecdote with the most votes</h1>
            <p>{anecdotes[mostVotes]}</p>
            <p>has {sortedVotes} votes</p>
        </div>
    )
}

ReactDOM.render(
    <App anecdotes={anecdotes}/>, 
    document.getElementById('root')
)