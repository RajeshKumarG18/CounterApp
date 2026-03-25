import React, { useState } from "react";
// useState is used to add the state to the new component/functionalitites

function App() {

const [count, setCount] = useState(0);
const [step, setStep] = useState("");
const [history, setHistory] = useState([]);



// Saves previous count history
const updateCount = (operation) => {
setHistory(prev => [...prev, count]);
setCount(prev => operation(prev));
};



// Increments the count value enetred by the end user
const increment = () => {

const value = Number(step) || 0;

updateCount(prev => prev + value);
};



// Decrements the count value enetred by the end user
const decrement = () => {

const value = Number(step) || 0;

updateCount(prev => prev - value);
};



// Resets the count value to 0
const reset = () => {

updateCount( () => 0);
};



// Undo the previous count output
const undo = () => {

if (history.length === 0)
  return;

setCount(history [history.length - 1]);

setHistory(prev => prev.slice(0, -1));
};




return (

    <div style={{ textAlign: "center", marginTop: "100px"}}>
  
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


      <div style={{ display: "flex", justifyContent: "center", gap: "15px"}}>

        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
        <button onClick={reset}>Reset</button>
        <button onClick={undo}>Undo</button>

      </div>
    </div>
  );
}


export default App;