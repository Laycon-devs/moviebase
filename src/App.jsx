import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [countIncre, setCountIncre] = useState(0);
  const [countDecre, setCountDecre] = useState(0);

  const handleCountIncrement = () => {
    setCountIncre((prevCount) => (countIncre, prevCount + 1));
  };
  const handleCountDecrement = () => {
    setCountDecre((prevCount) => (countDecre, prevCount - 1));
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hycon Vite + React Revamp</h1>
      <div className="card">
        <button onClick={handleCountIncrement} style={{ marginRight: "2rem" }}>
          count is {countIncre}
        </button>
        <button onClick={handleCountDecrement}>count is {countDecre}</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
