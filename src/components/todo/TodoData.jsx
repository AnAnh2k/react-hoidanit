import React from "react";

export default function TodoData(props) {
  //props là biến object
  const { name, age, data } = props;
  // const name = props.name
  // const age = props.age
  // const data = props.data
  // console.log(props);

  return (
    <div className="todo-data">
      <div>My name is {name}</div>
      <div>My name is {age}</div>
      <div>My name is {data.address}</div>
      <button>Click me!</button>
      <div>Learning react</div>
      <div>watching youtuby</div>
    </div>
  );
}
