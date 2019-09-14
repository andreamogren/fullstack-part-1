import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const FeedbackButton = ({onClick, text}) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

const DisplayScores = ({text, score}) => {
    return (
        <p>{text} {score}</p>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const score = ((good * 1) + (neutral * 0) + (bad * -1))
    const total = (good + neutral + bad)
    const average = score / total 
    const positiveAverage = (good / total) * 100

    //Set values in functions to avoid displaying NaN?
    return (
        <div>
            <h1>Give feedback</h1>
            <FeedbackButton onClick={() => setGood(good + 1)} text="good"/>
            <FeedbackButton onClick={() => setNeutral(neutral + 1)} text="neutral"/>
            <FeedbackButton onClick={() => setBad(bad + 1)} text="bad"/>
            <h3>Statistics</h3>
            <DisplayScores text="Good:" score={good}/>
            <DisplayScores text="Neutral:" score={neutral}/>
            <DisplayScores text="Bad:" score={bad}/>
            <DisplayScores text="All:" score={total}/>
            <DisplayScores text="Average:" score={average}/>
            <DisplayScores text="Positive:" score={positiveAverage}/>
        </div>
    )
}

ReactDOM.render(
    <App />, 
    document.getElementById('root')
)