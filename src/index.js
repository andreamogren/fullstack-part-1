import React, { useState } from 'react'
import ReactDOM from 'react-dom'

/* const Header = (props) => {
    return (
        <>
            <h1>{props.course}</h1>
        </>
    )
}

const Part = (props) => {
    return (
        <>
            <p>
                {props.part} {props.exercises}
            </p>
        </>
    )
}

const Content = (props) => {
    return (
        <>
            <Part part={props.parts[0].name} exercises={props.parts[0].exercises}/>
            <Part part={props.parts[1].name} exercises={props.parts[1].exercises}/>
            <Part part={props.parts[2].name} exercises={props.parts[2].exercises}/>
        </>
    )
}
const Total = (props) => {
    return(
        <>
            <p>
                Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
            </p>
        </>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,         
            },
            {
                name: 'Using props to pass data',
                exercises: 7 
            },
            {
                name: 'State of a component',
                exercises: 14 
            }
        ]
    }

    return (
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
} */
/* const Hello = ({name, age}) => {
    const bornYear = () => new Date().getFullYear() - age
    return (
      <div>
        <p>
          Hello {name}, you are {age} years old
        </p>
        <p>So you were probably born in {bornYear()}</p>
      </div>
    )
  }
  
  const App = () => {
    const name = 'Peter'
    const age = 10
  
    return (
      <div>
        <h1>Greetings</h1>
        <Hello name="Maya" age={26 + 10} />
        <Hello name={name} age={age} />
      </div>
    )
  } 
  
  
ReactDOM.render(<App/>, document.getElementById('root')); */

const Display = ({counter}) => <div>{counter}</div>
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>


const App = (props) => {
    const [counter, setCounter] = useState(0)
    const setToValue = (value) => setCounter(value)
    const [clicks, setClicks] = useState({
        left: 0, right: 0
    })

    const handleLeftClicks = () => setClicks({...clicks, left: clicks.left + 1 })
    const handleRightClicks = () => setClicks({...clicks, right: clicks.right + 1})


    return (
        <div>
            <Display counter={counter}/>
            <Button text="Plus" onClick={() => setToValue(counter + 1)}/>
            <Button text="Minus" onClick={() => setToValue(counter - 1)}/>
            <Button text="Reset" onClick={() => setToValue(0)}/>
            <div>
                {clicks.left}
                <button onClick={handleLeftClicks}>left</button>
                <button onClick={handleRightClicks}>right</button>
                {clicks.right}
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />, 
    document.getElementById('root')
)