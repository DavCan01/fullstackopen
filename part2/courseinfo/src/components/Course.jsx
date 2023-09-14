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

export default Course