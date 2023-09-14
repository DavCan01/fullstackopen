// const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Header = ({name}) => { 
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}
const Total = ({exercises}) => { 

  const total = exercises.map(element => element.exercises).reduce((acc,curr) => acc + curr);

  return (
    <div>
      <p> total of {total} exercises </p>
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
      <Total exercises={course.parts} />
    </div>  
  );
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return (
    <div>  {courses.map(each_course => <Course key = {each_course.id} course={each_course}/>)} </div>
    )
}

export default App