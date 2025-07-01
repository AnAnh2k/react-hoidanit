import "./components/todo/todo.css";
import TodoNew from "./components/todo/TodoNew";
import TodoData from "./components/todo/TodoData";
import img from "./assets/react.svg";

function App() {
  const hoidanit = "Eric";
  const age = 25;
  const data = {
    address: "Ha Noi",
    country: "Viet Nam",
  };
  return (
    <>
      <div className="todo-container">
        <h1 className="todo-title">TODO LIST</h1>
        <TodoNew></TodoNew>
        <TodoData name={hoidanit} age={age} data={data}></TodoData>
        <div className="todo-image">
          <img src={img} alt="" className="logo" />
        </div>
      </div>
    </>
  );
}

export default App;
