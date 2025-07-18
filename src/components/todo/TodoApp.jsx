import TodoNew from "./TodoNew";
import TodoData from "./TodoData";
import "./todo.css";

import img from "../../assets/react.svg";
import { useState } from "react";

const TodoApp = () => {
  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Learning react" },
    // { id: 2, name: "watching youtuby" },
  ]);

  const addNewTodo = (name) => {
    const newTodo = { id: randomIntFromInterval(1, 100000000), name: name };
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (id) => {
    const newTodo = todoList.filter((item) => item.id !== id);
    setTodoList(newTodo);
  };

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  return (
    <div className="todo-container">
      <h1 className="todo-title">TODO LIST</h1>
      <TodoNew addNewTodo={addNewTodo}></TodoNew>
      {todoList.length > 0 ? (
        <TodoData removeTodo={removeTodo} todoList={todoList}></TodoData>
      ) : (
        <div className="todo-image">
          <img src={img} alt="" className="logo" />
        </div>
      )}
    </div>
  );
};

export default TodoApp;
