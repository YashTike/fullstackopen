const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.title} {props.exercises}
      </p>
    </>
  );
};

const Content = (props) => {
  const [part1, part2, part3] = props.course.parts;
  return (
    <div>
      <Part title={part1.name} exercises={part1.exercises} />
      <Part title={part2.name} exercises={part2.exercises} />
      <Part title={part3.name} exercises={part3.exercises} />
    </div>
  );
};

const Total = (props) => {
  const [part1, part2, part3] = props.course.parts;
  return (
    <div>
      <p>
        Number of exercises{" "}
        {part1.exercises + part2.exercises + part3.exercises}
      </p>
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
