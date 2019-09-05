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

const App = () => {
    const [ counter, setCounter ] = useState(0)
    
    setTimeout(
        () => setCounter(counter + 1), 1000
    )
    
    return (
        <div>{counter}</div>
    )
}

ReactDOM.render(
    <App />, 
    document.getElementById('root')
)