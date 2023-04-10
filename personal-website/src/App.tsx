import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div></div>
      <h1>Adam Alilou</h1>
      <p>
        If you're reading this you're too early. Stay tuned, a brand new site is
        on the way.
      </p>
    </div>
  );
}

export default App;
