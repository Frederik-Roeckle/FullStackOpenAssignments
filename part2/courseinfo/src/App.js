import React from "react";

const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Total = ({ course }) => {
  const total = course.parts.reduce(function (sum, part) {
    return (sum += part.exercises);
  }, 0);
  return <p>Number of exercises {total}</p>;
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Content = ({ course }) => {
  const result = course.parts.map((part) => part.name);
  console.log(result);

  const parts = course.parts.map((part) => <Part key={part.id} part={part} />);

  return <div>{parts}</div>;
};

const Course = (props) => {
  const { course } = props;

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
