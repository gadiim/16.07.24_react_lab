import React from "react";

function CounterButton(props) {
  function changeCount() {
    props.changeCount(props.value);
  }

  return (
    <>
      <button className="btn" onClick={changeCount}>
        {props.value > 0 ? `+${props.value}` : props.value}
      </button>
    </>
  );
}

export default CounterButton;

