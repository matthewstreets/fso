
const Course = ({course}) => {
  const Header = () => {
    return (
      <h1>{course.name}</h1>
    )
  }

  const Content = () => {
    return (
      <div>
        {course.parts.map(part => <Part key={part.id} part={part} />)}
      </div>
    )
  }
  
  const Part = ({part}) => {
    return <p>{part.name} {part.exercises}</p>
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10, id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7, id: 2
      },
      {
        name: 'State of a component',
        exercises: 14, id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App