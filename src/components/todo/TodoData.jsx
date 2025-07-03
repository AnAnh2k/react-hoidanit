import React from "react";

export default function TodoData(props) {
  //props là biến object
  const { todoList, removeTodo } = props;
  const handleClick = (id) => {
    removeTodo(id);
  };

  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        return (
          <div key={item.id} className="todo-item">
            <div>{item.name}</div>
            <button
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleClick(item.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
