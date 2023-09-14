// const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Header = ({name}) => { 
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}
const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
}
const Content = ({ parts }) => {
  
  return (
    <>
      {parts.map(each_part => <Part key = {each_part.id} part={each_part} />)}    
    </>
  );
}
const Course = ({course}) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </div>  
  );
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  return <Course course={course} />
}

export default App