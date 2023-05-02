import {useState } from 'react'

const Feedback = () => {
  return (
    <h1>Give feedback:</h1>
  )
}

const Statistics = ({feedback}) => {
  if (feedback[3] === 0) {
    return (
      <div>
        <h1><u>Statistics</u></h1>
        <p>No feedback given.</p>
      </div>
    )
  } else return (
    <div>
      <h1><u>Statistics</u></h1>
      <table>
        <tbody>
        <StatisticLine text='Good' value={feedback[0]} />
        <StatisticLine text='Neutral' value={feedback[1]} />
        <StatisticLine text='Bad' value={feedback[2]} />
        <StatisticLine text='All' value={feedback[3]} />
        <StatisticLine text='Average' value={feedback[4]} />
        <StatisticLine text='Positive' value={feedback[5]} />
        </tbody>
      </table>
    </div>
  )
}

const StatisticLine = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  const [good, setGood] = useState(0) 
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const avg = (1*(good) + 0*(neutral) -1*(bad))/all
  const positive = 100 * (good / all) + " %" 

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
      <Statistics feedback={[good, neutral, bad, all, avg, positive]} />
    </div>
  )
}

export default App;
