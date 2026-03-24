import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState("");

  const increment = () => {
    setCount(prev => prev + Number(step));
  };

  const decrement = () => {
    setCount(prev => prev - Number(step));
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Counter App</h1>

      <h2>{count}</h2>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(e.target.value)}
          placeholder="Enter a value"
        />
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;