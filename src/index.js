import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const FeedbackButton = ({onClick, text}) => {
    return (
        <>
        <button onClick={onClick}>{text}</button>
        </>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    return (
        <div>
            <h1>Give feedback</h1>
            <FeedbackButton onClick={() => setGood(good + 1)} text="good"/>
            <FeedbackButton onClick={() => setNeutral(neutral + 1)} text="neutral"/>
            <FeedbackButton onClick={() => setBad(bad + 1)} text="bad"/>
            <h3>Statistics</h3>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
        </div>
    )
}

ReactDOM.render(
    <App />, 
    document.getElementById('root')
)