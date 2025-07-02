import React from "react";

export default function TodoData(props) {
  //props là biến object
  const { todoList } = props;
  // const name = props.name
  // const age = props.age
  // const data = props.data

  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        console.log(item, index);

        return (
          <div className="todo-item">
            <div>{item.name}</div>

            <button>Delete</button>
          </div>
        );
      })}

      <div>{JSON.stringify(props.todoList)}</div>
    </div>
  );
}
