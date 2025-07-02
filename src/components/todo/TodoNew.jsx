import React, { useState } from "react";

export default function TodoNew(props) {
  // useTtate hook (getter/setter)
  const { addNewTodo } = props;
  const [valueInput, SetValueInput] = useState("");
  const handleClick = () => {
    addNewTodo(valueInput);
  };

  const handleOnChange = (name) => {
    SetValueInput(name);
  };
  return (
    <div className="todo-new">
      <input
        type="text"
        onChange={(event) => {
          handleOnChange(event.target.value);
        }}
      />
      <button style={{ cursor: "pointer" }} onClick={handleClick}>
        Add
      </button>
      <div>My text input is = {valueInput}</div>
    </div>
  );
}
