// import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';


// function App() {
//   const [count, setCount] = useState(0)
//   function changeCount() {
//     setCount(count + 25)
//   }
//   return (
//     <>
//       <div>{count}</div>
//       <button onClick = {changeCount}>+ 25</button>
//       <button></button>
//       <button></button>
//     </>
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }

// export default App;


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
