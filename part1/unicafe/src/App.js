import {useState } from 'react'

const Feedback = () => {
  return (
    <h1>Give feedback:</h1>
  )
}

const Statistics = ({feedback}) => {
  return (
    <div>
      <h1><u>Statistics</u></h1>
      <p>Good: {feedback[0]}</p>
      <p>Neutral: {feedback[1]}</p>
      <p>Bad: {feedback[2]}</p>
    </div>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  const [good, setGood] = useState(0) 
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0) 

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Feedback />
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />
      <Statistics feedback={[good, neutral, bad]} />
    </div>
  )
}

export default App;
