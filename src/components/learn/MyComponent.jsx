import React from "react";
import "./style.css";

export default function MyComponent() {
  const name = "My Component";
  const name1 = 20;
  const name2 = null;
  const name3 = undefined;
  const name4 = true;
  const name5 = [1, 2, 3];
  const name6 = { n: "ducanh", age: 21 };
  return (
    <>
      <div>{JSON.stringify(name6)}</div>
      <div className="child" style={{ fontSize: "10px" }}>
        hẹ hẹ
      </div>
    </>
  );
}
