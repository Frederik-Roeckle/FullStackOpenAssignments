import react from "react";

const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Total = ({ course }) => {
  const total = course.parts.reduce(function (sum, part) {
    return (sum += part.exercises);
  }, 0);
  return (
    <p>
      <b>Number of exercises {total}</b>
    </p>
  );
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

export default Course;
