import React, { useState } from "react";
import './App.css';
import CounterButton from "./CounterButton";

function App() {
  const [count, setCount] = useState(0);
  const buttonValues = [10, -100, 25];

  function changeCount(value) {
    setCount(count + value);
  }

  return (
    <>
      <div className="display">{count}</div>
      {buttonValues.map((value, index) => (
        <CounterButton key={index} value={value} changeCount={changeCount} />
      ))}
    </>
  );
}

export default App;
