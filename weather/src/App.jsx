import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <h1>Location</h1>
        <h2>degrees, condition</h2>
      </div>
    </>
  );
}

export default App;
