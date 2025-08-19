import { useState } from "react";

function HocExample() {
  return (
    <div className="App">
      <h1>HOC Example</h1>

      {/* Passing Counter component into HOCs  */}
      <HOCRed cmp={Counter} />
      <HOCGreen cmp={Counter} />
      <HOCBlue cmp={Counter} />
    </div>
  );
}

//  Higher Order Components
function HOCRed(props: { cmp: React.ComponentType }) {
  const Cmp = props.cmp;
  return (
    <h2 style={{ backgroundColor: "red", width: 200, padding: 10 }}>
      <Cmp />
    </h2>
  );
}

function HOCGreen(props: { cmp: React.ComponentType }) {
  const Cmp = props.cmp;
  return (
    <h2 style={{ backgroundColor: "green", width: 200, padding: 10 }}>
      <Cmp />
    </h2>
  );
}

function HOCBlue(props: { cmp: React.ComponentType }) {
  const Cmp = props.cmp;
  return (
    <h2 style={{ backgroundColor: "blue", width: 200, padding: 10 }}>
      <Cmp />
    </h2>
  );
}

function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default HocExample;
