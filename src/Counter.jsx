import { useEffect } from "react";
import { useState } from "react";

function Counter() {
  const [ counter, setCounter ] = useState(0)
  const onDecre = () => {
    setCounter((counter) - 1)
  }
  const onIncre = () => {
    setCounter((prevCount) => prevCount + 1)
  }
const onReset = () => {
  setCounter(0)
}
useEffect(() => {
  setCounter(100);
}, []);
  return (
    <>
      <button onClick={onDecre}>-</button>
      <h1>{counter}</h1>
      <button onClick={onIncre}>+</button>
      <button onClick={onReset}>Reset</button>
    </>
  );
}

export default Counter;
