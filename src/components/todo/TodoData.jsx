import React from "react";

export default function TodoData(props) {
  //props là biến object
  const { todoList } = props;

  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        return (
          <div key={item.id} className="todo-item">
            <div>{item.name}</div>

            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
