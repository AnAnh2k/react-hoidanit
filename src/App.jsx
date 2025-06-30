import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyComponent from "./components/learn/MyComponent";
import {
  ThirdComponent,
  SecondComponent,
} from "./components/learn/SecoundComponent";

function App() {
  const [count, setCount] = useState(0);

  const MyFunction = () => {
    return <div>hẹ hẹ hẹ</div>;
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello word</h1>
      <MyFunction></MyFunction>
      <MyComponent></MyComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
