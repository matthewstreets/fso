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
      <p>All: {feedback[3]}</p>
      <p>Average: {feedback[4]}</p>
      <p>Positive: {feedback[5]}</p>
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

  const all = good + neutral + bad
  const avg = (1*(good) + 0*(neutral) -1*(bad))/all
  const positive = 100 * (good / all) + " %" 

  return (
    <div>
      <Feedback />
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />
      <Statistics feedback={[good, neutral, bad, all, avg, positive]} />
    </div>
  )
}

export default App;
