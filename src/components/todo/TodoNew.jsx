import React from "react";

export default function TodoNew(props) {
  const { addNewTodo } = props;
  return (
    <div className="todo-new">
      <input type="text" />
      <button onClick={addNewTodo}>Add</button>
    </div>
  );
}
